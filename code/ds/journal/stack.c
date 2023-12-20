#include <stdio.h>

// FUNCTION PROTOTYPES
void push(int *ptr);
void pop(int *ptr);
void display(int *ptr);
void peek(int *ptr);

// GLOBAL VARIABLES
int top = -1;
int N;

int main()
{
    printf("Enter N : \n");
    scanf("%d", &N);
    int ar[N], choice;
    do
    {
        printf("\nEnter Choice:");
        printf("\n1. Push");
        printf("\n2. Pop");
        printf("\n3. Peek");
        printf("\n4. Display");
        printf("\n5. Exit\n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
        {
            push(ar);
            break;
        }
        case 2:
        {
            pop(ar);
            break;
        }
        case 3:
        {
            peek(ar);
            break;
        }
        case 4:
        {
            display(ar);
            break;
        }
        case 5:
        {
            printf("\nExited from Loop");
            break;
        }
        default:
        {
            printf("\nInvalid choice");
            break;
        }
        }

    } while (choice != 5);
    printf("\n");

    return 0;
}

// INPUT STACK ELEMENTS
void push(int *ptr)
{
    // STACK OVERFLOW
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
    // STACK UNDERFLOW
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
void peek(int *ptr)
{
    // STACK UNDERFLOW
    if (top == -1)
    {
        printf("\nNo Element to PEEK");
    }
    else
    {
        printf("\nTopmost element: %d", *(ptr + top));
    }
}