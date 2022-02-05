import React, { useState } from "react";

// export const Counter = () => {
//     const [count, setCount] = useState(0);
//     console.log(count);

//     return (
//         <div>
//             <h3>{count}</h3>
//             <button
//                 onClick={() => {
//                     setCount(count + 1);
//                 }}
//             >
//                 Click
//             </button>
//         </div>
//     )
// }

export class Counter extends React.Component {
    state = {
        count: 0,
        name: "Alex",
    };

    updateCount = () => {
        console.log("before: ", this.state.count);
        this.setState({ count: this.state.count + 1 })
        console.log("after: ", this.state.count);
    };

    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <h3>{this.state.name}</h3>
                <button
                    onClick={this.updateCount}
                >
                    Click
                </button>
            </div>
        )
    }
}
