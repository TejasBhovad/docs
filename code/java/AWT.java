import java.awt.*;
import java.awt.event.*;

public class AWT {
    public static void main(String[] args) {
        Frame frame = new Frame("Button Example");

        Button button = new Button("Click Me");
        Label label = new Label();

        button.setBounds(100, 100, 80, 30);
        label.setBounds(100, 150, 200, 30);

        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                label.setText("Button Clicked");
            }
        });

        frame.add(button);
        frame.add(label);

        frame.setSize(400, 400);
        frame.setLayout(null);
        frame.setVisible(true);

        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });
    }
}
