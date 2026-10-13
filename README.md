# 개인 프로필 웹사이트

Node.js 22 이상에서 실행합니다. 외부 패키지 설치나 빌드는 필요하지 않습니다.

```sh
npm start
```

브라우저에서 http://localhost:3000 을 엽니다. 종료하려면 터미널에서 Ctrl+C를 누릅니다.

다른 포트를 사용하려면:

```sh
PORT=3001 npm start
```

포트가 이미 사용 중이면 `PORT=0 npm start`로 빈 포트를 자동 선택할 수 있습니다. 터미널에 표시되는 주소로 접속하세요.

서버 코드 변경 시 자동 재시작하려면 `npm run dev`를 사용합니다. HTML, CSS, JavaScript 수정 사항은 브라우저를 새로고침하면 반영됩니다.

## 폴더 구조

```text
public/
  index.html           # 시작 페이지
  styles.css           # 디자인 및 반응형 레이아웃
  script.js            # 메뉴, 프로젝트 링크 및 이메일 기능
  resume-example.txt   # 다운로드용 이력 예시
server.mjs             # Node.js 기본 모듈 기반 로컬 정적 서버
package.json           # 실행 명령 (의존성 없음)
vercel.json            # Vercel 정적 배포 설정
stitch-export/         # 원본 Stitch 디자인 참고 자료
```

웹사이트 파일은 `public/` 안에서 수정합니다. 이미지를 추가할 경우 `public/assets/`를 만들어 보관할 수 있습니다. 로컬 서버는 `public/` 파일만 제공합니다.

## Vercel 배포 준비

프로젝트를 Git 저장소에 올린 뒤 Vercel에서 해당 저장소를 가져옵니다. Root Directory는 이 프로젝트의 루트로 선택합니다. `vercel.json`이 프레임워크를 Other로, 출력 디렉터리를 `public`으로 지정하며 설치와 빌드 명령은 비워 둡니다. Vercel은 정적 파일을 제공하므로 `server.mjs`를 실행하지 않습니다.

설정 근거: [Vercel 공식 정적 설정 문서](https://vercel.com/docs/project-configuration/vercel-json).

## 콘텐츠

소개는 강아지 간식에 관심이 있는 연구자이며 전문 분야는 간식데이터 분석, 머신러닝, 생성형 AI입니다. 연락 이메일은 `hong@example.com`입니다. 제공되지 않은 이름, 사진, 경력, 성과, 프로젝트 상세 설명과 링크는 예시로 표시되어 있습니다.

이메일 링크와 연락 폼은 기기에 설정된 메일 앱을 엽니다. 원본 이미지는 `public/assets/`에 저장되어 있으며, Google Fonts에는 인터넷 연결이 필요합니다. React, Next.js 및 Tailwind 런타임을 사용하지 않습니다.
