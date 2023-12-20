#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int board[8];

int place(int row, int column)
{
    for (int i = 0; i < row; i++)
    {
        if (board[i] == column || abs(board[i] - column) == abs(i - row))
        {
            return 0;
        }
    }
    return 1; // No conflict
}

void print_board(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (board[i] == j)
            {
                printf("Q ");
            }
            else
            {
                printf(". ");
            }
        }
        printf("\n");
    }
    printf("\n");
}

void Queen(int row, int n)
{
    if (row == n)
    {
        print_board(n);
    }
    else
    {
        for (int column = 0; column < n; column++)
        {
            if (place(row, column))
            {
                board[row] = column;
                Queen(row + 1, n);
            }
        }
    }
}

int main()
{
    int n = 8;
    Queen(0, n);
    return 0;
}
