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

tsconfig.json 파일에서 `rootDir`, `outDir` 설정해서 개발용, 배포용을 분리해서 관리할 수 있다.

## 0828
### Basic Types
```typescript
// number
let id: number = 5
// string
let name: string = 'Kim hak jae'
// boolean
let isHandsome: boolean = true
//any
let x: any = 'Hello'
```

### array
```typescript
let arr: number[] = [1,2,3,4,5]
let arr2: any[] = [1,2,'hello',true]
```

### Tuple
```typescript
let person: [number, string, boolean] = [1, 'Kim', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Kim'],
  [2, 'Park']
]
```

### Union
```typescript
// Union
let pid: string | number = 22

pid = '22'
```

### Enum
기본은 0부터 시작. 시작 값을 정해주거나 각자 값 할당 가능
```typescript
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction1.Up) // 1
console.log(Direction2.Left) // Left
```

### Objects
`type` 을 사용하면 코드가 좀 더 깔끔해짐. `interface`와 비슷
```typescript
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Kim'
}
```