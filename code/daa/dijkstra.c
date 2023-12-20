// WAP a program to implement Dijkstra's algorithm in c
#include <stdio.h>

#define INFINITY 9999
#define MAX 10

void dijkstra(int G[MAX][MAX], int n, int startNode);

int main()
{
    int G[MAX][MAX], i, j, n, u;
    printf("Enter the no. of vertices: ");
    scanf("%d", &n);
    printf("\nEnter the adjacency matrix:\n");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &G[i][j]);
    printf("\nEnter the starting node: ");
    scanf("%d", &u);
    dijkstra(G, n, u);
    return 0;
}

void dijkstra(int G[MAX][MAX], int n, int startNode)
{
    int cost[MAX][MAX], distance[MAX], pred[MAX];
    int visited[MAX], count, minDistance, nextNode, i, j;
    // Creating cost matrix
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            if (G[i][j] == 0)
                cost[i][j] = INFINITY;
            else
                cost[i][j] = G[i][j];
    // Initializing pred[], distance[] and visited[]
    for (i = 0; i < n; i++)
    {
        distance[i] = cost[startNode][i];
        pred[i] = startNode;
        visited[i] = 0;
    }
    distance[startNode] = 0;
    visited[startNode] = 1;
    count = 1;
    // Finding the shortest path
    while (count < n - 1)
    {
        minDistance = INFINITY;
        // Next node gives the node at minimum distance
        for (i = 0; i < n; i++)
            if (distance[i] < minDistance && !visited[i])
            {
                minDistance = distance[i];
                nextNode = i;
            }
        visited[nextNode] = 1;
        // Updating the distance[] array with minimum distance of the node
        for (i = 0; i < n; i++)
            if (!visited[i])
                if (minDistance + cost[nextNode][i] < distance[i])
                {
                    distance[i] = minDistance + cost[nextNode][i];
                    pred[i] = nextNode;
                }
        count++;
    }
    for (i = 0; i < n; i++)
        if (i != startNode)
        {
            printf("\nDistance of node %d = %d", i, distance[i]);
            printf("\nPath = %d", i);
            j = i;
            do
            {
                j = pred[j];
                printf(" <-%d", j);
            } while (j != startNode);
        }
}
