// WAP to create class rectangle and calculate area and perimeter of it
class AccessRectangle {
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        r.getArea();
        r.getPerimeter();
    }
}
class Rectangle {
    int len = 20, wid = 50;

    void getArea() {
        System.out.println("Area: " + len * wid);
    }

    void getPerimeter() {
        System.out.println("Perimeter: " + (2 * (len + wid)));
    }
}
