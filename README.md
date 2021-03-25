[![npm version](http://img.shields.io/npm/v/react-use-outside-click.svg?style=flat-square)](https://npmjs.org/package/react-use-outside-click "View this project on npm")
[![npm version](http://img.shields.io/npm/dm/react-use-outside-click.svg?style=flat-square)](https://npmjs.org/package/react-use-outside-click "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-use-outside-click.svg?style=flat-square)](https://npmjs.org/package/react-use-outside-click "View this project on npm")

# Installation

```
yarn add react-use-outside-click
```

# It's Easy

```
import { useOutsideClick } from 'react-use-outside-click'

useOutsideClick("my-excluded-css-class", () => {
  alert("OUTSIDE CLICKED")
})
```

# Example

```
import React, {useState} from 'react';
import { useOutsideClick } from "react-use-outside-click";

const ExampleComponent = () => {
    const [popoverIsVisible, setPopoverIsVisible] = useState(false);

    useOutsideClick("my-popover", () => {
        setPopoverIsVisible(false);
    })

    const togglePopover = () => {
        setPopoverIsVisible(!popoverIsVisible);
    }

    return (
        <div>
            <button type="button" onClick={togglePopover}>Toggle Popover</button>
            <div className="my-popover">
                Popover is Here
            </div>
        </div>
    );
};

export default ExampleComponent;
```
