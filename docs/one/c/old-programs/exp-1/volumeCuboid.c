// WAP in C to find the volume of cuboid
#include <stdio.h>
int main(){
    int l, b, h ,vol;
    printf("Enter a Number: ");
    scanf("%d",&l);
    printf("Enter a Number: ");
    scanf("%d",&b);
    printf("Enter a Number: ");
    scanf("%d",&h);
    vol = l * b * h;
    printf("Volume is %d", vol);
    printf("\n");
    return 0;
}