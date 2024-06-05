// 이름이라는 변수에 string 타입을 지정, string 타입만 들어올 수 있음
// string, number, boolean, null, undefined, bignit, [], {} 등의 타입 지정 가능
let 이름1: string = "kim";

// Array 안의 타입을 string으로 지정
let 이름2: string[] = ["kim", "park"];

// 오브젝트 안의 name 이라는 속성의 타입을 string으로 지정
let 이름3: { name: string } = { name: "kim" };

// name 속성은 옵션, 들어와도 안들어와도 오류 없음
let 이름4: { name?: string } = {};

// string이나 number 타입
let 이름5: string | number = 123;

// 타입 또한 변수에 담아 지정 가능
type 내타입 = string | number;

let 이름6: 내타입 = 123;

// 함수에도 타입 지정 가능
// return값도 타입 지정 가능
function 함수(x: number): number {
  return x * 2;
}

// 튜플 타입
// 무조건 첫째는 number, 두번째는 boolean
type Member1 = [number, boolean];

let john1: Member1 = [123, false];

// object에 타입지정 해야할 속성이 많으면 전체 적용 가능
type Member2 = {
  // 전체 적용
  [key: string]: string;
};

let john2: Member2 = { name1: "123", age: "123" };

// class에도 타입지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
