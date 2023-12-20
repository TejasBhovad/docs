// WAP to find the longest common subsequence of two strings.
#include <stdio.h>
#include <string.h>
#define MAX 100
void printLCS(char b[MAX][MAX], char X[MAX], int i, int j)
{
    if (i == 0 || j == 0)
        return;
    if (b[i][j] == 'D')
    {
        printLCS(b, X, i - 1, j - 1);
        printf("%c", X[i - 1]);
    }
    else if (b[i][j] == 'U')
        printLCS(b, X, i - 1, j);
    else
        printLCS(b, X, i, j - 1);
}

void lcs(char X[MAX], char Y[MAX], int m, int n)
{
    int c[MAX][MAX];
    char b[MAX][MAX];

    for (int i = 0; i <= m; i++)
        c[i][0] = 0;
    for (int j = 0; j <= n; j++)
        c[0][j] = 0;

    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
        {

            if (X[i - 1] == Y[j - 1])
            {
                c[i][j] = c[i - 1][j - 1] + 1;
                b[i][j] = 'D';
            }
            else if (c[i - 1][j] >= c[i][j - 1])
            {
                c[i][j] = c[i - 1][j];
                b[i][j] = 'U';
            }
            else
            {
                c[i][j] = c[i][j - 1];
                b[i][j] = 'L';
            }
        }

    printf("The longest common subsequence is: ");
    printLCS(b, X, m, n);
    printf("\n");
}

int main()
{
    char X[MAX], Y[MAX];
    printf("Enter the first string: ");
    scanf("%s", X);
    printf("Enter the second string: ");
    scanf("%s", Y);

    int m = strlen(X);
    int n = strlen(Y);

    lcs(X, Y, m, n);
    return 0;
}