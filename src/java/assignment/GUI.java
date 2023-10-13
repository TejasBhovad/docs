import javax.swing.*;

public class GUI {
    public static void main(String[] args) {
        JFrame f = new JFrame();

        JLabel l = new JLabel("Hello World");
        l.setBounds(50, 50, 100, 40);
        l.setHorizontalAlignment(JLabel.CENTER);

        f.add(l);

        f.setSize(200, 200);
        f.setLayout(null);
        f.setVisible(true);

        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}