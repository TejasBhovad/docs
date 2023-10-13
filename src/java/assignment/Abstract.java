public class Abstract {
    public static void main(String[] args) {
        Circle c = new Circle();
        Rectangle r = new Rectangle();
        Triangle t = new Triangle();

        c.area();
        r.area();
        t.area();
    }
}

abstract class Shape {
    abstract void area();
}

class Circle extends Shape {
    double r = 10;

    void area() {
        System.out.println("Area of circle: " + 3.14 * r * r);
    }

}

class Rectangle extends Shape {
    double l = 10, b = 20;

    void area() {
        System.out.println("Area of rectangle: " + l * b);
    }
}

class Triangle extends Shape {
    double b = 10, h = 20;

    void area() {
        System.out.println("Area of triangle: " + 0.5 * b * h);
    }
}
