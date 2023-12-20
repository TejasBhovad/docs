#include <stdio.h>
int main()
{
    int n, largest;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    largest = ar[0];
    for (int i = 1; i < n; i++)
    {
        if (ar[i] > largest)
        {
            largest = ar[i];
        }
    }
    printf("\nLargest Array: %d\n", largest);
    return 0;
}