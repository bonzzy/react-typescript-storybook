import * as React from "react";

export class MyTestComponent extends React.Component {
    render() {
        return (
            <button onClick={() => {console.log("Clicked")}}>Test</button>
        );
    }
}
