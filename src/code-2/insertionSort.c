#include <stdio.h>
int i, j, k, N = 5, ar[5];
void read()
{
    printf("Enter the elements: \n");
    for (i = 0; i < N; i++)
    {
        printf("ar[%d] : ", i);
        scanf("%d", &ar[i]);
    }
}
void display()
{
    printf("\nArray: ");
    for (i = 0; i < N; i++)
    {
        printf("%d ", ar[i]);
    }
}
void sort()
{
    int temp;
    for (j = 1; j < N; j++)
    {
        temp = ar[j];
        k = j - 1;
        while (k >= 0 && ar[k] > temp)
        {
            ar[k + 1] = ar[k];
            k--;
        }
        ar[k + 1] = temp;
    }
}
int main()
{
    read();
    display();
    sort();
    display();
    return 0;
}