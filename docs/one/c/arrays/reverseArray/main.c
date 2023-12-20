#include <stdio.h>
int main()
{
    int n, count = 0;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n], rev[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    for (int i = n - 1; i >= 0; i--)
    {
        rev[count] = ar[i];
        count++;
    }
    printf("\nOriginal Array: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d", ar[i]);
    }
    printf("\nReversed Array: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d", rev[i]);
    }
    printf("\n");
    return 0;
}