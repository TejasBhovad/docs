
// WAP to perform addition of diagonal elements of a matrix 
import java.util.Scanner;

public class DiagSum {
    public static void main(String[] args) {
        int m, n;
        Scanner sc = new Scanner(System.in);
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
        System.out.println("Sum of diagonal elements: ");
        int sum = 0;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (i == j)
                    sum += mat[i][j];
        System.out.println(sum);
    }
}
