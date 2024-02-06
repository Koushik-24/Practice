import java.util.Scanner;
public class Age {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Enter the Age:");
		int age = s.nextInt();
		Age(age);
	}
	static void Age(int age) {
		if(age>=18) {
			System.out.println("Major");
		}
		else if(age<=0) {
			System.out.println("Invalid age");
		}
		else {
			System.out.println("Minor");
		}
		
	}

}
