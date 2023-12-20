# Array Programs

1. #### WAP to find sum and average of n numbers using arrays

```c
#include <stdio.h>
int main()
{
    int n, sum = 0, avg;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
        sum = sum + ar[i];
    }
    avg = sum / n;
    printf("\nSum: %d", sum);
    printf("\nAverage: %d\n", avg);
    return 0;
}
```


1. #### WAP to find largest element in an array

```c
#include <stdio.h>
int main()
{
    int n, largest;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    largest = ar[0];
    for (int i = 1; i < n; i++)
    {
        if (ar[i] > largest)
        {
            largest = ar[i];
        }
    }
    printf("\nLargest Array: %d\n", largest);
    return 0;
}
```



1. #### WAP to reverse an array

```c
#include <stdio.h>
int main()
{
    int n, count = 0;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n], rev[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    for (int i = n - 1; i >= 0; i--)
    {
        rev[count] = ar[i];
        count++;
    }
    printf("\nOriginal Array: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d", ar[i]);
    }
    printf("\nReversed Array: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d", rev[i]);
    }
    printf("\n");
    return 0;
}
```



1. #### WAP to search an element in an array

```c
#include <stdio.h>
int main()
{
    int n, target, flag = 0;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    printf("Enter element to be searched: ");
    scanf("%d", &target);
    for (int i = 0; i < n; i++)
    {
        if (ar[i] == target)
        {
            printf("%d found at index %d\n", target, i);
            flag++;
        }
    }
    if (flag == 0)
    {
        printf("Element not found");
    }
    printf("\n");
    return 0;
}
```



1. #### WAP to sort an array in descending

```c
#include <stdio.h>
int main()
{
    int n, tmp;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (ar[i] > ar[j])
            {
                tmp = ar[j];
                ar[j] = ar[i];
                ar[i] = tmp;
            }
        }
    }
    printf("\nSorted Array: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", ar[i]);
    }
    printf("\n");
    return 0;
}
```



1. #### WAP to sort an array in ascending

```c
#include <stdio.h>
int main()
{
    int n, tmp;
    printf("Enter no of elements: ");
    scanf("%d", &n);
    int ar[n];
    printf("\nEnter Elements of Array: \n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (ar[i] < ar[j])
            {
                tmp = ar[j];
                ar[j] = ar[i];
                ar[i] = tmp;
            }
        }
    }
    printf("\nSorted Array: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", ar[i]);
    }
    printf("\n");
    return 0;
}
```


