#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
} typedef NODE;
NODE *head = 0, *newNode;

void display()
{
    NODE *current = head;
    printf("List: ");
    while (current->next != head)
    {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

void createNode()
{
    newNode = (NODE *)malloc(sizeof(NODE));

    if (head == 0)
    {
        printf("\nEmpty List created \n");
        head = temp = newNode;
        newNode->next = head;
    }
    else
    {
        printf("\nEnter Value to be Added: ");
        scanf("%d", &(newNode->data));
        newNode->next = head;
    }
}

void addNodeStart()
{
    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.\n");
    }
    else
    {
        createNode();
        NODE *current = head;
        while (current->next != head)
        {
            current = current->next;
        }
        current->next = newNode;
        newNode->next = head;
        head = newNode;
    }
}

void addNodeEnd()
{
    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.\n");
        return;
    }
    else
    {
        createNode();
        NODE *current = head;
        while (current->next != head)
        {
            current = current->next;
        }
        current->next = newNode;
        newNode->next = head;
        head = newNode;
    }
}

void addNodeAfter()
{
    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.\n");
    }
    else
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
}

void addNodeBefore()
{
    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.");
    }
    else
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
}

void deleteNodeEnd()
{
    if (head == 0)
    {
        printf("\nERROR: No Element to Remove.");
    }
    else if (head->next == head)
    {
        head = 0;
        free(head);
    }
    else
    {
        NODE *current = head, *prev;
        while (current->next != head)
        {
            prev = current;
            current = current->next;
        }
        printf("\nRemoved Element from End");

        prev->next = current->next;
        free(current);
    }
}

void deleteNodeStart()
{
    if (head == 0)
    {
        printf("\nERROR: No Element to Remove.");
    }
    else if (head->next == head)
    {
        printf("\nRemoved Element: %d\n", head->data);
        head = 0;
        free(head);
    }
    else
    {
        printf("\nRemoved Element from Start\n");
        NODE *current = head;
        while (current->next != head)
        {
            current = current->next;
        }
        current->next = head->next;
        free(head);
        head = current->next;
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

        while (current->data != key && current->next != head)
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
        printf("\n1. Create List");
        printf("\n2. Add Node at Start of List");
        printf("\n3. Add Node at End of List");
        printf("\n4. Add Node after key element");
        printf("\n5. Add Node before key element");
        printf("\n6. Delete Element from Start");
        printf("\n7. Delete Element from End");
        printf("\n8. Delete key Element");
        printf("\n9. EXIT\n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
        {
            createNode();
            break;
        }
        case 2:
        {
            addNodeStart();
            display();
            break;
        }
        case 3:
        {
            addNodeEnd();
            display();
            break;
        }
        case 4:
        {
            addNodeAfter();
            display();
            break;
        }
        case 5:
        {
            addNodeBefore();
            display();
            break;
        }
        case 6:
        {
            deleteNodeStart();
            display();
            break;
        }
        case 7:
        {
            deleteNodeEnd();
            display();
            break;
        }
        case 8:
        {
            deleteNodeAt();
            display();
            break;
        }
        case 9:
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
    } while (choice != 9);
    return 0;
}