// WAP in C to swamp two numbers
#include <stdio.h>
int main(){
    int a, b, temp;
    printf("Enter First Number: ");
    scanf("%d", &a);
    printf("Enter Second Number: ");
    scanf("%d", &b);
    temp = a;
    a = b;
    b = temp;
    // swap without extra variable
    // a = a + b;
    // b = a - b;
    // a = a - b;
    printf("First Number After Swap: %d\n", a);
    printf("Second Number After Swap: %d\n", b);
    return 0;
}