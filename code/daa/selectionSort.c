#include <stdio.h>
int i, j, k, ar[5], N = 5;
void read()
{
    printf("\n");
    for (i = 0; i < N; i++)
    {
        printf("Enter [%d] Element: ", i);
        scanf("%d", &ar[i]);
    }
}
void display()
{
    printf("\n");
    for (k = 0; k < N; k++)
    {
        printf("%d ", ar[k]);
    }
}
void sort()
{
    int tmp, index;
    for (i = 0; i < N; i++)
    {
        index = i;
        for (j = i + 1; j < N; j++)
        {

            if (ar[index] > ar[j])
            {
                index = j;
            }
        }
        tmp = ar[i];
        ar[i] = ar[index];
        ar[index] = tmp;
        printf("\nPass %d: ", i + 1);
        display();
    }
}
int main()
{
    read();
    printf("\nOriginal Array:");
    display();
    sort();
    printf("\nSorted Array:");
    display();
    printf("\n");
    return 0;
}