// WAP to create a class student and display the details of student using constructors
public class StudentC {
    StudentC(int roll, String name, String grade) {
        System.out.println("Roll no: " + roll);
        System.out.println("Name: " + name);
        System.out.println("Grade: " + grade);
    }
    public static void main(String[] args) {

        StudentC s = new StudentC(1, "Rahul", "A");
    }
}