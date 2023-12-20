
//  WAP to print transpose of a matrix take matrix from user
import java.util.Scanner;

public class Transpose {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int r, c;
        System.out.println("Enter the number of rows: ");
        r = sc.nextInt();
        System.out.println("Enter the number of columns: ");
        c = sc.nextInt();
        int mat[][] = new int[r][c];
        Matrix m = new Matrix();
        mat = m.read(mat);
        System.out.println("Original matrix: ");
        m.display(mat);
        System.out.println("Transpose of matrix: ");
        m.display(m.transpose(mat));

    }
}

class Matrix {
    int[][] transpose(int[][] mat) {
        int[][] t = new int[mat[0].length][mat.length];
        for (int i = 0; i < mat[0].length; i++)
            for (int j = 0; j < mat.length; j++)
                t[i][j] = mat[j][i];
        return t;
    }

    void display(int[][] mat) {
        for (int i = 0; i < mat[0].length; i++) {
            for (int j = 0; j < mat.length; j++)
                System.out.print(mat[i][j] + " ");
            System.out.println();
        }
    }

    int[][] read(int[][] mat) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the elements: ");
        for (int i = 0; i < mat[0].length; i++)
            for (int j = 0; j < mat.length; j++)
                mat[i][j] = sc.nextInt();
        return mat;
    }
}