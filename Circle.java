// To find the area of the Circle
import java.util.Scanner;
public class Circle {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		double pi = 3.14;
		System.out.println("Enter the radius of the Circle:");
		int radius = s.nextInt();
		System.out.println("The area of the Circle is: "+pi*radius*radius);
	}
}
