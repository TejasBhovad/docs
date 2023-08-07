// wap to implement quick sort
#include <stdio.h>
int ar[100], i, j, k, n, mid;

void swap(int i, int j)
{
    int temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
}
int partition(int low, int high)
{
    int pivot = ar[low];
    i = low;
    j = high;
    while (i <= j)
    {
        while (ar[i] <= pivot && i <= high)
            i++;
        while (ar[j] > pivot)
            j--;
        if (i < j)
        {
            swap(i, j);
        }
    }
    swap(low, j);
    return j;
}
void qSort(int low, int high)
{
    if (low < high)
    {
        mid = partition(low, high);
        qSort(low, mid - 1);
        qSort(mid + 1, high);
    }
}
int main()
{
    printf("Enter N: ");
    scanf("%d", &n);
    printf("Enter Array Elements: \n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &ar[i]);
    }
    qSort(0, n - 1);
    printf("Sorted Array: \n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", ar[i]);
    }
    printf("\n");
    return 0;
}