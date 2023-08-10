// Write a program to overload the plusMethod() method to work for both int and double
class PlusMethod {
    void plusMethod(int a, int b) {
        System.out.println("Sum of " + a + " and " + b + " is " + (a + b));
    }

    void plusMethod(double a, double b) {
        System.out.println("Sum of " + a + " and " + b + " is " + (a + b));
    }
}
class PlusMethodMain {
    public static void main(String[] args) {
        PlusMethod pm = new PlusMethod();
        pm.plusMethod(10, 20);
        pm.plusMethod(10.5, 20.5);
    }
}
