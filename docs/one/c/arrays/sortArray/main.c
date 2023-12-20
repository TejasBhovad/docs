#include <stdio.h>
int main()
{
    int n, tmp;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (ar[i] < ar[j])
            {
                tmp = ar[j];
                ar[j] = ar[i];
                ar[i] = tmp;
            }
        }
    }
    printf("\nSorted Array: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", ar[i]);
    }
    printf("\n");
    return 0;
}