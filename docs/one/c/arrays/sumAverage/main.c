#include <stdio.h>
int main()
{
    int n, sum = 0, avg;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
        sum = sum + ar[i];
    }
    avg = sum / n;
    printf("\nSum: %d", sum);
    printf("\nAverage: %d\n", avg);
    return 0;
}