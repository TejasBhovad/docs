# import data set
df=read.csv("regression.csv")

install.packages('caTools')
install.packages('ggplot2')
library(ggplot2)
library(caTools)

set.seed(123)
split=sample.split(df$scores,SplitRatio= 2/3)
train_set=subset(df,split==TRUE)
test_set=subset(df,split==FALSE)

# fitting simple regression
regressor=lm(formula = scores~hours, data = train_set)

# predicting test set result
y_pred = predict(regressor, new_data=test_set)

# visualizing training set result
ggplot() + 
  geom_point(aes(x=train_set$hours,y=train_set$scores),colour='red') +
  geom_line(aes(x=train_set$hours,y=predict(regressor,new_data=train_set)),colour='blue') +
  ggtitle('Scores vs Experience (training set)') +
  xlab('Hours') +
  ylab('Scores')

# visualizing test set result
ggplot() + 
  geom_point(aes(x=test_set$hours,y=test_set$scores),colour='red') +
  geom_line(aes(x=train_set$hours,y=predict(regressor,new_data=train_set)),colour='blue') +
  ggtitle('Scores vs Experience (training set)') +
  xlab('Hours') +
  ylab('Scores')

# prediction on input
relation <- lm(df$scores~df$hours)
a <- data.frame(hours = 10)
result <- predict(regressor,a)
print(result)