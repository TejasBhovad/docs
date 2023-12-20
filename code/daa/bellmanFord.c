#include <stdio.h>

#define INFINITY 9999
#define MAX 10

void bellmanFord(int G[MAX][MAX], int n, int startNode);

int main() {
    int G[MAX][MAX], i, j, n, u;
    printf("Enter the no. of vertices: ");
    scanf("%d", &n);
    printf("\nEnter the adjacency matrix:\n");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &G[i][j]);
    printf("\nEnter the starting node: ");
    scanf("%d", &u);
    bellmanFord(G, n, u);
    return 0;
}

void bellmanFord(int G[MAX][MAX], int n, int startNode) {
    int distance[MAX], pred[MAX];
    
    // INIT
    for (int i = 0; i < n; i++) {
        distance[i] = INFINITY;
        pred[i] = -1;
    }
    distance[startNode] = 0;

    // RELAXATION
    for (int i = 0; i < n - 1; i++) {
        for (int u = 0; u < n; u++) {
            for (int v = 0; v < n; v++) {
                if (G[u][v] != 0 && distance[u] + G[u][v] < distance[v]) {
                    distance[v] = distance[u] + G[u][v];
                    pred[v] = u;
                }
            }
        }
    }

    // CHECK FOR NEGATIVE WEIGHT CYCLES
    for (int u = 0; u < n; u++) {
        for (int v = 0; v < n; v++) {
            if (G[u][v] != 0 && distance[u] + G[u][v] < distance[v]) {
                printf("Graph contains negative weight cycle.");
                return;
            }
        }
    }

    // DISPLAY
    for (int i = 0; i < n; i++) {
        if (i != startNode) {
            printf("\nDistance of node %d = %d", i, distance[i]);
            printf("\nPath = %d", i);
            int j = i;
            while (j != startNode) {
                j = pred[j];
                printf(" <- %d", j);
            }
        }
    }
}
