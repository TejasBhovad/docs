// WAP to throw exception for odd number input
class OddExceptDemo {
    public static void main(String[] args) {
        try {
            int n = Integer.parseInt(args[0]);
            if (n % 2 != 0) {
                throw new OddExcept("Odd Number");
            } else {
                System.out.println("Even Number");
            }
        } catch (OddExcept e) {
            System.out.println(e);
        }
    }
}

class OddExcept extends Exception {
    OddExcept(String s) {
        super(s);
    }
}