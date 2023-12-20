#include <stdio.h>
int main()
{
    int a = 10;
    int b = 20;
    int *x, *y;
    x = &a;
    y = &b;
    int greatest;
    if (*x > *y)
    {
        greatest = *x;
    }
    else
    {
        greatest = *y;
    }
    printf("\nGreatest: %d", greatest);
    printf("\n");
}