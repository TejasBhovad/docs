import java.util.*;

public class Multithread {
    public static void main(String[] args) {
        Reader r = new Reader();
        Thread readerThread = new Thread(r);
        readerThread.start();
    }
}

class Reader implements Runnable {
    public void run() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int n = sc.nextInt();
        Thread Square = new Thread(new Square(n));
        Square.start();
    }
}

class Square implements Runnable {
    int x;

    Square(int n) {
        x = n;
    }

    public void run() {
        int sqr = x * x;
        System.out.println("Square: " + sqr);
    }
}
