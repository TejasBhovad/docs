#include <stdio.h>
#include <stdlib.h>
struct NODE
{
    int data;
    struct NODE *next;
} typedef NODE;
NODE *head = 0, *newNode;

void display()
{
    if (head != 0)
    {
        NODE *current = head;
        printf("List: ");
        while (current != 0)
        {
            printf("%d ", current->data);
            current = current->next;
        }
        printf("\n");
    }
}

void createNode()
{
    newNode = (NODE *)malloc(sizeof(NODE));
    newNode->next = 0;
    printf("\nEnter Value to be Added: ");
    scanf("%d", &(newNode->data));
}

void addNodeStart()
{
    createNode();
    newNode->next = head;
    head = newNode;
}

void addNodeEnd()
{
    createNode();
    if (head == 0)
    {
        head = newNode;
    }

    NODE *current = head;
    while (current->next != 0)
    {
        current = current->next;
    }
    current->next = newNode;
    newNode->next = 0;
}

void addNodeAfter()
{
    int key;
    printf("\nEnter Value to be added after: ");
    scanf("%d", &key);
    createNode();
    NODE *current = head;
    while (current->data != key)
    {
        current = current->next;
    }
    newNode->next = current->next;
    current->next = newNode;
}

void addNodeBefore()
{
    int key;
    printf("\nEnter Value to be added before: ");
    scanf("%d", &key);
    createNode();
    NODE *current = head, *prev;
    while (current->data != key)
    {
        prev = current;
        current = current->next;
    }
    newNode->next = prev->next;
    prev->next = newNode;
}

void deleteNodeEnd()
{
    if (head == 0)
    {
        printf("\nERROR: No Element to Remove.");
    }
    else
    {
        NODE *current = head, *prev = 0;
        while (current->next != 0)
        {
            prev = current;
            current = current->next;
        }
        printf("\nRemoved Element: %d\n", current->data);
        prev->next = 0;
        free(current);
    }
}

void deleteNodeStart()
{
    if (head == 0)
    {
        printf("\nERROR: No Element to Remove.");
    }
    else
    {
        printf("\nRemoved Element: %d\n", head->data);
        NODE *current = head;
        head = current->next;
        free(current);
    }
}

void deleteNodeAt()
{
    if (head == 0)
    {
        printf("\nERROR: No Element to Remove.");
    }
    else
    {
        int key, ctr = 0;
        printf("\nEnter Value to be removed: ");
        scanf("%d", &key);
        NODE *current = head, *prev;

        while (current->data != key && current->next != 0)
        {
            prev = current;
            current = current->next;
            ctr++;
        }
        if (ctr == 0)
        {
            head = 0;
            free(current);
        }
        else
        {
            prev->next = current->next;
            free(current);
        }
    }
}

int main()
{
    int choice;
    do
    {
        printf("\nENTER CHOICE:");
        printf("\n1. Add Node at Start of List");
        printf("\n2. Add Node at End of List");
        printf("\n3. Add Node after key element");
        printf("\n4. Add Node before key element");
        printf("\n5. Delete Element from Start");
        printf("\n6. Delete Element from End");
        printf("\n7. Delete key Element");
        printf("\n8. EXIT\n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
        {
            addNodeStart();
            display();
            break;
        }
        case 2:
        {
            addNodeEnd();
            display();
            break;
        }
        case 3:
        {
            addNodeAfter();
            display();
            break;
        }
        case 4:
        {
            addNodeBefore();
            display();
            break;
        }
        case 5:
        {
            deleteNodeStart();
            display();
            break;
        }
        case 6:
        {
            deleteNodeEnd();
            display();
            break;
        }
        case 7:
        {
            deleteNodeAt();
            display();
            break;
        }
        case 8:
        {
            printf("\nExited.\n");
            break;
        }
        default:
        {
            printf("\nInvalid Choice, Try again.\n");
            continue;
        }
        }
    } while (choice != 8);
    return 0;
}