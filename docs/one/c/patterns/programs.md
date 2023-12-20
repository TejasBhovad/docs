# Patterns in C

### 1. WAP to print the given pattern

```
1
12
123
1234
12345
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
```

### 2. WAP to print the given pattern

```
12345
1234
123
12
1
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = n; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
```

### 3. WAP to print the given pattern

```
1
21
321
4321
54321
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = i; j >= 1; j--)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
```

### 4. WAP to print the given pattern

```
54321
4321
321
21
1
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = n; i >= 1; i--)
    {
        for (int j = i; j >= 1; j--)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
```

### 5. WAP to print the given pattern

```
1
22
333
4444
55555
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
```

### 6. WAP to print the given pattern

```
55555
4444
333
22
1
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = n; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
```

### 7. WAP to print the given pattern

```
*
**
***
****
*****
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

### 8. WAP to print the given pattern

```
    *
   **
  ***
 ****
*****
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }
        for (int k = 1; k <= i; k++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

### 9. WAP to print the given pattern

```
    *
   ***
  *****
 *******
*********
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }
        for (int k = 1; k <= i; k++)
        {
            printf("*");
        }
        for (int m = 1; m <= i - 1; m++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

### 10. WAP to print the given pattern

```
A
AB
ABC
ABCD
ABCDE
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        char ch = 'A';
        for (int j = 1; j <= i; j++)
        {
            printf("%c", ch);
            ch++;
        }
        printf("\n");
    }
    return 0;
}
```

### 11. WAP to print the given pattern

```
A
BB
CCC
DDDD
EEEEE
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    char ch = 'A';
    for (int i = 1; i <= n; i++)
    {

        for (int j = 1; j <= i; j++)
        {
            printf("%c", ch);
        }
        ch++;
        printf("\n");
    }
    return 0;
}
```

### 12. WAP to print the given pattern

```
    1
   121
  12321
 1234321
123454321
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }
        for (int k = 1; k <= i; k++)
        {
            printf("%d", k);
        }
        for (int m = i - 1; m >= 1; m--)
        {
            printf("%d", m);
        }
        printf("\n");
    }
    return 0;
}
```

### 13. WAP to print the given pattern

```
    *
   * *
  * * *
 * * * *
* * * * *
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }
        for (int k = 1; k <= i; k++)
        {
            printf("* ");
        }

        printf("\n");
    }
    return 0;
}
```

### 14. WAP to print the given pattern [Floyd's Triangle]

```
1
23
456
78910
```

#### Code:

```c
#include <stdio.h>
int main()
{
    int n = 5, ctr = 1;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", ctr);
            ctr++;
        }
        printf("\n");
    }
    return 0;
}
```
