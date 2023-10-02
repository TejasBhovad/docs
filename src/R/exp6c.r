library(dplyr)
set.seed(1)
iris %>%
  group_by(Species) %>%
  sample_n(.,3)
