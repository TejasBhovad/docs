#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

#define MAX_NODES 100

typedef struct Queue
{
    int arr[MAX_NODES];
    int front, rear;
} Queue;

void init(Queue *q)
{
    q->front = q->rear = -1;
}

void enqueue(Queue *q, int node)
{
    if (q->rear == MAX_NODES - 1)
    {
        printf("Queue is full\n");
        return;
    }
    q->arr[++q->rear] = node;
    if (q->front == -1)
    {
        q->front = 0;
    }
}

int dequeue(Queue *q)
{
    if (q->front == -1 || q->front > q->rear)
    {
        printf("Queue is empty\n");
        return -1;
    }
    int node = q->arr[q->front++];
    return node;
}

void bfs(int graph[MAX_NODES][MAX_NODES], int n)
{
    bool visited[MAX_NODES] = {false};
    Queue queue;
    init(&queue);
    enqueue(&queue, 0);
    visited[0] = true;
    while (queue.front <= queue.rear)
    {
        int node = dequeue(&queue);
        printf("%d ", node);
        for (int i = 0; i < n; i++)
        {
            if (graph[node][i] == 1 && !visited[i])
            {
                visited[i] = true;
                enqueue(&queue, i);
            }
        }
    }
    printf("\n");
}

void dfs(int graph[MAX_NODES][MAX_NODES], int n)
{
    bool visited[MAX_NODES] = {false};
    int stack[MAX_NODES];
    int top = -1;
    stack[++top] = 0;
    visited[0] = true;
    while (top != -1)
    {
        int node = stack[top--];
        printf("%d ", node);
        for (int i = 0; i < n; i++)
        {
            if (graph[node][i] == 1 && !visited[i])
            {
                visited[i] = true;
                stack[++top] = i;
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
