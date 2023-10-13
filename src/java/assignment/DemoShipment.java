public class DemoShipment {
    public static void main(String[] args) {
        Shipment shipment1 = new Shipment(10, 20, 15, 10, 3);
        System.out.println("Volume of shipment1 is " + shipment1.volume());
        System.out.println("Weight of shipment1 is " + shipment1.weight);
        System.out.println("Shipping cost: " + shipment1.cost);
    }
}

class Box {
    int width;
    int height;
    int depth;

    Box(int w, int h, int d) {
        width = w;
        height = h;
        depth = d;
    }
}

class BoxWeight extends Box {
    int weight;

    BoxWeight(int w, int h, int d, int wt) {
        super(w, h, d);
        weight = wt;
    }
}

class Shipment extends BoxWeight {
    int cost;

    Shipment(int w, int h, int d, int c, int weight) {
        super(w, h, d, weight);
        cost = c;
    }

    int volume() {
        return width * height * depth;
    }
}
