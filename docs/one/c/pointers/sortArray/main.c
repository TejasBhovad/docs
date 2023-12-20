#include <stdio.h>
void sort(int *ptr)
{
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            if (*(ptr + i) < *(ptr + j))
            {
                int tmp = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = tmp;
            }
        }
    }
}

int main()
{
    int ar[10];
    printf("Enter 10 Elements: \n");
    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &ar[i]);
    }
    sort(ar);
    printf("\nAfter Sorting:\n");
    for (int i = 0; i < 10; i++)
    {
        printf("%d", *(ar + i));
        printf(" ");
    }
    printf("\n");
}