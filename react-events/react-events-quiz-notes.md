# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?

an action caused by user interaction with the app
ex: onClick - an event triggered when an element is clicked

- What is an "event handler"? Which component declares the handler?

an event handler is a function that executes a specified set of coded instructions when an event occurs

the parent component that defines the function to execute the code is the one that declares the handler

- How do you pass an event handler to a React component?

define the event handler function in the component, then add it to the properties of the component

define, then pass it
its passed not called ex: onClick={handleClick} not {handleClick()}

- What is the naming convention for event handlers?

camelCase capitalization with the handle prefix for the function
handle + Name (normally the event type)
ex: handleClick

- What is an "event handler prop"? Which component declares the prop?

it tells react to call the function when the user causes a specific event

the child component

- What are some custom event handler props a component may wish to define?

onCustomClick, onCustomHover, onDialogOpen or Close

- What is the naming convention for custom event handler props?

event handler props should begin with on and the next word capitalized (camelCase)
on + Name
ex: onClick

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
