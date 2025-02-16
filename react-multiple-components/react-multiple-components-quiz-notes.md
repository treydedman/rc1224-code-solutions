# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?

start from a UI mockup
-create static versions to view the components
-verify it works as it should before implementing it dynamically

determine the UI state that will be in the components
-state can only flow from parent to child, as a prop
-add calls to useState
-verify the components work by hardcoding the value to implement changes

determine the events that will modify the state
-event handler props
-the props are declared in the child components using the prefix "on"
-parents pass the handler functions to the props and use the prefix "handle"
-declare the props in the child components and call the props
-implement the handler functions in the parent components and pass them to the props
verify the components update correctly in response to events

- How does data flow in React?

one direction - parent to child

- How can children components modify state in their parents?

by receiving a prop from the parent, updates the state by using setState

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
