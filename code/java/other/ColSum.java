// WAP to perform addition of column elements of a matrix 
import java.util.Scanner;

public class ColSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m, n;
        System.out.println("Enter the number of rows: ");
        m = sc.nextInt();
        System.out.println("Enter the number of columns: ");
        n = sc.nextInt();
        int mat[][] = new int[m][n];
        for (int i = 0; i < m; i++) {
            System.out.println("Enter the elements of row " + (i + 1) + ": ");
            for (int j = 0; j < n; j++)
                mat[i][j] = sc.nextInt();
        }
        System.out.println("Original matrix: ");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++)
                System.out.print(mat[i][j] + " ");
            System.out.println();
        }
        System.out.println("Sum of columns: ");

        // find sum of columns
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = 0; j < m; j++)
                sum += mat[j][i];
            System.out.print(sum + " ");
        }
    }

}
