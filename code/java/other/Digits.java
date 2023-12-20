// WAP to count the digits of a given number using recursion
public class Digits {
    int count(int n) {
        if (n == 0)
            return 0;
        else
            return 1 + count(n / 10);
    }
    public static void main(String[] args) {
        Digits d = new Digits();
        System.out.println("Number of digits: " + d.count(12345));
    }
}
