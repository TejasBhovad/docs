# creating a vector
x<-c(1,2,3,3,3,4,4,4,5,5,6,7)
# finding mean, median
message("Mean: ",mean(x))
message("Median: ",median(x))
# creating freq distribution table
y<-table(x)
print(y)
# finding mode
m<-as.numeric(names(y)[which(y==max(y))])
message("Mode: ",m)