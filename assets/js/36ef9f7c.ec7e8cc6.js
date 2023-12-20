"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[2847],{5250:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>B,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=e(5893),a=e(1151),i=e(9286);const u='import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\nclass Calculator implements ActionListener {\n    JFrame frame;\n    JTextField textField;\n    JButton[] numberButtons = new JButton[10];\n    JButton[] functionButtons = new JButton[8];\n    JButton addButton, subButton, mulButton, divButton, eqButton, clrButton, delButton, dotButton;\n    JPanel panel;\n\n    double num1 = 0, num2 = 0, result = 0;\n    char operator;\n\n    Calculator() {\n        frame = new JFrame("Calculator");\n        frame.setLayout(null);\n        textField = new JTextField();\n        textField.setBounds(30, 40, 340, 50);\n        textField.setFont(new Font("Arial", Font.PLAIN, 24));\n        textField.setEditable(false);\n\n        // Initialize number buttons\n        for (int i = 0; i < 10; i++) {\n            numberButtons[i] = new JButton(String.valueOf(i));\n            numberButtons[i].setFont(new Font("Arial", Font.PLAIN, 18));\n        }\n\n        // Initialize function buttons\n        addButton = new JButton("+");\n        subButton = new JButton("-");\n        mulButton = new JButton("*");\n        divButton = new JButton("/");\n        eqButton = new JButton("=");\n        clrButton = new JButton("C");\n        delButton = new JButton("Del");\n        dotButton = new JButton(".");\n\n        functionButtons[0] = addButton;\n        functionButtons[1] = subButton;\n        functionButtons[2] = mulButton;\n        functionButtons[3] = divButton;\n        functionButtons[4] = eqButton;\n        functionButtons[5] = clrButton;\n        functionButtons[6] = delButton;\n        functionButtons[7] = dotButton;\n\n        for (int i = 0; i < 8; i++) {\n            functionButtons[i].setFont(new Font("Arial", Font.PLAIN, 18));\n        }\n\n        panel = new JPanel();\n        panel.setBounds(30, 100, 340, 330);\n        panel.setLayout(new GridLayout(5, 4, 10, 10));\n\n        // Add components to the frame\n        frame.add(textField);\n\n        for (int i = 0; i < 10; i++) {\n            panel.add(numberButtons[i]);\n        }\n\n        for (int i = 0; i < 8; i++) {\n            panel.add(functionButtons[i]);\n        }\n\n        frame.add(panel);\n        frame.setSize(400, 500);\n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        frame.setVisible(true);\n\n        for (int i = 0; i < 10; i++) {\n            numberButtons[i].addActionListener(this);\n        }\n\n        for (int i = 0; i < 8; i++) {\n            functionButtons[i].addActionListener(this);\n        }\n    }\n\n    public static void main(String[] args) {\n        new Calculator();\n    }\n\n    public void actionPerformed(ActionEvent e) {\n        String command = e.getActionCommand();\n\n        if ((command.charAt(0) >= \'0\' && command.charAt(0) <= \'9\') || command.equals(".")) {\n            textField.setText(textField.getText() + command);\n        } else if (command.charAt(0) == \'C\') {\n            textField.setText("");\n            num1 = num2 = result = 0;\n            operator = \'\\0\';\n        } else if (command.charAt(0) == \'D\') {\n            String currentText = textField.getText();\n            if (!currentText.isEmpty()) {\n                textField.setText(currentText.substring(0, currentText.length() - 1));\n            }\n        } else if (command.charAt(0) == \'=\') {\n            num2 = Double.parseDouble(textField.getText());\n\n            switch (operator) {\n                case \'+\':\n                    result = num1 + num2;\n                    break;\n                case \'-\':\n                    result = num1 - num2;\n                    break;\n                case \'*\':\n                    result = num1 * num2;\n                    break;\n                case \'/\':\n                    if (num2 != 0) {\n                        result = num1 / num2;\n                    } else {\n                        textField.setText("Error");\n                    }\n                    break;\n            }\n\n            textField.setText(String.valueOf(result));\n            num1 = result;\n            operator = \'\\0\';\n        } else {\n            if (operator == \'\\0\') {\n                num1 = Double.parseDouble(textField.getText());\n                operator = command.charAt(0);\n                textField.setText("");\n            }\n        }\n    }\n}\n',r={sidebar_position:12,description:"GUI App in Java"},s="Calculator",l={id:"java/Calculator",title:"Calculator",description:"GUI App in Java",source:"@site/docs/three/java/Calculator.mdx",sourceDirName:"java",slug:"/java/Calculator",permalink:"/docs/three/java/Calculator",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"GUI App in Java"},sidebar:"tutorialSidebar",previous:{title:"Multi Threading",permalink:"/docs/three/java/Multithread"},next:{title:"Other",permalink:"/docs/three/category/other"}},c={},d=[{value:"CODE",id:"code",level:2}];function m(n){const t={h1:"h1",h2:"h2",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"calculator",children:"Calculator"}),"\n",(0,o.jsx)(t.h2,{id:"code",children:"CODE"}),"\n",(0,o.jsx)(i.Z,{language:"java",children:u})]})}function B(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}}}]);