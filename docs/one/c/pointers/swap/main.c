#include <stdio.h>
void callByReference(int *a, int *b)
{
    int tmp;
    tmp = *a;
    *a = *b;
    *b = tmp;
    printf("\nAfter Call by Reference Swap:\n");
    printf("A: %d\nB: %d", *a, *b);
}
void callByValue(int a, int b)
{
    int tmp;
    tmp = a;
    a = b;
    b = tmp;
    printf("\nAfter Call by Value Swap:\n");
    printf("A: %d\nB: %d", a, b);
}
int main()
{
    int A, B;
    printf("\nEnter value of A: ");
    scanf("%d", &A);
    printf("\nEnter value of B: ");
    scanf("%d", &B);
    callByValue(A, B);
    callByReference(&A, &B);
    printf("\n");
}