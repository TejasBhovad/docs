# Exp 1: plotting basic graphs by using dummy data

# defining vectors of columns, we wish to add in the dataframe
name <- c("Morty", "Jimmy", "Arnold", "Josh", "Logan")
age <- c(2, 25, 32, 43, 19)

# adding defined vectors as columns to dataframe named df
df <- data.frame(name, age)
print(df)

# plotting the distribution of the created dataframe
barplot(df$age, main ="Age Distribution",xlab="name",ylab="Age", col="purple", pch=16)