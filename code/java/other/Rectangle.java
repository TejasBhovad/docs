// WAP to create class rectangle and calculate area and perimeter of rectangle using constructors
public class Rectangle {
    Rectangle(int length, int breadth) {
        System.out.println("Area: " + length * breadth);
        System.out.println("Perimeter: " + 2 * (length + breadth));
    }

    public static void main(String[] args) {
        Rectangle r = new Rectangle(10, 20);
    }
}
