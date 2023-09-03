# Taking two numeric
# Vectors with same length
x = c(1, 2, 3, 4, 5, 6, 7)
y = c(1, 3, 6, 2, 7, 4, 5)
# Calculating Correlation coefficient
# Using cor() method
result = cor(x, y, method = "pearson") 
plot(x,y)
# Print the result
cat("Pearson correlation coefficient is:", result)