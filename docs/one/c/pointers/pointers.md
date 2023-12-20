# Pointers in C

### 1. WAP to add two numbers using pointers

#### Code:

```c
#include <stdio.h>
int main()
{
    int a = 10;
    int b = 20;
    int *x, *y;
    x = &a;
    y = &b;
    printf("\nSum: %d", *x + *y);
    printf("\n");
}
```

### 2. WAP to find maximum of two numbers using pointers

#### Code:

```c
#include <stdio.h>
int main()
{
    int a = 10;
    int b = 20;
    int *x, *y;
    x = &a;
    y = &b;
    int greatest;
    if (*x > *y)
    {
        greatest = *x;
    }
    else
    {
        greatest = *y;
    }
    printf("\nGreatest: %d", greatest);
    printf("\n");
}
```

### 3. WAP to swap two numbers using call by value and call by reference

#### Code:

```c
#include <stdio.h>
void callByReference(int *a, int *b)
{
    int tmp;
    tmp = *a;
    *a = *b;
    *b = tmp;
    printf("\nAfter Call by Reference Swap:\n");
    printf("A: %d\nB: %d", *a, *b);
}
void callByValue(int a, int b)
{
    int tmp;
    tmp = a;
    a = b;
    b = tmp;
    printf("\nAfter Call by Value Swap:\n");
    printf("A: %d\nB: %d", a, b);
}
int main()
{
    int A, B;
    printf("\nEnter value of A: ");
    scanf("%d", &A);
    printf("\nEnter value of B: ");
    scanf("%d", &B);
    callByValue(A, B);
    callByReference(&A, &B);
    printf("\n");
}
```

### 4. WAP to find sum of all elements of an Array using pointers

#### Code:

```c
#include <stdio.h>
int arSum(int *ptr)
{
    int sum = 0;
    for (int i = 0; i < 5; i++)
    {
        sum = sum + *(ptr + i);
    }
    return sum;
}

int main()
{
    int ar[5];
    printf("Enter 5 Elements: \n");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &ar[i]);
    }
    int sum = arSum(ar);
    printf("Sum: %d", sum);
    printf("\n");
}
```

### 5. WAP to sort an Array using pointers

#### Code:

```c
#include <stdio.h>
void sort(int *ptr)
{
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            if (*(ptr + i) < *(ptr + j))
            {
                int tmp = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = tmp;
            }
        }
    }
}

int main()
{
    int ar[10];
    printf("Enter 10 Elements: \n");
    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &ar[i]);
    }
    sort(ar);
    printf("\nAfter Sorting:\n");
    for (int i = 0; i < 10; i++)
    {
        printf("%d", *(ar + i));
        printf(" ");
    }
    printf("\n");
}
```
