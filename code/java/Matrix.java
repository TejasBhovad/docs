import java.util.*;
public class Matrix {
    int m,n;
    int[][] matrix,transpose;
    Scanner sc= new Scanner(System.in);
    void readSize(){
        System.out.println("Enter M: ");
        m=sc.nextInt();
        System.out.println("Enter N: ");
        n=sc.nextInt();
       matrix =new int[m][n];
      transpose =new int[n][m];
    }
    void readMatrix(){
        System.out.println("Enter Matrix: ");
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                System.out.println("Enter ["+i+"]["+j+"]");
                matrix[i][j]=sc.nextInt();
            }
        }
    }
    void displayMatrix(){
        System.out.println("Array: ");
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();
        }
    }

    void transposeMatrix(){
        System.out.println("Transpose: ");
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                transpose[i][j]=matrix[j][i];
                System.out.print(transpose[i][j]+" ");
            }
            System.out.println();
        }
    }
}
class AccessMatrix{
    public static void main(String[] args) {
        Matrix m= new Matrix();
        m.readSize();
        m.readMatrix();
        m.displayMatrix();
        m.transposeMatrix();
    }
}
