#include <stdio.h>
int main()
{
    int n, target, flag = 0;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    printf("Enter element to be searched: ");
    scanf("%d", &target);
    for (int i = 0; i < n; i++)
    {
        if (ar[i] == target)
        {
            printf("%d found at index %d\n", target, i);
            flag++;
        }
    }
    if (flag == 0)
    {
        printf("Element not found");
    }
    printf("\n");
    return 0;
}