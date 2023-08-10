# Sample data for the histogram
data <- c(23, 45, 34, 26, 33, 13, 12, 55, 67, 39, 54, 17, 35, 23, 56, 78, 90, 34, 67, 78)

# Create a histogram
hist(data, breaks = "FD", col = "lightgreen", main = "Sample Histogram", xlab = "Values", ylab = "Frequency")