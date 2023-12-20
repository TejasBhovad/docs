// WAP to print factorial of a number using recursion
public class Factorial {
    int fact(int n) {
        if (n == 1)
            return 1;
        else
            return n * fact(n - 1);
    }

   public static void main(String[] args) {
        Factorial f = new Factorial();
        System.out.println("Factorial of 5 is: " + f.fact(5));
    }
}
