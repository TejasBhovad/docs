#include <stdio.h>
int main()
{
    int N;
    printf("\nEnter Value of N:");
    scanf("%d", &N);
    int ar[N];
    for (int i = 0; i < N; i++)
    {
        ar[i] = 0;
    }

    int index, ch;

    do
    {
        printf("\nEnter choice:");
        printf("\n1. Insert:");
        printf("\n2. Display:");
        printf("\n3. Search:");
        printf("\n4. Exit:\n");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
        {
            int key, flag = 0;
            printf("\nEnter the Key Element:");
            scanf("%d", &key);
            int h_key = key % N;
            for (int i = 0; i < N; i++)
            {
                index = (h_key + i) % N;
                if (ar[index] == 0)
                {
                    ar[index] = key;
                    flag = 1;
                    break;
                }
            }
            if (flag == 0)
            {
                printf("\nHash Table is Full");
            }

            break;
        }
        case 2:
        {
            for (int i = 0; i < N; i++)
            {
                printf("\n%d ", ar[i]);
            }
            break;
        }
        case 3:
        {
            int key, flag = 0;
            printf("\nEnter the Key Element:");
            scanf("%d", &key);
            int h_key = key % N;
            for (int i = 0; i < N; i++)
            {
                index = (h_key + i) % N;
                if (ar[index] == key)
                {
                    printf("\nElement %d found at index %d", key, index);
                    flag = 1;
                    break;
                }
            }
            if (flag == 0)
            {
                printf("\nHash Table is Full");
            }
            break;
        }
        default:
            break;
        }
    } while (ch != 4);

    return 0;
}
