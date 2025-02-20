# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?

in a SPA, the url doesn't change and 'breaks the back button

the user expects to view the current page in the url to indicate the page, but also to have the ability to bookmark it

- What NPM package can be used to make navigating a React app behave as users expect?

react-router-dom

- Which React Router component(s) can be used to set up your app's navigation?

browser router, routes, route

- How does React Router match the browser URL to one of your app's React components?

it compares the url to each path prop in the component to display
the route component associates a specific path, so when the url matches a path, it renders the corresponding component

- What is the purpose of React Router's `Outlet` component?

its basically a placeholder for rendering nested elements or child routes

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?

useParams hook

- What React Router hook is used to navigate programmatically?

useNavigate

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
