# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

when it is added or inserted into the DOM - when it becomes visible

- What is a React Effect?

a side effect within a component - the component does something after render

- When should you use an Effect and when should you not use an Effect?

should be used when you need to synchronize a component

not used for logic based on a components state based on changes to the state

- When do Effects run?

after the component renders

- What function is used to declare an Effect?

useEffect function imported from React

- What are Effect dependencies and how do you declare them?

the dependencies are what the useEffect depends upon, so if the dependency values change, the effect will update

they are declared by listing them as an array in the second argument of the hook

- Why would you want to clean up from an Effect?

maintain data integrity, prevent memory leaks

- How do you clean up from an Effect?

return function that is basically a clean-up function

- When does the cleanup function run?

every time the function runs and when it unmounts

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
