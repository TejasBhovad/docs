# Strings in C

### 1. WAP to check if a string is palindrome or not

```c
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
```

### 2. WAP to perform string operations without string function

```c
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

```
