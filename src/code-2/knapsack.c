// WAP to create a knapsack problem using greedy method.
#include <stdio.h>
int main()
{
    int n, i, j;
    printf("Enter the number of items: ");
    scanf("%d", &n);
    float w[n], p[n], r[n], x[n];
    printf("Enter the weights of the items: \n");
    for (i = 0; i < n; i++)
        scanf("%f", &w[i]);
    printf("Enter the profits of the items: \n");
    for (i = 0; i < n; i++)
        scanf("%f", &p[i]);
    printf("Enter the capacity of the knapsack: ");
    float cap;
    scanf("%f", &cap);
    // calculating the ratio
    for (i = 0; i < n; i++)
        r[i] = p[i] / w[i];

    // sort the ratio
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (r[i] < r[j])
            {
                int temp = r[i];
                r[i] = r[j];
                r[j] = temp;
                temp = w[i];
                w[i] = w[j];
                w[j] = temp;
                temp = p[i];
                p[i] = p[j];
                p[j] = temp;
            }
        }
    }
    // knapsack logic fractional
    float tp = 0;
    for (i = 0; i < n; i++)
        x[i] = 0;
    for (i = 0; i < n; i++)
    {
        if (w[i] > cap)
            break;
        else
        {
            x[i] = 1;
            tp += p[i];
            cap -= w[i];
        }
    }
    if (i < n)
    {
        x[i] = cap / w[i];
        tp += x[i] * p[i];
    }
    printf("The solution vector is: ");
    for (i = 0; i < n; i++)
        printf("%f ", x[i]);
    printf("\nThe total profit is: %f\n", tp);
    return 0;
}