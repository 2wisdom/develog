# Lizzie's Develog

![index](/public//md/index.png)

이 프로젝트는 Next.js와 MDX를 사용하여 개발 블로그를 만드는 것을 목표로 합니다.

Next.js는 React 기반의 프레임워크로, SSR(Server-Side Rendering) 및 정적 사이트 생성 기능을 제공합니다.

MDX는 Markdown과 JSX를 결합한 확장형 문법으로, React 컴포넌트를 Markdown 파일에서 사용할 수 있도록 합니다.

<br />

> `Develog` 의 의미는 개발하다라는 뜻의 `Develop` 과 `Blog` 를 합친 말입니다. 😉

<br />

## 기능

---

<br />

- Markdown 파일을 사용하여 블로그 게시물을 작성할 수 있습니다.

- MDX를 사용하여 React 컴포넌트를 Markdown 파일에서 사용할 수 있습니다.

- 게시물은 개발관련 게시물과 일상 게시물로 나눠서 작성할 수 있습니다. (폴더구조 참고)

<br />

## 시작하기

---

<br />

이 섹션에서는 프로젝트를 실행하기 위한 필수 사항과 설치 방법을 안내합니다.

<br />

### 설치하기

다음 명령어를 사용하여 프로젝트를 설치합니다.

```bash
$ git clone https://github.com/2wisdom/develog.git

$ cd develog/

$ yarn install
```

### 실행하기

다음 명령어를 사용하여 개발 서버를 실행합니다.

```bash
$ yarn dev
```

<br />

## 프로젝트 설정

---

<br />

이 섹선에서는 프로젝트 설정과 관련된 정보를 제공합니다.

<br />

### Google Firebase 설정

1. [Google Firebase 콘솔](https://console.firebase.google.com/)에 접속하여 프로젝트를 생성합니다.

2. 생성한 프로젝트에서 Firebase 설정 파일(firebaseConfig)을 얻습니다.

3. 프로젝트 루트 디렉토리에 .env 파일을 생성하고, 다음과 같이 Firebase 설정 정보를 추가합니다.

```shell
FIREBASE_API_KEY=YOUR_API_KEY
FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
FIREBASE_APP_ID=YOUR_APP_ID
```

### Google Analytics 설정

1. Google Analytics 계정을 생성하고 추적 ID를 얻습니다.

2. 프로젝트 루트 디렉토리에 .env 파일을 열고 다음과 같이 Google Analytics 추적 ID를 추가합니다.

```shell
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=YOUR_ANALYTICS_ID
```

<br />

## 폴더 구조

---

<br />

프로젝트의 주요 폴더 및 파일 구조는 다음과 같습니다.

<br />

```ruby
.
├── public/                     # 정적 파일들 (이미지 파일 등)
│   ├── posts/                  # 게시물 이미지 폴더
│   │   ├── daily/              # 일상 게시물 이미지 폴더
│   │   │   ├── 1/              # n번 게시물 이미지 폴더
│   │   │   └── ...
│   │   ├── develop/            # 개발 게시물 이미지 폴더
│   │   │   ├── 1/
│   │   └── └── ...
├── src/
│   ├── pages/                  # Next.js의 페이지 컴포넌트들
│   │   └── posts/
│   │       ├── daily/          # 일상 게시물 설정 폴더
│   │       │   ├── [slug].tsx
│   │       │   └── index.tsx
│   │       ├── develop/        # 개발 게시물 설정 폴더
│   │       │   ├── [slug].tsx
│   │       └── └── index.tsx
├── posts/                      # 게시물 mdx 파일 폴더
│   ├── daily/                  # 일상 게시물 폴더
│   │   ├── post.mdx
│   │   └── ...
│   ├── develop/                # 개발 게시물 폴더
│   │   ├── post.mdx
│   └── └── ...
│   ├── styles/                 # 프로젝트 스타일 관련 파일들
│   ├── components/             # 재사용 가능한 컴포넌트 파일들
│   └── ...
├── package.json                # 프로젝트 의존성 및 스크립트 등
├── next.config.js              # Next.js 구성 파일
└── ...
```

<br />

## 사용된 라이브러리

---

<br />

프로젝트를 개발하는 데 사용된 주요 라이브러리들입니다.

<br />

- `next`: Next.js 프레임워크
- `react`: React 라이브러리
- `typescript`: TypeScript 언어 지원
- `firebase`: Firebase 개발 플랫폼을 위한 JavaScript 라이브러리
- `@next/mdx`: Next.js에서 MDX를 사용하기 위한 라이브러리
- `@mdx-js/react`: MDX 컴포넌트를 렌더링하는 React 라이브러리
- `@emotion/react`: Emotion CSS-in-JS 라이브러리
- `@mui/material`: Material-UI 컴포넌트 라이브러리

<br />

## 연락처

---

<br />

해당 프로젝트의 이슈 및 피드백을 환영합니다 !

- leejihye7117@gmail.com
- [Issue Here !](https://github.com/2wisdom/develog/issues)
