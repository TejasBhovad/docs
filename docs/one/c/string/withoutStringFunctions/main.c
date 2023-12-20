#include <stdio.h>
int main()
{
    char str_1[10], str_2[10], str_3[10];
    printf("Enter String 1: ");
    scanf("%s", str_1);
    int i = 0;

    // Copying value of string from str_1 to str_2
    while (str_1[i] != '\0')
    {
        str_2[i] = str_1[i];

        if (str_1[i + 1] == '\0')
        {
            i++;
            str_2[i] = '\0';
        }
        i++;
    }
    printf("\n");
    // For concatenation: https://beginnersbook.com/2015/02/c-program-to-concatenate-two-strings-without-using-strcat/
}
