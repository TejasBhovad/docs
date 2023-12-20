#include <stdio.h>
int main()
{
    int n = 5, ctr = 1;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", ctr);
            ctr++;
        }
        printf("\n");
    }
    return 0;
}
// OUTPUT:
// 1
// 23
// 456
// 78910