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
            printf(" ");
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
    if ((front == 0 && rear == N - 1) || (rear == front - 1))
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
        else if (rear == N - 1 && front != 0)
        {
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
    if (front == -1 && rear == -1)
    {
        printf("\nUnderflow Error");
    }
    else
    {
        if (front == rear)
        {
            printf("\n%d is Dequeued", *(ptr + front));
            front = -1;
            rear = -1;
        }
        else
        {
            if (front == N - 1)
            {
                printf("\n%d is Dequeued", *(ptr + front));
                front = 0;
            }

            else
            {
                printf("\n%d is Dequeued", *(ptr + front));
                front = front + 1;
            }
        }
    }
}

// DISPLAY FUNCTION
void display(int *ptr)
{
    printf("\nElements in Queue: \n");
    if (front == -1 && rear == -1)
    {
        printf("Queue is empty");
        return;
    }
    printf("Queue elements : ");
    if (front <= rear)
    {
        for (int i = front; i <= rear; i++)
        {
            printf("%d ", *(ptr + i));
        }
    }
    else
    {
        for (int i = front; i < N; i++)
        {
            printf("%d ", *(ptr + i));
        }
        for (int i = 0; i <= rear; i++)
        {
            printf("%d ", *(ptr + i));
        }
    }
}