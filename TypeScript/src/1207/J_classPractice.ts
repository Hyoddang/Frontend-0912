{

//! 직원 관리 시스템
// Employee 기본 클래스 생성
class Employee {
  // 속성: name (문자열)과 id(숫자)
  name: string;
  id: number;

  // 생성자를 사용하여 초기화
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  // 메소드: displayInfo() 메소드 - 직원의 정보를 출력
  displayInfo(): void {
    console.log(`Name: ${this.name}, ID: ${this.id}`);
  }
}

// Manager 클래스 생성
// : Employee 클래스를 확장
class Manager extends Employee {
  // 추가 속성: subordinates(Employee 배열)
  private subordinates: Employee[] = []; // 하위 직원 목록

  // 부모 클래스의 생성자를 호출
  constructor(name: string, id: number) {
    super(name, id);
  }

  // 메소드 addSubordinates(employee: Employee) 메소드 - 하위 직원을 목록에 추가
  addSubordinates(employee: Employee) {
    this.subordinates.push(employee);
  }
  // 메소드: listSubodinates() - 모든 하위 직원의 정보를 출력
  listSubordinates(): void {
    console.log(`Manager: ${this.name}`);
    this.subordinates.forEach(employee => employee.displayInfo());
    //* forEach - 배열의 모든 요소를 불러오는 메소드
  }
}

const manager = new Manager('Hyo', 1);
const emp1 = new Employee('izi', 2);
const emp2 = new Employee('Yang', 3);

manager.addSubordinates(emp1); // Hyo 매니저의 하위 직원으로 emp1을 추가
manager.addSubordinates(emp2); // Hyo 매니저의 하위 직원으로 emp2을 추가

manager.listSubordinates();

}