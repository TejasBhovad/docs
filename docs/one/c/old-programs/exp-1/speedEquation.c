// WAP in C to evaluate speed equations
#include <stdio.h>
int main(){
    double u, a, t, v, s;
    // %lf is used for double
    printf("Enter initial velocity: ");
    scanf("%lf", &u);
    printf("Enter acceleration: ");
    scanf("%lf", &a);
    printf("Enter time: ");
    scanf("%lf", &t);
    v = u + (a * t);
    s = (u * t) + ((a * t * t)/2);
    printf("Final Velocity: %lf", v);
    printf("\n");
    printf("Distance: %lf", s);
    printf("\n");
    return 0;
}