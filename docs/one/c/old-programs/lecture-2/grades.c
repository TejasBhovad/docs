#include <stdio.h>
int main()
{
    printf("Enter Marks: ");
    int marks;
    scanf("%d", &marks);
    if ((marks >= 0) && (marks <= 50))
    {
        printf("YOU FAILED");
    }
    else if ((marks >= 51) && (marks <= 60))
    {
        printf("Grade is C");
    }
    else if ((marks >= 61) && (marks <= 70))
    {
        printf("Grade is B");
    }
    else if ((marks >= 71) && (marks <= 80))
    {
        printf("Grade is A");
    }
    else if ((marks >= 81) && (marks <= 90))
    {
        printf("Grade is EXELLENT");
    }
    else if ((marks >= 91) && (marks <= 100))
    {
        printf("Grade is AWESOME");
    }
    else
    {
        printf("Marks are Invalid");
    }
    printf("\n\n");
    return 0;
}
