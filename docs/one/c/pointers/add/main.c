#include <stdio.h>
int main()
{
    int a = 10;
    int b = 20;
    int *x, *y;
    x = &a;
    y = &b;
    printf("\nSum: %d", *x + *y);
    printf("\n");
}