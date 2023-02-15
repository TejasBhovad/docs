#include <stdio.h>

// GLOBAL VARIABLES
int front = -1, rear = -1;
int N;

// FUNCTION PROTOTYPE
void enqueue(int *ptr, int x);
void dequeue(int *ptr);
void display(int *ptr);

int main()
{
    printf("Enter N : \n");
    scanf("%d", &N);
    int ar[N], choice;
    do
    {
        printf("\nEnter Choice:");
        printf("\n1. Queue");
        printf("\n2. Dequeue");
        printf("\n3. Display");
        printf("\n4. Exit\n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
        {
            int x;
            printf("\nEnter Element to Queue: ");
            scanf("%d", &x);
            enqueue(ar, x);
            break;
        }
        case 2:
        {
            dequeue(ar);
            break;
        }
        case 3:
        {
            display(ar);
            break;
        }
        case 4:
        {
            printf("");
            break;
        }

        default:
        {
            printf("\nInvalid choice");
            break;
        }
        }
    } while (choice != 4);
    printf("\n");
    return 0;
}

// ENQUEUE FUNCTION
void enqueue(int *ptr, int x)
{
    if (rear == N - 1)
    {
        printf("\nOverflow Error");
    }
    else
    {
        if (rear == -1 && front == -1)
        {
            front = 0;
            rear = 0;
            *(ptr + rear) = x;
        }
        else
        {
            rear++;
            *(ptr + rear) = x;
        }
    }
}

// DEQUEUE FUNCTION
void dequeue(int *ptr)
{
    if (front > rear || front == -1 && rear == -1)
    {
        printf("\nUnderflow Error");
    }
    else
    {
        printf("\n%d is Dequeued", *(ptr + front));
        front++;
    }
}

// DISPLAY FUNCTION
void display(int *ptr)
{
    printf("\nElements in Queue: \n");
    for (int i = front; i <= rear; i++)
    {
        printf(" %d", *(ptr + i));
    }
}