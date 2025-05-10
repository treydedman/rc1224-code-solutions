# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

to allow data to be managed by one component but easily shared with multiple components

- What values can be stored in context?

global values

- How do you create context and make it available to the components?

createContext function then access it with a Context.Provider and useContext hook

- How do you access the context values?

Context.Provider then useContext hook

- When would you use context? (in addition to the best answer: "rarely")

when some data needs to be accessible by many components at different nesting levels

rarely when data is required within a very limited scope or a local state

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
