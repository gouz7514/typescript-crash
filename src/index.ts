// Baic Types
let id: number = 5
// let name: string = 'Kim hak jae'
let isHandsome: boolean = true
let x: any = 'Hello'
let age: number

let arr: number[] = [1,2,3,4,5]
let arr2: any[] = [1,2,'hello',true]

// Tuple
let person: [number, string, boolean] = [1, 'Kim', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Kim'],
  [2, 'Park']
]

// Union
let pid: string | number = 22

pid = '22'

// Enum
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

console.log(Direction1.Up)
console.log(Direction2.Left)

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Kim'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}

console.log(addNum(2,3))
log('hello')

// Interfaces
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 2,
  name: 'Choi'
}

// export {}