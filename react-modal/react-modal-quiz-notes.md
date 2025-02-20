# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

a popup window that displays information to the user
it create a modal or non-modal dialog box on a webpage

- How do you show and hide a modal dialog?

an event handler toggles the state - using a boolean

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?

passing props or useRef method

the dialog is a custom component and the current state is null so it must be rendered before referencing it

can't call the function inside

- How do you call the dialog element's functions in React?

access the DOM element using a ref (useRef), then call showModal() or close()
modal.current. function

- How can you render nested components or JSX elements in React?

place the component tags directly inside the parent component's JSX structure

using the children prop

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
