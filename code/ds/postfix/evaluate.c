#include <stdio.h>
#include <ctype.h>

char stack[100];
int top = -1;

void push(char x)
{
    top++;
    stack[top] = x;
}

char pop()
{
    if (top == -1)
    {
        printf("\nUnderflow Error");
        return -1;
    }

    else
    {

        return stack[top--];
    }
}

int priority(char x)
{
    if (x == '(')
    {
        return 0;
    }

    if (x == '+' || x == '-')
    {
        return 1;
    }

    if (x == '*' || x == '/')
    {
        return 2;
    }
    return 0;
}

int main()
{
    char exp[100];
    char *e, x;
    int num;
    printf("Enter the expression : ");
    scanf("%s", exp);
    printf("\n");
    e = exp;

    while (*e != '\0')
    {
        if (isdigit(*e))
        {
            // typecasting
            num = *e - '0';
            push(num);
        }
        else
        {
            int result;
            int op1 = (int)pop();
            int op2 = (int)pop();
            if (*e == '+')
            {
                result = op2 + op1;
            }
            else if (*e == '-')
            {
                result = op2 - op1;
            }
            else if (*e == '*')
            {
                result = op2 * op1;
            }
            else if (*e == '/')
            {
                result = op2 / op1;
            }
            else if (*e == '%')
            {
                result = op2 % op1;
            }
            else if (*e == '^')
            {
                result = op2 ^ op1;
            }
            push((char)result);
        }
        e++;
    }

    printf("\nThe result of expression %s  =  %d\n\n", exp, pop());
    printf("\n");
    return 0;
}