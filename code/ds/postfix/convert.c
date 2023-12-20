#include <stdio.h>
#include <ctype.h>

char stack[100];
int top = -1;

void push(char x)
{
  top++;
  stack[top] = x;
}

void display(char *ptr)
{
  printf("\nElements in Stack:\n");
  for (int i = 0; i <= top; i++)
  {
    printf(" %d", *(ptr + i));
  }
}

char pop()
{
  if (top == -1)
  {
    printf("\nUnderflow Error");
    return -1;
  }

  else
  {

    return stack[top--];
  }
}

int priority(char x)
{
  if (x == '+' || x == '-')
  {
    return 1;
  }

  if (x == '*' || x == '/' || x == '%')
  {
    return 2;
  }
  return 0;
}

int main()
{
  char exp[100];
  char *e, x;
  printf("Enter the expression : ");
  scanf("%s", exp);
  printf("\n");
  e = exp;

  while (*e != '\0')
  {
    if (isalnum(*e))
    {
      printf("%c ", *e);
    }

    else if (*e == '(')
    {
      push(*e);
    }

    else if (*e == ')')
    {
      while ((x = pop()) != '(')
      {
        printf("%c ", x);
      }
    }
    else
    {
      if (priority(*e) <= priority(stack[top]))
      {
        printf("%c ", pop());
      }

      push(*e);
    }
    e++;
  }
  while (top != -1)
  {
    printf("%c ", pop());
  }

  printf("\n");
  return 0;
}
