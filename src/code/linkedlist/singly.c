#include <stdlib.h>
#include <stdio.h>
struct node *head = 0, *temp, *newNode;
struct node
{
    int data;
    struct node *next;
};
void display()
{
    struct node *current = head;
    printf("List: ");
    while (current != 0)
    {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}
struct node *createNode()
{
    newNode = (struct node *)malloc(sizeof(struct node));
    newNode->next = 0;
    if (head == 0)
    {
        head = newNode;
        temp = newNode;
    }
    printf("\nEnter Value to be Added: ");
    scanf("%d", &(newNode->data));
    return newNode;
}
struct node *addNodeStart()
{

    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.");
    }
    else
    {
        newNode = createNode();
        newNode->next = head;
        head = newNode;
    }
    return head;
}
struct node *addNodeEnd()
{

    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.");
    }
    else
    {
        newNode = createNode();
        struct node *current = head;
        while (current->next != 0)
        {
            current = current->next;
        }
        current->next = newNode;
        temp = newNode;
    }
    return head;
}
struct node *addNodeAfter()
{

    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.");
        newNode = createNode();
        return newNode;
    }
    else
    {
        int key;
        printf("\nEnter Value to be added after: ");
        scanf("%d", &key);
        newNode = createNode();
        struct node *current = head;
        while (current->data != key)
        {
            current = current->next;
        }
        newNode->next = current->next;
        current->next = newNode;
    }
    return head;
}
struct node *addNodeBefore()
{
    if (head == 0)
    {
        printf("\nERROR: Linked List not Defined.");
        newNode = createNode();
        return newNode;
    }
    else
    {
        int key;
        printf("\nEnter Value to be added before: ");
        scanf("%d", &key);
        newNode = createNode();
        struct node *current = head, *prev;
        while (current->data != key)
        {
            prev = current;
            current = current->next;
        }
        newNode->next = prev->next;
        prev->next = newNode;
    }
    return head;
}
void deleteNodeEnd()
{
    if (head == 0)
    {
        printf("\nERROR: No Element to Remove.");
    }
    else
    {
        struct node *current = head, *prev = 0;
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
        struct node *current;
        current = head;
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
        struct node *current = head, *prev = 0;
        while (current->data != key)
        {
            ctr++;
            prev = current;
            current = current->next;
        }
        
        // when the first element is to be removed prev element is head
        if (ctr > 1)
        {
            prev->next = current->next;
        }
        else
        {
            head = current->next;
        }

        free(current);
    }
}
int main()
{
    int choice;
    do
    {
        printf("\nENTER CHOICE:");
        printf("\n1. Create Node (with initial value)");
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
            newNode = createNode();
            display();
            break;
        }
        case 2:
        {
            head = addNodeStart();
            display();
            break;
        }
        case 3:
        {
            head = addNodeEnd();
            display();
            break;
        }
        case 4:
        {
            head = addNodeAfter();
            display();
            break;
        }
        case 5:
        {
            head = addNodeBefore();
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