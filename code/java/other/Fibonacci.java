// WAP to print fibonacci series using recursion
public class Fibonacci {
    int fib(int n) {
        if (n == 0)
            return 0;
        else if (n == 1)
            return 1;

        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        Fibonacci f = new Fibonacci();
        System.out.println("Fibonacci series: ");
        for (int i = 0; i < 10; i++)
            System.out.print(f.fib(i)+" ");
    }
}
