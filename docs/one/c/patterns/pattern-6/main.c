#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = n; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
// OUTPUT:
// 55555
// 4444
// 333
// 22
// 1