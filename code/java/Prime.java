public class Prime {

    public static void main(String[] args) {
        int N = 1000;
        for (int i = 2; i < N; i++) {
            int flag = 0;
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    // increment flag if divisible
                    flag++;
                    break;
                }
            }
            if (flag == 0) {
                System.out.println(i);
            }
        }

    }
}