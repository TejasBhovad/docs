public class Deadlock {
    public static void main(String[] args) {
        A a = new A();
        B b = new B();

        Thread t = new Thread(new Runnable() {
            public void run() {
                a.foo(b);
            }
        });
        b.bar(a);

        t.start();
    }
}

class A {
    synchronized void foo(B b) {
        System.out.println("A.foo()");

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println("A Interrupted");
        }

        System.out.println("B.last()");
        b.last();
    }

    synchronized void last() {
        System.out.println("Inside A.last");
    }
}

class B {
    synchronized void bar(A a) {
        System.out.println( "B.bar()");

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println("B Interrupted");
        }

        System.out.println("A.last()");
        a.last();
    }

    synchronized void last() {
        System.out.println("Inside B.last");
    }
}