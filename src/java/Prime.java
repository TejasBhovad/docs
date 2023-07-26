public class Prime {

    public static void main(String[] args) {
        int N = 100;
        for (int i = 2; i <= N; i++) {
            boolean isPrime = true;
            // check if i is prime
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    // i is not prime
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.println(i);
            }
        }

    }
}