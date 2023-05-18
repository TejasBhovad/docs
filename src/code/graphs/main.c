#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

#define MAX_NODES 100

int front = -1;
int rear = -1;
int top = -1;

int queue[MAX_NODES];
int stack[MAX_NODES];

void enqueue(int node)
{
    if (rear == MAX_NODES - 1)
    {
        printf("Queue is full\n");
        return;
    }
    queue[++rear] = node;
    if (front == -1)
    {
        front = 0;
    }
}

void push(int node)
{
    if (top == MAX_NODES - 1)
    {
        printf("Stack is full\n");
        return;
    }
    stack[++top] = node;
}

int dequeue()
{
    if (front == -1 || front > rear)
    {
        printf("Queue is empty\n");
        return -1;
    }
    return queue[front++];
}

int pop()
{
    if (top == -1)
    {
        printf("Stack is empty\n");
        return -1;
    }
    return stack[top--];
}

void bfs(int graph[MAX_NODES][MAX_NODES], int n)
{
    bool visited[MAX_NODES] = {false};
    enqueue(0);
    visited[0] = true;
    while (front <= rear)
    {
        int node = dequeue();
        printf("%d ", node);
        for (int i = 0; i < n; i++)
        {
            if (graph[node][i] == 1 && !visited[i])
            {
                visited[i] = true;
                enqueue(i);
            }
        }
    }
    printf("\n");
}

void dfs(int graph[MAX_NODES][MAX_NODES], int n)
{
    bool visited[MAX_NODES] = {false};
    push(0);
    visited[0] = true;
    while (top != -1)
    {
        int node = pop();
        printf("%d ", node);
        for (int i = 0; i < n; i++)
        {
            if (graph[node][i] == 1 && !visited[i])
            {
                visited[i] = true;
                push(i);
            }
        }
    }
    printf("\n");
}

int main()
{
    int graph[MAX_NODES][MAX_NODES] = {{0, 1, 1, 0, 0, 0, 0, 0},
                                       {1, 0, 0, 1, 1, 1, 0, 0},
                                       {1, 0, 0, 0, 0, 1, 1, 1},
                                       {0, 1, 0, 0, 0, 0, 0, 0},
                                       {0, 1, 0, 0, 0, 0, 0, 0},
                                       {0, 1, 1, 0, 0, 0, 0, 0},
                                       {0, 0, 1, 0, 0, 0, 0, 0},
                                       {0, 0, 1, 0, 0, 0, 0, 0}};
    int n = 8;
    printf("BFS: ");
    bfs(graph, n);
    printf("DFS: ");
    dfs(graph, n);
    return 0;
}
