x<-c(1,2,3,3,3,4,4,4,5,5,6,7)
message("Mean: ",mean(x))
message("Median: ",median(x))
y<-table(x)
print(y)
get_mode <- function(x) {
  ux <- unique(x)
  ux[which.max(tabulate(match(x, ux)))]
}
mode_value <- get_mode(x)
message("Mode:", mode_value, "\n")