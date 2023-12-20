// WAP to find product of user defined 2 arrays of size m,n

import java.util.Scanner;

public class ProdMat {
    public static void main(String[] args) {
        int m1, m2, n1, n2;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows: ");
        m1 = sc.nextInt();
        System.out.println("Enter the number of columns: ");
        n1 = sc.nextInt();
        int mat1[][] = new int[m1][n1];
        for (int i = 0; i < m1; i++) {
            System.out.println("Enter the elements of row " + (i + 1) + ": ");
            for (int j = 0; j < n1; j++)
                mat1[i][j] = sc.nextInt();
        }
        System.out.println("Original matrix 1: ");
        for (int i = 0; i < m1; i++) {
            for (int j = 0; j < n1; j++)
                System.out.print(mat1[i][j] + " ");
            System.out.println();
        }
        System.out.println("Enter the number of rows: ");
        m2 = sc.nextInt();
        System.out.println("Enter the number of columns: ");
        n2 = sc.nextInt();
        int mat2[][] = new int[m2][n2];
        for (int i = 0; i < m2; i++) {
            System.out.println("Enter the elements of row " + (i + 1) + ": ");
            for (int j = 0; j < n2; j++)
                mat2[i][j] = sc.nextInt();
        }
        System.out.println("Original matrix 2: ");
        for (int i = 0; i < m2; i++) {
            for (int j = 0; j < n2; j++)
                System.out.print(mat2[i][j] + " ");
            System.out.println();
        }
        System.out.println("Product of matrices: ");
        int mat3[][] = new int[m1][n2];
        for (int i = 0; i < m1; i++)
            for (int j = 0; j < n2; j++)
                for (int k = 0; k < n1; k++)
                    mat3[i][j] += mat1[i][k] * mat2[k][j];

        for (int i = 0; i < m1; i++) {
            for (int j = 0; j < n2; j++)
                System.out.print(mat3[i][j] + " ");
            System.out.println();
        }

    }
}
