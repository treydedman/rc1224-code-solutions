# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React component?

an independent reusable block of code that is used to build a larger more complex program.

it can be as siple as HTML appended to the DOM structure or something bigger that provides JavaScript functionality

- How do you define a component in React?

its defined as a JavaScript function with the use of Pascal capitalization
exported as its defined in the file and imported into the larger program

its functionality first with added markup

export function Header() {
return (
code block
)
}

- How is a component "rendered" (made visible on the browser page)?

Render phase: the components are placed into the desired HTML structure appending them to a virtual DOM, then re-rendered when a component's state or props change. It creates a new virtual DOM, compares it to the previous DOM structure, updates only the affected parts, and produces the actual DOM.

Commit phase: the browser takes the DOM and displays the component on the screen.

in this exercise: the ReactDOM library uses JSX to render the markup (which closely resembles HTML) to a DOM structure in the memory and the browser uses this to display the UI on the screen

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
