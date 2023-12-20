#include <stdio.h>
int N;

// HANOI FUNCTION
void Hanoi(int N, char src, char dest, char aux)
{
    // CHECK IF ONE DISK PRESENT
    if (N == 1)
    {
        printf("\nMove disk 1 from rod %c to rod %c", src, dest);
        return;
    }
    Hanoi(N - 1, src, aux, dest);
    printf("\nMove disk %d from rod %c to rod %c", N, src, dest);
    Hanoi(N - 1, aux, dest, src);
}
int main()
{
    printf("Enter the number of Disks: ");
    scanf("%d", &N);
    printf("\n");
    printf("Moves:");
    Hanoi(N, 'A', 'C', 'B');
    printf("\n");

    return 0;
}
