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

// export {}