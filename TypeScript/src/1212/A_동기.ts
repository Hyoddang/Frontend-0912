//! 동기 처리(Synchronous) 프로그래밍
// : 코드가 순차적으로 실행되는 것을 의미
// : 한 작업이 완료될 때까지 다음 작업은 대기(시작하지 X)

//? 2. 특징
// - 순차적 실행
// : 코드의 흐름을 예측하는 것이 용이
// - 간단성과 예측성
// : 프로그램의 흐름을 이해하기 쉽고, 디버깅이 상대적으로 용이
// - 리소스 활용
// : 소스 코드의 중복보다는 순차적인 흐름 즉, 코드의 완전성을 가짐

//? 3. 블로킹(Blocking) 연산의 이해
// - 정의
// : 프로그래밍의 진행을 막고, 해당 연산이 완료될 때까지 실행하지 못하도록 하는 것

// 블로킹 구성요소
// - 대기 시간, 리소스 관리, 응용 프로그램의 응답성

function performCalcalation(): number {
  // 시간 지연을 위한 계산식
  let sum = 0;
  for(let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum; // 계산 결과 반환
}

function performAnotherCalculation() {
  let product = 1;
  for (let i = 1; i <= 500; i++) {
    product *= i;
  }
  return product; // 계산 결과 반환
}

function SyncFunction() {
  console.log('첫 번째 작업 시작');
  // 시간이 많이 소요되는 작업을 가지는 함수
  let result = performCalcalation();
  console.log('첫 번째 작업 완료, 결과: ', result);

  console.log('두 번째 작업 시작');
  let anotherResult = performAnotherCalculation();
  console.log('두 번째 작업 완료, 결과: ', anotherResult);
}

SyncFunction()

//? 4. 동기 프로그래밍의 장단점
// 장점
// - 간단성과 명확성
// - 디버깅 용이성

// 단점
// - 응답성 저하, 코드의 활용도가 저하