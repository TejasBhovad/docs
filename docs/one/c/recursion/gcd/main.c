#include <stdio.h>
int gcd(int a, int b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
int main()
{
    int a, b, GCD;
    printf("Enter First Number: ");
    scanf("%d", &a);
    printf("Enter Second Number: ");
    scanf("%d", &b);
    printf("\n");
    GCD = gcd(a, b);
    printf("GCD: %d \n", GCD);
    // TO FIND LCM: 
    // int LCM = (a * b) / GCD;
    // printf("LCM: %d \n", LCM);
    printf("\n");
    return 0;
}