# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

a column that points to, links to, or references the primary key of another table

- How do you join two SQL tables? (Provide at least two syntaxes.)

select \* or "specific column(s)"
from "table"
join "table" using "column";

select "table1"."column1", "table1"."column2", "table2"."column3"
from "table1"
inner join "table2" on "table1"."common-column" = "table2"."common-column";

- How do you temporarily rename columns or tables in a SQL statement?

using alias column names with the as keyword

- How do you create a one-to-many relationship between two tables?

a foreign key in one table pointing to a primary key in another table
then use the join keyword to join tables

- How do you create a many-to-many relationship between two tables?

a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table
join a third table using a foreign key on the previous table

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
