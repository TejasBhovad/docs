#include <stdio.h>
int N, key, ar[100];
int bSearch()
{
    int beg, mid, end;
    beg = 0;
    end = N;
    int flag = 0;
    mid = (beg + end) / 2;
    while (end > mid)
    {

        if (key == ar[mid])
        {
            flag = 1;
            printf("Index: %d", mid);
            return 1;
        }
        else if (key > ar[mid])
        {
            beg = mid + 1;
            mid = (beg + end) / 2;
        }
        else
        {
            end = mid-1;
            mid = (beg + end) / 2;
        }
    }
    return flag;
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
    if (bSearch())
    {
        printf("\nElement found\n");
    }
    else
    {
        printf("\nElement Not found\n");
    }
    return 0;
}
