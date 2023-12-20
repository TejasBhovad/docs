// WAP in c to calculate area and circumference of circle
#include <stdio.h>
int main(){
    float r, circum, area;
    printf("Enter Radius: ");
    scanf("%f",&r);
    circum = 2 * 3.14 * r;
    area = 3.14 * r * r;
    printf("Circumference: %f", circum);
    printf("\n");
    printf("Area: %f", area);
    printf("\n");
    return 0;
}