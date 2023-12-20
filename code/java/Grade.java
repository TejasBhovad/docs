public class Grade {
    public static void main(String[] args) {
        // change values of x
        int x = 45;
        int key = x / 10;
        switch (key) {

            case 0, 1, 2, 3: {
                System.out.println("Fail");
                break;
            }
            case 4: {
                System.out.println("Pass");
                break;
            }
            case 5: {
                System.out.println("2nd class");
                break;
            }
            case 6: {
                System.out.println("1st Class");
                break;
            }
            case 7, 8, 9: {
                System.out.println("Distinction");
                break;
            }
            default: {
                System.out.println("Invalid");
                break;
            }
        }
    }
}
