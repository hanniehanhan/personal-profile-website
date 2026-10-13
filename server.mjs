import http from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(fileURLToPath(new URL('./public/', import.meta.url)));
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  console.error('PORT는 0~65535 범위의 정수여야 합니다.');
  process.exit(1);
}
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};
function insideRoot(filename) {
  return filename === root || filename.startsWith(root + path.sep);
}
const server = http.createServer(async (req, res) => {
  function reply(status, message, headers = {}) {
    res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
    res.end(req.method === 'HEAD' ? undefined : message);
  }
  if (!['GET', 'HEAD'].includes(req.method)) {
    reply(405, 'Method Not Allowed', { Allow: 'GET, HEAD' });
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.includes('\0')) {
      reply(400, 'Bad Request');
      return;
    }
    let filename = path.resolve(root, '.' + pathname);
    if (!insideRoot(filename)) {
      reply(403, 'Forbidden');
      return;
    }
    filename = await realpath(filename);
    if (!insideRoot(filename)) {
      reply(403, 'Forbidden');
      return;
    }
    if ((await stat(filename)).isDirectory()) {
      filename = await realpath(path.join(filename, 'index.html'));
      if (!insideRoot(filename)) {
        reply(403, 'Forbidden');
        return;
      }
    }
    const content = await readFile(filename);
    res.writeHead(200, {
      'Content-Type': types[path.extname(filename).toLowerCase()] ?? 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) {
    if (error instanceof URIError || error.code === 'ERR_INVALID_URL') reply(400, 'Bad Request');
    else if (['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code)) reply(404, 'Not Found');
    else if (['EACCES', 'EPERM'].includes(error.code)) reply(403, 'Forbidden');
    else {
      console.error('파일 제공 오류:', error.message);
      reply(500, 'Internal Server Error');
    }
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `포트 ${port}가 사용 중입니다. PORT=3001 npm start로 다른 포트를 선택하세요.`
    : `서버 시작 실패: ${error.message}`);
  process.exit(1);
});
server.listen(port, '127.0.0.1', () => {
  console.log(`개인 프로필 웹사이트: http://localhost:${server.address().port}`);
  console.log('종료: Ctrl+C');
});
