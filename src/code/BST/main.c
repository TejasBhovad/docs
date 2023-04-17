#include <stdio.h>
#include <stdlib.h>

// structure of a node
struct node
{
    int data;
    struct node *left;
    struct node *right;
} typedef NODE;

// globally initialized root pointer
NODE *root = NULL;

// function prototyping
NODE *createNode(int);
void deleteNode(int key);
void insert(int);
void inOrder(NODE *);
void preOrder(NODE *);
void postOrder(NODE *);
int getData();
int main()
{
    int userChoice;
    int data;
    NODE *result = NULL;

    do
    {
        printf("\n1. Insert Element");
        printf("\n2. Display ~INORDER ");
        printf("\n3. Display ~POSTORDER ");
        printf("\n4. Display ~PREORDER ");
        printf("\n5. Delete Element ");
        printf("\n6. Exit");

        printf("\n\nEnter Your Choice: ");
        scanf("%d", &userChoice);
        printf("\n");

        switch (userChoice)
        {
        case 1:
            data = getData();
            insert(data);
            break;
        case 2:
            inOrder(root);
            break;

        case 3:
            postOrder(root);
            break;

        case 4:
            preOrder(root);
            break;

        case 5:
        {
            int key;
            printf("\n\nEnter Element to delete: ");
            scanf("%d", &key);
            deleteNode(key);
            break;
        }

        case 6:
            printf("\n\nProgram was terminated");
            break;

        default:
            printf("\n\tInvalid Choice");
            break;
        }

    } while (userChoice != 6);

    return 0;
}
// creates a new node
NODE *createNode(int data)
{
    NODE *newNode = (NODE *)malloc(sizeof(NODE));

    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;

    return newNode;
}

// inserts the data in the BST
void insert(int data)
{
    NODE *newNode = createNode(data);

    if (root == NULL)
    {
        root = newNode;
        printf("\n* node having data %d was inserted", data);
        return;
    }

    NODE *temp = root;
    NODE *prev = NULL;

    // traverse through the BST to get the correct position for insertion
    while (temp != NULL)
    {
        prev = temp;
        if (data > temp->data)
        {
            temp = temp->right;
        }
        else
        {
            temp = temp->left;
        }
    }
    // found the last node where the new node should insert
    if (data > prev->data)
    {
        prev->right = newNode;
    }
    else
    {
        prev->left = newNode;
    }

    printf("\n* node having data %d was inserted", data);
}
void inOrder(NODE *root)
{
    if (root == NULL)
    {
        return;
    }
    inOrder(root->left);
    printf("%d ", root->data);
    inOrder(root->right);
}
void preOrder(NODE *root)
{
    if (root == NULL)
    {
        return;
    }
    printf("%d ", root->data);
    preOrder(root->left);
    preOrder(root->right);
}

// postOrder traversal of the BST
void postOrder(NODE *root)
{
    if (root == NULL)
    {
        return;
    }
    postOrder(root->left);
    postOrder(root->right);
    printf("%d ", root->data);
}

// getting data from the user
int getData()
{
    int data;
    printf("\nEnter Data: ");
    scanf("%d", &data);
    return data;
}

// delete a node
void deleteNode(int key)
{
    NODE *temp = root;
    NODE *parent = NULL;

    // find the node to delete
    while (temp != NULL && temp->data != key)
    {
        parent = temp;
        if (key > temp->data)
        {
            temp = temp->right;
        }
        else
        {
            temp = temp->left;
        }
    }

    // node not found
    if (temp == NULL)
    {
        printf("\n* node with key %d not found", key);
        return;
    }

    // node to delete has no children
    if (temp->left == NULL && temp->right == NULL)
    {
        // node to delete is the root node
        if (temp == root)
        {
            root = NULL;
        }
        else if (temp == parent->left)
        {
            parent->left = NULL;
        }
        else
        {
            parent->right = NULL;
        }
        free(temp);
    }
    // node to delete has one child
    else if (temp->left == NULL || temp->right == NULL)
    {
        NODE *child = temp->left ? temp->left : temp->right;

        // node to delete is the root node
        if (temp == root)
        {
            root = child;
        }
        else if (temp == parent->left)
        {
            parent->left = child;
        }
        else
        {
            parent->right = child;
        }
        free(temp);
    }
    // node to delete has two children
    else
    {
        NODE *successor = temp->right;
        parent = temp;

        // find the inorder successor of the node to delete
        while (successor->left != NULL)
        {
            parent = successor;
            successor = successor->left;
        }

        temp->data = successor->data;

        // delete the inorder successor
        if (parent->left == successor)
        {
            parent->left = successor->right;
        }
        else
        {
            parent->right = successor->right;
        }
        free(successor);
    }

    printf("\n* node with key %d was deleted", key);
}
