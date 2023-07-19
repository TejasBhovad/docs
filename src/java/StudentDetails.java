// WAP to create a class Student and add methods to read and display details using parameterized methods 
public class StudentDetails {
    String name;
    int rollNo;
    int marks1, marks2, marks3;

    void readDetails(String n, int rn, int m1, int m2, int m3) {
        name = n;
        rollNo = rn;
        marks1 = m1;
        marks2 = m2;
        marks3 = m3;
    }

    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Marks 1: " + marks1);
        System.out.println("Marks 2: " + marks2);
        System.out.println("Marks 3: " + marks3);
    }

    public static void main(String[] args) {
        System.out.println("Student 1");
        StudentDetails sd = new StudentDetails();
        sd.readDetails("Raj", 1, 50, 60, 70);
        sd.displayDetails();
        System.out.println("\nStudent 2");
        StudentDetails sd_1 = new StudentDetails();
        sd_1.readDetails("Rahul", 2, 80, 90, 100);
        sd_1.displayDetails();
    }
}
