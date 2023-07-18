// create a student class with predefined marks and find average using methods
class Student {
    String name;
    int marks1;
    int marks2;
    int marks3;
    int total;
    double average;

    void average() {
        total = marks1 + marks2 + marks3;
        average = total / 3;
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Total: " + total);
        System.out.println("Average: " + average);
    }

    public static void main(String[] args) {
        // Student 1
        Student s1 = new Student();
        s1.name = "Raj";
        s1.marks1 = 50;
        s1.marks2 = 60;
        s1.marks3 = 70;
        s1.average();
        s1.display();
        // Student 2
        Student s2 = new Student();
        s2.name = "Rahul";
        s2.marks1 = 80;
        s2.marks2 = 90;
        s2.marks3 = 100;
        s2.average();
        s2.display();
    }

}