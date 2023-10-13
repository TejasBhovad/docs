import java.util.Scanner;

class MyExceptionDemo {
    static void OddNoException() throws OddException {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        if (num % 2 != 0) {
            throw new OddException(num);
        } else {
            System.out.println(num + " is an even number");
        }
    }

    public static void main(String[] args) {
        try {
            OddNoException();
        } catch (OddException e) {
            System.out.println(e);
        }
        System.out.println("End of program");
    }
}

class OddException extends Exception {
    int num;
    OddException(int x) {
        num = x;
    }
    public String toString() {
        return "OddException: " + num + " is an odd number";
    }
}