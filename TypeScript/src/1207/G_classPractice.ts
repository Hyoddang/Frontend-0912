{

// 은행 계좌 관리 시스템
// Account 클래스 생성
class Account {
  private balance: number
  // 속성: accountNumber(문자열, public, 계좌번호)와 balance(숫자, private, 잔액)
  // 생성자를 사용하여 계좌 번호를 초기화, 초기 잔액은 0으로 설정
  constructor(public accountNumber: string) {
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  // deposite(amount: number) 메서드를 추가하여 입금 기능을 구현
  deposite(amount: number): void {
    this.balance += amount;
    console.log(`Deposite: ${amount}, New Balance: ${this.balance}`);
  }

  // withdraw(amount: number) 메서드를 추가하여 출금 기능을 구현
  //: 잔액이 부족할 경우 오류 메세지를 출력
  withdraw(amount: number): void {
    if(amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
    } else {
      console.log('Not enough balance');
    }
  }
  // getBalance() 메서드를 추가하여 현재 잔약을 출력
  getBalance(): void {
    console.log(`Current Balance: ${this.balance}`);
  }
}

const account = new Account('123123123');
account.deposite(1000); // Deposite: 1000, New Balance: 1000

account.withdraw(500); // Withdrawn: 500, New Balance: 500
account.withdraw(800); // Not enough balance





}