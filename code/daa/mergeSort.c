// wap to implement merge sort
#include <stdio.h>
int ar[100], i, j, k, n;
void merge(int low, int mid, int high)
{
    int temp[100];
    i = low;
    j = mid + 1;
    k = low;
    while (i <= mid && j <= high)
    {
        if (ar[i] <= ar[j])
        {
            temp[k] = ar[i];
            i++;
            k++;
        }
        else
        {
            temp[k] = ar[j];
            j++;
            k++;
        }
    }
    while (i <= mid)
    {
        temp[k] = ar[i];
        i++;
        k++;
    }
    while (j <= high)
    {
        temp[k] = ar[j];
        j++;
        k++;
    }
    for (i = low; i <= high; i++)
    {
        ar[i] = temp[i];
    }
}

void mergeSort(int low, int high)
{
    int mid;
    if (low < high)
    {
        mid = (low + high) / 2;
        mergeSort(low, mid);
        mergeSort(mid + 1, high);
        merge(low, mid, high);
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
    mergeSort(0, n - 1);
    printf("Sorted Array: \n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", ar[i]);
    }
    printf("\n");
    return 0;
}