#include <stdio.h>
int arSum(int *ptr)
{
    int sum = 0;
    for (int i = 0; i < 5; i++)
    {
        sum = sum + *(ptr + i);
    }
    return sum;
}

int main()
{
    int ar[5];
    printf("Enter 5 Elements: \n");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &ar[i]);
    }
    int sum = arSum(ar);
    printf("Sum: %d", sum);
    printf("\n");
}