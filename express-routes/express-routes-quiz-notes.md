# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

Create - POST
Read - GET
Update - PUT
Delete - DELETE

no

- What is Express middleware?

functions that access the req and res objects to execute them sequentially to perform tasks

commonly used as next

- What is Express middleware useful for?

make changes to the req and res objects, then end the req-res cycle

- How do you mount a middleware with an Express application?

call a special function, like use or get, which adds the function to the middleware array

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

req (request object), res (response object), next

- How do you specify and retrieve route parameters?

They are specified in the route path by
prefixing the identifier name with a : (colon)

and added to the request as an object in the request.params key

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
