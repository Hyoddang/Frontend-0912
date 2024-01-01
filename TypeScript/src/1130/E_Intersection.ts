{

//! Intersection 타입

//! 1. Intersection 타입이란?
// : 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘
// : 단일 타입을 생성하는 방법
// : >> 여러 타입을 모두 만족하는 하나의 타입
// : AND 연산자 (A 그리고 B)
// : & 기호를 사용하여 구현

//! 2. Intersection 타입 사용법
// 기본 사용법
// type IntersectionType = Type1 & Type2 & Type3 ... ;

//! 3. Intersection 타입 예시
type Employee = {
  name: string;
  startDate: Date;
}

type Manager = Employee & { group: string};
let managerA: Manager = {
  name: 'Yoon',
  startDate: new Date(),
  group: 'Dev'
}

//! 4. 인터섹션 타입의 특징
// 타입 결합
// : 모든 타입의 속성을 결합하여 새로운 타입을 생성
// : 유연성과 정확성을 가짐.

//! 5. 인터섹션 타입 사용
type Admin = {
  isAdmin: boolean;
}

type User = {
  name: string;
  email: string;
}

type AdminUser = Admin & User;

function createAdminUser(user: User): AdminUser {
  return { ...user, isAdmin: true };
}

const newUser: User = {
  name: 'Hyo',
  email: 'hyoddang'
}

console.log(createAdminUser(newUser));


}