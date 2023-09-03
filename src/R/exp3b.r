# importing csv file
df= read.csv("data.csv")

# selecting columns from csv file
x = df$weight
y = df$value

plot(x,y)

# calculating correlation
result = cor(x,y,method="pearson")

cat("Pearson correlation coefficient is:", result)