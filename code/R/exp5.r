# Load the "mtcars" dataset
data(mtcars)


# Step 1: Create a subset of the dataset with the desired variables.
input <- mtcars[, c("mpg", "disp", "hp", "wt")]


# Step 2: Create the relationship model.
model <- lm(mpg ~ disp + hp + wt, data = input)


# Step 3: Display the model summary.
summary(model)


# Step 4: Obtain and display the coefficients.
a <- coef(model)[1]
Xdisp <- coef(model)[2]
Xhp <- coef(model)[3]
Xwt <- coef(model)[4]


cat("# # # # The Coefficient Values # # # ", "\n")
print(a)
print(Xdisp)
print(Xhp)
print(Xwt)


# Step 5: Create the regression equation.
cat("Regression Equation: Y = ", a, " + ", Xdisp, "* x1 + ", Xhp, "* x2 + ", Xwt, "* x3", "\n")
