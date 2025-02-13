# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?

when you create the list dynamically because the data is not known until it runs.
ex: database or api

- Why is it important for React components to be data-driven?

in order to track or maintain the state

- What `Array` method is commonly used to create a list of React components?

the map() array method

- Why do components in a list need to have unique keys?

since it is data driven, as the elements inside an array may change, the key helps maintain the connection between each unique key and element relationship or corresponding match

it also helps us identify the parent/child/ancestry

- What is the best value to use as a "key" prop when rendering lists?

a unique identifier that can separate a list item from its siblings
most commonly used is a unique ID associated with each list item

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
