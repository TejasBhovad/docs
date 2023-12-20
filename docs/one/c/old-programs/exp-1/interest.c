// WAP in c to calculate Simple interest And compound interest
#include <stdio.h>
#include <math.h>
int main(){
    double p, r, t, n;
    printf("Enter Principal: ");
    scanf("%lf", &p);
    printf("Enter Rate: ");
    scanf("%lf", &r);
    printf("Enter Time: ");
    scanf("%lf", &t);
    printf("Enter N: ");
    scanf("%lf", &n);
    printf("\n");
    double si, ci;
    si = (p * r * t) / 100;
    ci = p*(pow((1 + (r / n)), n * t));
    printf("Simple Interest: %lf", si);
    printf("\n");
    printf("Compound Interest: %lf", ci);
    printf("\n");
    return 0;
}