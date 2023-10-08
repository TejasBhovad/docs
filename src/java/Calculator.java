import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

class Calculator implements ActionListener {
    JFrame frame;
    JTextField textField;
    JButton[] numberButtons = new JButton[10];
    JButton[] functionButtons = new JButton[8];
    JButton addButton, subButton, mulButton, divButton, eqButton, clrButton, delButton, dotButton;
    JPanel panel;

    double num1 = 0, num2 = 0, result = 0;
    char operator;

    Calculator() {
        frame = new JFrame("Calculator");
        frame.setLayout(null);
        textField = new JTextField();
        textField.setBounds(30, 40, 340, 50);
        textField.setFont(new Font("Arial", Font.PLAIN, 24));
        textField.setEditable(false);

        // Initialize number buttons
        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            numberButtons[i].setFont(new Font("Arial", Font.PLAIN, 18));
        }

        // Initialize function buttons
        addButton = new JButton("+");
        subButton = new JButton("-");
        mulButton = new JButton("*");
        divButton = new JButton("/");
        eqButton = new JButton("=");
        clrButton = new JButton("C");
        delButton = new JButton("Del");
        dotButton = new JButton(".");

        functionButtons[0] = addButton;
        functionButtons[1] = subButton;
        functionButtons[2] = mulButton;
        functionButtons[3] = divButton;
        functionButtons[4] = eqButton;
        functionButtons[5] = clrButton;
        functionButtons[6] = delButton;
        functionButtons[7] = dotButton;

        for (int i = 0; i < 8; i++) {
            functionButtons[i].setFont(new Font("Arial", Font.PLAIN, 18));
        }

        panel = new JPanel();
        panel.setBounds(30, 100, 340, 330);
        panel.setLayout(new GridLayout(5, 4, 10, 10));

        // Add components to the frame
        frame.add(textField);

        for (int i = 0; i < 10; i++) {
            panel.add(numberButtons[i]);
        }

        for (int i = 0; i < 8; i++) {
            panel.add(functionButtons[i]);
        }

        frame.add(panel);
        frame.setSize(400, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        for (int i = 0; i < 10; i++) {
            numberButtons[i].addActionListener(this);
        }

        for (int i = 0; i < 8; i++) {
            functionButtons[i].addActionListener(this);
        }
    }

    public static void main(String[] args) {
        new Calculator();
    }

    public void actionPerformed(ActionEvent e) {
        String command = e.getActionCommand();

        if ((command.charAt(0) >= '0' && command.charAt(0) <= '9') || command.equals(".")) {
            textField.setText(textField.getText() + command);
        } else if (command.charAt(0) == 'C') {
            textField.setText("");
            num1 = num2 = result = 0;
            operator = '\0';
        } else if (command.charAt(0) == 'D') {
            String currentText = textField.getText();
            if (!currentText.isEmpty()) {
                textField.setText(currentText.substring(0, currentText.length() - 1));
            }
        } else if (command.charAt(0) == '=') {
            num2 = Double.parseDouble(textField.getText());

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        textField.setText("Error");
                    }
                    break;
            }

            textField.setText(String.valueOf(result));
            num1 = result;
            operator = '\0';
        } else {
            if (operator == '\0') {
                num1 = Double.parseDouble(textField.getText());
                operator = command.charAt(0);
                textField.setText("");
            }
        }
    }
}
