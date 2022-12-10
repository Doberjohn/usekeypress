# @johnfanidis/usekeypress

[![npm (scoped)](https://img.shields.io/npm/v/@johnfanidis/usekeypress.svg)](https://www.npmjs.com/package/@johnfanidis/usekeypress)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@johnfanidis/usekeypress.svg)](https://www.npmjs.com/package/@johnfanidis/usekeypress)

React keypress hook.

## Install

```
$ npm install @johnfanidis/usekeypress
```

## Usage

```js
import useKeyPress from "@johnfanidis/usekeypress";

const MyComponent = () => {
    
  // Sets up the hook listening for the 'S' key
    const pressed_V_Key = useKeyPress(83, true);

    useEffect(() => {
        if (pressed_S_Key) {
            // do something when 'S' key is pressed
        }
    }, [pressed_S_Key]);
    
  return null;
}
```