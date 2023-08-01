#include <stdio.h>
int N, key, ar[100];
int beg, mid, end;
int bSearch(int key, int beg, int end)
{
    mid = (beg + end) / 2;
    if (end >= mid)
    {
        if (key == ar[mid])
        {
            return mid;
        }
        else if (key > ar[mid])
        {
            return bSearch(key, mid + 1, end);
        }
        else
        {
            return bSearch(key, beg, mid - 1);
        }
    }
    return -1;
}
int main()
{
    printf("\nEnter Size of Array: \n");
    scanf("%d", &N);
    for (int i = 0; i < N; i++)
    {
        printf("Enter Element(%d): ", i);
        scanf("%d", &ar[i]);
    }
    printf("\nEnter Element to be searched: ");
    scanf("%d", &key);
    beg = 0;
    end = N;
    int result = bSearch(key, beg, end);
    if (result == -1)
    {
        printf("\nElement not found");
    }
    else
    {
        printf("\nElement found at index %d\n", result);
    }
    return 0;
}