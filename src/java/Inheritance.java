// WAP to show multilevel inheritance

public class Inheritance {
    public static void main(String args[]) {
        C c = new C();
        c.getRadius(5);
        c.calcVolume();
        c.displayVolume();
    }
}

class A {
    int radius;
    double volume;
}

class B extends A {
    void getRadius(int r) {
        radius = r;
    }
}

class C extends B {

    void calcVolume() {
        volume = 4 / 3 * 3.14 * radius * radius * radius;
    }

    void displayVolume() {
        System.out.println("Volume of sphere is " + volume);
    }

}
