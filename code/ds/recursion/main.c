#include <stdio.h>
void recurse()
{
    // Body that will contain the termination condition
    recurse();
}
int main()
{
    recurse();
    return 0;
}