#include <stdio.h>
#define N 10
int i, ar[N];
void read()
{
    printf("\n");
    for (i = 0; i < N; i++)
    {
        printf("Enter %d Element: ", i);
        scanf("%d", &ar[i]);
    }
}
int find(int key)
{
    for (i = 0; i < N; i++)
    {
        if (ar[i] == key)
        {
            return i;
        }
    }
    return -1;
}
int main()
{
    int key, index;
    read();
    printf("\nEnter Key Element: ");
    scanf("%d", &key);
    index = find(key);
    if (index == -1)
    {
        printf("\nKey Element not Found");
    }
    else
    {
        printf("\nKey Element found at %d", index);
    }
    printf("\n");
    return 0;
}