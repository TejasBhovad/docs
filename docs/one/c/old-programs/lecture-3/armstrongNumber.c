#include <stdio.h>
int main(){
    int n, tmp, rem, sum = 0;
    printf("Enter a Number: ");
    scanf("%d", &n);
    printf("\n");
    tmp = n;
    while(tmp>0){
        rem = tmp % 10;
        sum = sum + (rem * rem * rem);
        tmp = tmp / 10;
    }
    if (sum == n)
    {
        printf("%d is an Armstrong Number\n", n);
    }
    else{
        printf("%d is not an Armstrong Number\n", n);
    }
    printf("\n");
    return 0;
}

// LOGIC: 
// tmp % 10 will extract the last digit of a number eg 3 from 153
// tmp/10 removes the last digit eg 153 becomes 15
// sum stores the value of (sum + product of last digits)
// since the loop runs till tmp > 0, all the digits are evaluated