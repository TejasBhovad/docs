#include <stdio.h>

int i, j, k, ar[10];
void read()
{
    printf("\n");
    for (i = 0; i < 5; i++)
    {
        printf("Enter %d Element: ", i);
        scanf("%d", &ar[i]);
    }
}
void display()
{
    printf("\n");
    for (k = 0; k < 5; k++)
    {
        printf("%d ", ar[k]);
    }
}
void sort()
{
    int tmp;
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j < 5 - 1 - i; j++)
        {
            if (ar[j] > ar[j + 1])
            {
                tmp = ar[j];
                ar[j] = ar[j + 1];
                ar[j + 1] = tmp;
            }
            display();
        }
    }
}
int main()
{
    read();
    display();
    sort();
    display();
    printf("\n");
    return 0;
}

// 5 4 3 2 1 
// 4 5 3 2 1 
// 4 3 5 2 1 
// 4 3 2 5 1 
// 4 3 2 1 5 
// 3 4 2 1 5 
// 3 2 4 1 5 
// 3 2 1 4 5 
// 2 3 1 4 5 
// 2 1 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 // display final