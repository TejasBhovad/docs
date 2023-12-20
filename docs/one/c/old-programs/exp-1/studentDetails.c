// Accept and print name,rollno and marks percent of student
#include <stdio.h>
#include <string.h>
int main(){
    // you might get a warning saying "format specifies type 'char *'..." but it works fine 
    char name[30];
    int rollNo;
    float mark1, mark2, mark3, mark4;
    printf("Enter Name: ");
    scanf("%s", &name);
    printf("Enter Roll no: ");
    scanf("%d", &rollNo);
    printf("Enter English Marks: ");
    scanf("%f", &mark1);
    printf("Enter Maths Marks: ");
    scanf("%f", &mark2);
    printf("Enter Science Marks: ");
    scanf("%f", &mark3);
    printf("Enter CS Marks: ");
    scanf("%f", &mark4);
    printf("\n");
    printf("Name: %s", name);
    printf("\n");
    printf("Roll No: %d", rollNo);
    printf("\n");
    printf("English marks Percentage: %g", mark1);
    printf("\n");
    printf("Maths marks Percentage: %g", mark2);
    printf("\n");
    printf("Science marks Percentage: %g", mark3);
    printf("\n");
    printf("CS marks Percentage: %g", mark4);
    printf("\n");
    return 0;
}