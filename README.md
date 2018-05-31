# React-Components-Library-Starter-Kit

Boilerplate to building a React components library for NPM

## How to start ?

#### Setup you development environement

```bash
git clone git@github.com:hqro/React-Components-Library-Starter-Kit.git
cd React-Components-Library-Starter-Kit
yarn install
```

#### Rename project and initialize your git repository

```bash
cd ..
mv React-Components-Library-Starter-Kit my-components-library
cd my-components-library
rm -Rvf .git
git init
git remote add ...
```

Don't forget to edit the `package.json`. Add your dependencies and customize `name`, `description` and `author`.

## How to use ?

```bash
yarn start
```

`webpack` now wath for file changes in `src/components` folder. Each time you add a new component, it will compile your source files again. Don't forget to export your components on `index.js` file.

## How to test ?

```bash
yarn link
```

This command is run in the package folder you’d like to link. Then initialize a new react project with `create-react-app` for example

```bash
cd ..
create-react-app Demo
cd Demo
yarn link my-components-library
```

Then go to you React project and try to import your components.

```javascript
import React from 'react'
import { Button } from 'my-components-library'

const App = () => (
  <div className="App">
    <Button label="Awesome button" onClick={() => console.log('click')} />
  </div>
)
```

## How to build for production ?

```bash
yarn build
yarn login
yarn publish --access=public
```

You need a NPM account to publish your package
