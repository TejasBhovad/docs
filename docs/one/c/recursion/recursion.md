# Recursion in C

1. #### WAP to find factorial of number using recursion

```c
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

```

2. #### WAP to find gcd of two numbers using recursion

```c
#include <stdio.h>
int gcd(int a, int b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
int main()
{
    int a, b, GCD;
    printf("Enter First Number: ");
    scanf("%d", &a);
    printf("Enter Second Number: ");
    scanf("%d", &b);
    printf("\n");
    GCD = gcd(a, b);
    printf("GCD: %d \n", GCD);
    // TO FIND LCM:
    // int LCM = (a * b) / GCD;
    // printf("LCM: %d \n", LCM);
    printf("\n");
    return 0;
}
```

3. #### WAP to find N terms of Fibonacci series using recursion

```c
#include <stdio.h>
int fibonacci(int n)
{
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
int main()
{
    int n, a = 0, b = 1, tmp;
    printf("Enter N: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        printf("%d ", fibonacci(i));
    }
    printf("\n");
    return 0;
}
```
