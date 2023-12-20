#include <stdio.h>

// Recursive function to find the factorial of a number
int factorial(int n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}

int main()
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    int result = factorial(n);
    printf("The factorial of %d is %d\n", n, result);

    return 0;
}
