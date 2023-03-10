#include <stdlib.h>
#include <stdio.h>
struct node *head = 0, *temp, *newNode;
struct node
{
    int data;
    struct node *next;
};
void display(struct node *head)
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
        // head = newNode
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
void deleteNodeEnd(struct node *head)
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
void deleteNodeStart(struct node *head)
{
    if (head == 0)
    {
        printf("\nERROR: No Element to Remove.");
    }
    else
    {
        printf("\nRemoved Element: %d\n", head->data);
        head = head->next;
        free(head);
    }
}
int main()
{
    // IGNORE: TEST CASES
    newNode = createNode();
    head = addNodeStart();
    display(head);
    head = addNodeEnd();
    display(head);
    // head = addNodeAfter();
    // display(head);
    // head = addNodeBefore();
    // display(head);
    deleteNodeStart(head);
    display(head);

    // int choice;
    // do
    // {
    //     printf("\nENTER CHOICE:");
    //     printf("\n1. Create Node (with initial value)");
    //     printf("\n2. Add Node at Start of List");
    //     printf("\n3. Add Node at End of List");
    //     printf("\n4. Add Node after key element");
    //     printf("\n5. Add Node before key element");
    //     printf("\n6. Exit the Program\n");
    //     scanf("%d", &choice);
    //     switch (choice)
    //     {
    //     case 1:
    //     {
    //         newNode = createNode();
    //         display(head);
    //         break;
    //     }
    //     case 2:
    //     {
    //         head = addNodeStart();
    //         display(head);
    //         break;
    //     }
    //     case 3:
    //     {
    //         head = addNodeEnd();
    //         display(head);
    //         break;
    //     }
    //     case 4:
    //     {
    //         head = addNodeAfter();
    //         display(head);
    //         break;
    //     }
    //     case 5:
    //     {
    //         head = addNodeBefore();
    //         display(head);
    //         break;
    //     }
    //     case 6:
    //     {
    //         printf("\nExited.\n");
    //         break;
    //     }
    //     default:
    //     {
    //         printf("\nInvalid Choice");
    //         continue;
    //     }
    //     }
    // } while (choice != 6);
    return 0;
}
