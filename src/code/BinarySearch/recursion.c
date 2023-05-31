#include <stdio.h>
int N, key, ar[100];
int flag = 0;
int beg, mid, end;
int bSearch()
{

    mid = (beg + end) / 2;
    if (end > mid)
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
            bSearch();
        }
        else
        {
            end = mid-1;
            bSearch();
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
    beg = 0;
    end = N;
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
