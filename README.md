# typescript-crash
typescript crash course<br />
[TypeScript Crash Course 2021](https://youtu.be/BCg4U1FzODs)

## 0827
`~.ts` 파일을 컴파일하려면 `tsc 파일명`와 같이 입력한다<br />
이게 귀찮다? `tsc --watch 파일명` 

**tsconfig.json 파일 생성하기**
```typescript
tsc --init
```
default target이 es5라 var 커맨드로 컴파일되는 것을 확인할 수 있다.<br />
이 경우 target을 es6로 바꿔주면 아래와 같이 바뀌는 것을 확인할 수 있다.
```javascript
"use strict";

let id = 5;
```