### Installation Instructions

1. Download & Install [Node V8.11.1](https://nodejs.org/en/download/releases/) for NPM.
2. Clone repo with `git clone https://github.com/UnosquareBelfast/admin-web.git`
3. Run `npm install` to get the dependencies for the project.
6. Run `npm start` to start the web-server.

### About this project

This project is:

- Built from sratch.
- Compiled, bundled and ran using Babel, Webpack and Webpack Dev Server. 
- Styled using Styled Components. 
- Manages state using Redux.
- Is set up to utilise Chrome's Redux dev tools.
- Consists of only functional components, therefore reacts hooks are used for managing state and rerendering. 
- React Redux selectors and dispatch hooks are used to handle/update its store.
- localstorage is used to persist current page and flagged list items.
- Pagination is used instead and for this demo, pages only go upto 8.
- Jest and enzyme was installed into this project, but unfortunately, there was no time to implement these to a level that I would be happy with.