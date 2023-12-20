#include <stdio.h>
#include <string.h>
int main()
{
    char str[20];
    char rev[20];
    // int flag = 0;
    printf("Enter String: ");
    scanf("%s", str);
    int n;       // to store length of str
    int ctr = 0; // to store the index of reverse string

    // find length of String
    for (n = 0; str[n] != '\0'; n++)
        ;
    // Alternatively,
    // int n = strlen(str); [USING STRING FUNCTIONS]

    // Finding Reverse of String
    for (int i = n - 1; i >= 0; i--)
    {
        rev[i] = str[ctr];
        ctr++;
        // Alternatively,
        // check if rev[i]==ctr[i] & if not increment flag
        // at the end check if flag==0 which would indicate String being palindrome
    }

    // comparing two string / checking equality
    if (strcmp(str, rev) == 0)
    {
        printf("The String is Palindrome");
    }
    else
    {
        printf("The String is not Palindrome");
    }
    printf("\n");
}