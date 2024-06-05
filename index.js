// 이름이라는 변수에 string 타입을 지정, string 타입만 들어올 수 있음
// string, number, boolean, null, undefined, bignit, [], {} 등의 타입 지정 가능
var 이름1 = "kim";
// Array 안의 타입을 string으로 지정
var 이름2 = ["kim", "park"];
// 오브젝트 안의 name 이라는 속성의 타입을 string으로 지정
var 이름3 = { name: "kim" };
// name 속성은 옵션, 들어와도 안들어와도 오류 없음
var 이름4 = {};
// string이나 number 타입
var 이름5 = 123;
var 이름6 = 123;
// 함수에도 타입 지정 가능
// return값도 타입 지정 가능
function 함수(x) {
    return x * 2;
}
var john1 = [123, false];
var john2 = { name1: "123", age: "123" };
// class에도 타입지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
