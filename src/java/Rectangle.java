public class Rectangle {
    int width = 5;
    int height = 10;

    void getArea() {
        System.out.println("Area: " + width * height);
    }

    void getPerimeter() {
        System.out.println("Perimeter: " + 2 * (width + height));
    }

    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle();
        rectangle.getArea();
        rectangle.getPerimeter();
    }
}
