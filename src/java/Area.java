public class Area {
    public static void main(String[] args) {
        GetArea g=new GetArea();
        System.out.println("Circle:"+g.area(12.0));
        System.out.println("Triangle:"+g.area(12.0,2.0));
        System.out.println("Square:"+g.area(5));
        System.out.println("Rectangle:"+g.area(12,5));

    }

}
class GetArea{
    double area(double r){
        return 3.14*r*r;
    }
    double area(double base,double height){
        return 0.5*base*height;
    }
    int area(int len,int wid){
        return len*wid;
    }
    int area(int  a){
        return a*a;
    }

}