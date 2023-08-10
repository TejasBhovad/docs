// WAP to sort user defined array

import java.util.Scanner;

public class ArSort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, temp;
        System.out.println("Enter the number of elements: ");
        n = sc.nextInt();
        int ar[] = new int[n];

        System.out.println("Enter the elements: ");
        for (int i = 0; i < n; i++)
            ar[i] = sc.nextInt();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < (n - i - 1); j++) {
                if (ar[j] > ar[j + 1]) {
                    temp = ar[j];
                    ar[j] = ar[j + 1];
                    ar[j + 1] = temp;
                }
            }
        }

        System.out.println("Sorted array: ");
        for (int i = 0; i < n; i++)
            System.out.print(ar[i] + " ");

    }
}
