Install
-------
```sh
npm install --save calendar-th-primefaces
```

Usage
-----

```js
import React, { useState } from "react";
import { Calendar } from 'calendar-th-primefaces/Calendar';

export const UseCalendar = (props) => {
    const [myCalendar, setMyCalendar] = useState({});
    return (
        <Calendar
            id="myNameCalendar"
            showIcon
            showTime={true}
            showButtonBar
            value={myCalendar}
            onChange={(e) => setMyCalendar(e.value)}
            baseZIndex={1200}
        />
    );
};

```
[comment]: # npm version patch
[comment]: # npm publish