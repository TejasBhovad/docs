// Write a program to implement Naïve String Matching Algorithm.
#include <stdio.h>
#include <string.h>

int main()
{
    char text[100], pattern[100];
    printf("Enter the text: ");
    scanf("%s", text);
    printf("Enter the pattern: ");
    scanf("%s", pattern);
    int n = strlen(text);
    int m = strlen(pattern);
    for (int i = 0; i <= n - m; i++)
    {
        int j;
        for (j = 0; j < m; j++)
        {
            if (text[i + j] != pattern[j])
            {
                break;
            }
        }
        if (j == m)
        {
            printf("Pattern found at index %d\n", i);
        }
    }
    return 0;
}