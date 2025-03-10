# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

fetch()

- What two things need to be done to properly handle HTTP request errors? Why?

1: check the response status - if (!res.ok)
2: use the try-catch block for error handling

this is done to provide the user feedback

- How can `useEffect` be used to load data for a component?

call an async fetch function using fetch inside useEffect
this is used to fetch and load data when needed and updates when necessary

- How do you use `useEffect` to load component data just once when the component mounts?

an empty dependency array - []

- How do you use `useEffect` to load component data every time the data key changes?

pass the key as a dependency in the dependency array - [userId]

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

react query, vercel swr, redux-rtk query, graphql

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
