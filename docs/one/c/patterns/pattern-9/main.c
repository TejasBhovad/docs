#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }
        for (int k = 1; k <= i; k++)
        {
            printf("%d", k);
        }
        for (int m = i - 1; m >= 1; m--)
        {
            printf("%d", m);
        }
        printf("\n");
    }
    return 0;
}
// OUTPUT:
//      1
//     121
//    12321
//   1234321
//  123454321