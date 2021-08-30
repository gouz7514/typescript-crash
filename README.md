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

## Type Assertions
```typescript
let cid: any = 1

// 아래의 두가지 방식 모두 가능
let customerId = <number>cid
let customerId = cid as number
```

## Functions
매개변수와 함수의 반환 값에 타입 선언. 반환 값이 없는 경우 `void`
```typescript
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | numer): void {
  console.log(message)
}
```

## Interface
```typescript
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number // 없어도 되는 값
}
```
`type`과 다른 점은 `type`은 primitive로 선언 가능
```typescript
type Point = number | string // 이건 됨
interface Point = number | string // 이건 안됨
```

## Function Interface
인터페이스를 선언해서 함수에 사용이 가능하다
```typescript
// 아래와 같이 정해진 타입의 파라미터, 반환 값을 갖도록 할 수 있음
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
```

## 0830

## Class
```typescript
class Person {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name= name
  }
}

const kim = new Person(1, 'Kim')
```
interface는 js로 컴파일되지 않는다. 그래서 클래스를 사용<br />
interface는 ts 측면에서 더 안전

### 상속
위에서 생성한 `Person` 클래스 상속하는 `Employee` 클래스 생성하기
```typescript
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name) // 중요
    this.position = position
  }
}
```

## Generic
아래와 같이 코드를 작성하면 에러 X
```typescript
function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

let numArr = getArray([1,2,3,4])
let strArr = getArray(['kim', 'park', 'choi'])

numArr.push('hello') // any 이므로 에러 X
```

이런 상황 방지하기 위해 Generic 사용 가능
```typescript
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4])
let strArr = getArray<string>(['kim', 'park', 'choi'])
```