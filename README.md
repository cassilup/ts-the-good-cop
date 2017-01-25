## Playground for TypeScript: The Good Cop

### 1. Install dependencies

```sh
yarn
```

Run `npm run dev`.

Check out `http://localhost:4001`.

### 2. Bring in React

```sh
yarn add react react-dom
```

Add this to `index.tsx`:
```js
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    Hello from React!
  </div>,
  document.getElementById("root")
);
```

Re-run `npm run dev`.

Watch the errors.

Also check out the console for `http://localhost:4001`.

### 3. Bring in Types

```sh
yarn add --dev @types/react @types/react-dom
```

Re-run `npm run dev`.

Check out `http://localhost:4001`.

**Enjoy! :)**
