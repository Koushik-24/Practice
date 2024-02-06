import java.util.Scanner;

public class Bank {

	public static void main(String[] args) {
		int amount,bal=0,pin = 1234,p,ch,withdraw;
		Scanner s = new Scanner(System.in);
		System.out.println("Enter the Pin:");
		p = s.nextInt();
		if(pin==p) {
			do {
				System.out.println("1.Deposit");
				System.out.println("2.Withdraw");
				System.out.println("3.Check Balance");
				System.out.println("4.Exit");
				System.out.println("Enter your choice");
				ch=s.nextInt();
				switch(ch) {
				case 1: System.out.println("Enter the amount to be deposited:");
						amount = s.nextInt();
						bal+=amount;break;
				case 2: System.out.println("Enter the Withdrawl amount:");
						withdraw = s.nextInt();
						if(withdraw>bal) {
							System.out.println("Invalid amount");
						}
						else {
							bal-=withdraw;
						}break;
				case 3: System.out.println("The Current balance is " +bal);break;
				case 4: System.out.println("Thank you");break;
				default: System.out.println("Invalid Choice");break;
				
				}
			}while(ch!=4);
		}
		else {
			System.out.println("Invalid Pin");
	}
		s.close();
}
}
