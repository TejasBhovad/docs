// WAP to check if a string is palindrome or not using string buffer
class Palindrome {
    public static void main(String args[]) {
        String str = "madam";
        StringBuffer sb = new StringBuffer(str);
        String rev = sb.reverse().toString();
        if (str.equals(rev))
            System.out.println("Palindrome");
        else
            System.out.println("Not Palindrome");
    }
}
