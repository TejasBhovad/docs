// WAP in C to accept a number and print it
#include <stdio.h>
int main(){
    printf("Enter a Number: ");
    int a;
    scanf("%d",&a);
    // scanf is used to take input from user from the terminal
    // &a specifies that the inputted int must be stored in memory of variable a
    // "%d" is the type specifier you can find a list of all type specifiers here https://www.tutorialspoint.com/format-specifiers-in-c 
    printf("Number is %d",a);
    // type specifiers are also used when printing variables
    printf("\n");
    return 0;
}