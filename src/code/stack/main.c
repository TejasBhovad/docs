#include <stdio.h>

// FUNCTION PROTOTYPES
void push(int *ptr);
void pop(int *ptr);
void display(int *ptr);
int peek(int *ptr);

// GLOBAL VARIABLES
int top = -1;
int N;

int main()
{
    printf("Enter N : \n");
    scanf("%d", &N);
    int ar[N];

    // ACCEPTING N ELEMENTS OF STACK
    for (int i = 0; i < N; i++)
    {
        push(ar);
    }

    display(ar);
    pop(ar);
    pop(ar);
    display(ar);
    push(ar);
    display(ar);

    // PEEK OPERATION
    int topmost = peek(ar);
    printf("\nTopmost element: %d", topmost);
    printf("\n");

    return 0;
}

// INPUT STACK ELEMENTS
void push(int *ptr)
{
    if (top == N - 1)
    {
        printf("\nStack Overflow");
    }
    else
    {
        top++;
        printf("\nEnter Element Stack[%d]: ", top + 1);
        scanf("%d", &*(ptr + top));
        // *(ptr + top) = x;
    }
}

// REMOVE STACK ELEMENT
void pop(int *ptr)
{
    if (top == -1)
    {
        printf("\nNo Element to POP");
    }
    else
    {
        printf("\nRemoved Element: %d", *(ptr + top));
        top--;
    }
}

// DISPLAY THE STACK
void display(int *ptr)
{
    printf("\nElements in Stack:\n");
    for (int i = 0; i <= top; i++)
    {
        printf(" %d", *(ptr + i));
    }
}

// PEEK: DISPLAY TOPMOST ELEMENT
int peek(int *ptr)
{
    return *(ptr + top);
}