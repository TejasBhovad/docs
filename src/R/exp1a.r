# Sample data for the pie chart
labels <- c("Category 1", "Category 2", "Category 3", "Category 4", "Category 5")
values <- c(30, 20, 15, 10, 25)

# Create a pie chart
pie(values, labels = labels, col = rainbow(length(labels)), main = "Sample Pie Chart")

