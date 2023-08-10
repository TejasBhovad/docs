// WAP to search an element in array
import java.util.Scanner;

public class ArSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int key, n;
        System.out.println("Enter the number of elements: ");
        n = sc.nextInt();
        int ar[] = new int[n];
        System.out.println("Enter the elements: ");
        for (int i = 0; i < n; i++)
            ar[i] = sc.nextInt();
        System.out.println("Enter the element to be searched: ");
        key = sc.nextInt();
        for (int i = 0; i < n; i++) {
            if (ar[i] == key) {
                System.out.println("Element found at index " + i);
                break;
            }
            if (i == n - 1)
                System.out.println("Element not found");
        }
    }
}
