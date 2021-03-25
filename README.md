
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
