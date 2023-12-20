drop table words;
-- Step 1: Create the table
create table words (
    word varchar(10)
);

-- Step 2: Create the trigger
create or replace trigger trim_word
before insert on words
for each row
begin
  :new.word := trim(:new.word);  
end;
/

-- Step 3: Insert data into the table
insert into words values (' Hello ');

-- Step 4: Query the data
select word, length(word) from words;
