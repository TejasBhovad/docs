class MultiThread {
    public static void main(String[] args) {

        PrintNumbers pn = new PrintNumbers();
        PrintSquares ps = new PrintSquares();
        pn.t1.start();
        ps.t2.start();
    }
}

class PrintNumbers implements Runnable {
    Thread t1;

    PrintNumbers() {
        t1 = new Thread(this);
    }

    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}

class PrintSquares implements Runnable {
    Thread t2;

    PrintSquares() {
        t2 = new Thread(this);
    }

    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i * i);
        }
    }
}