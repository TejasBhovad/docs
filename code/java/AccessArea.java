public class AccessArea {
    public static void main(String[] args) {
    Rectangle rec =new Rectangle();
    Square sq=new Square();
    System.out.println(rec.getArea(2,3));
    System.out.println(sq.getArea(5));
    }
}
class Rectangle{
    int area;
    public int getArea(int l,int b) {
        area=l*b;
        return area;
    }
}
class Square{
    int area;
    public int getArea(int a) {
        area=a*a;
        return area;
    }
}