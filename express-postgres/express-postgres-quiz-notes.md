# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

it allows you to connect and interact with a PostgreSQL database

- How do you tell `pg` which database to connect to?

the database name at the end of the connection string:

connectionString: 'postgres://dev:dev@localhost/pagila',

- How do you send SQL to PostgreSQL from your Express server?

you assign the sql statement to a variable

- How do you access the rows that get returned from the SQL query?

assign the rows array to a variable

- What must you always remember to put around your asynchronous route handlers? Why?

try - catch block

to ensure the client always gets a response, if if its an error

- What is a SQL Injection Attack and how do you avoid it in `pg`?

an attack using malicious SQL statements to access and/or transform the database

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
