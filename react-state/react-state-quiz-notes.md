# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

special functions that 'hook' specific states and/or other features and allow you to specified things from within the component function.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

Only call hooks at the top level
Only call hooks from react functions

- What is the purpose of state in React?

its a way to manage the dynamic data within a component so it persists throughout the renderings

- Why can't we just maintain state in a local variable?

local variables have a limited scope, they don't persist across renderings, in other words, they get reset.

- What two actions happen when you call a `state setter` function?

1 - updates the components state with the value
2 - modifies the value on re-render

- When does the local `state variable` get updated with the new value?

when the component is called, although its compartmentalized, or isolated to that specific component

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
