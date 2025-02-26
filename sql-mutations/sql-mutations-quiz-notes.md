# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

Create, Read, Update, and Delete

- How do you add a row to a SQL table?

insert statement and declare which table and the values for the row

- How do you add multiple rows to a SQL table at once?

specify more than one tuple of values (in parenthesis) separated by commas

- How do you update rows in a database table?

use the update statement to specify the table,
set the updated value(s)
then use where for the specific row

- How do you delete rows from a database table?

use the delete statement,
from the specified table,
then use where for a specific row

- Why is it important to include a `where` clause in your `update` and `delete` statements?

you do not want to update or delete an entire table
because it cannot be undone

- How do you accidentally delete or update all rows in a table?

you do not specify the row using the where clause

- How do you get back the modified row without a separate `select` statement?

returning clause

- Why did you get an error when trying to delete certain films?

it had a foreign key constraint "film_actor_film_id_fkey" because the "castMembers" table
shares a foreign key to films

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
