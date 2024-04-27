// globals.d.ts
declare global {
  interface Window {
    daum: any; // `any` 대신 구체적인 타입을 선언할 수도 있습니다.
  }
}

export {}; // 이 파일이 모듈로 처리되도록 합니다.
