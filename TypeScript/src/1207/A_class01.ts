{

//! 1. 클래스(Class)

//? 클래스 정의
// : '객체'를 생성하기 위한 템플릿 또는 설계도
// : 데이터와 해당 데이터를 조작하는 코드를 함께 캡슐화

//? 클래스 특징
// 캡슐화: 데이터(속성)와 데이터를 처리하는 함수(메서드)를 하나로 묶는 것
// 추상화: 복잡한 세부사항X, 필수적인 부분만을 강조
// 상속: 한 클래스의 속성과 메서드를 다른 클래스가 상속받을 수 있는 것
// 다형성: 하나의 인터페이스를 통해 다른 클래스의 인스턴스를 다룰 수 있는 것

//! 2. 객체(Object)

//? 객체 정의
// : '클래스'에 의해서 생성된 인스턴스(instance)
// : 실제 프로그램에서 사용되는 데이터와 기능의 집합체

//? 객체 특징
// 상태와 행동: 객체는 속성(상태)과 메서드(행동)를 갖는 것
// 독립성: 각 객체는 독립적인 성격을 가지며 다른 객체와 상호 작용

//! 클래스 '정의'와 객체 '생성'

//? 클래스 정의
// : class 키워드를 사용하여 정의
// : 클래스명은 대문자로 시작

class ClassName {
  // 속성(상태): 멤버 변수, 클래스의 상태를 저장

  // 메서드(행동): 함수, 클래스의 동작을 정의
  //? 메서드 종류
  // - 인스턴스 메서드
  //   : 일반적인 메서드, 클래스의 인스턴스를 통해 호출, 인스턴스의 프로퍼티에 접근 가능
  // - 정적 메서드
  //   : 클래스 자체에 속하는 메서드, 인스턴스 없이 클래스 이름을 사용하여 호출
}

class Book {
  // 멤버 변수는 클래스에 속하는 변수
  title!: string;
  author!: string;

  // 메서드는 클래스 내부에서 정의된 함수
  // : 객체의 행동을 나타냄
  // : 클래스의 인스턴스를 통해 호출

  // this 키워드
  // : 해당 메서드가 쓰이는 클래스의 멤버변수에 접근
  // : 현재 인스턴스를 가리킴
  describe(): string {
    return `${this.title} is written by ${this.author}`;
  }
}

// 클래스를 생성하고 멤버 변수를 선언 시 아래의 오류 생성
// : 속성 'title'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
// : 변수명 !를 사용하여 컴파일러에게 해당 변수가 값이 무조건 할당되어있음을 명시적으로 전달

//! 객체 생성
// : 클래스의 인스턴스는 new 키워드를 사용하여 생성
let myBook1 = new Book();
let myBook2 = new Book();

// 생성된 인스턴스로 Book에 정의된 멤버 변수와 메소드에 접근
// : .키워드를 사용하여 접근
console.log(myBook1.title) // undefined
console.log(myBook1.describe()); // undefined is written by undefined

}