import java.util.Scanner;

public class Hybrid {
    public static void main(String[] args) {
        Result r = new Result();
        r.getNumber();
        r.getMarks();
        r.putScore();
        r.display();
    }
}

class Student {
    int roll_no;
    Scanner sc = new Scanner(System.in);

    void getNumber() {
        System.out.println("Enter Roll No: ");
        roll_no = sc.nextInt();
    }

    void putNumber() {
        System.out.println("Roll No: " + roll_no);
    }
}

class Test extends Student {
    Scanner sc = new Scanner(System.in);
    int sem1, sem2;

    void getMarks() {
        System.out.println("Enter Marks 1: ");
        sem1 = sc.nextInt();
        System.out.println("Enter Marks 2: ");
        sem2 = sc.nextInt();
    }

    void putMarks() {
        System.out.println("Marks 1: " + sem1);
        System.out.println("Marks 2: " + sem2);
    }
}

interface Sports {
    public float score = 90;

    void putScore();
}

class Result extends Test implements Sports {
    Scanner sc = new Scanner(System.in);

    float total;

    public void putScore() {
        // score = sc.nextFloat();
    }

    void display() {
        putNumber();
        putMarks();
        putScore();
        total = score + sem1 + sem2;
        System.out.println("Total:" + total);
    }

}
