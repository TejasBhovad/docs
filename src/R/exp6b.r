# systematic sampling
install.packages("TeachingSampling" )
library (TeachingSampling)
P <- c("Mon-8", "Tues-4", "Wed-4", "Thurs-6", "Fri-7", "Sat-45", "Sun-34", "Mon-21", "Tues-11", "Wed-34", "Thurs-16", "Fri-10", "Sat-17", "Sun-
19" )
#systematic sample from a population of 14 with every 2nd included from the populaion P
systematic_sample <- S.SY (14, 2)
systematic_sample
P[systematic_sample]