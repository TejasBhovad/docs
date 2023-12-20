#include <stdio.h>
int main()
{
    int ar[5];

    // INPUT
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &ar[i]);
    }

    // OUTPUT
    for (int i = 0; i < 5; i++)
    {
        printf("%d", ar[i]);
    }
    return 0;
}