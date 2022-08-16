import React, { useState } from "react";

export const App1 = () => {
    const [count, setCount] = useState(4);

    const decrementCount = () => {
        setCount((prevCount) => prevCount - 1);
        console.log("decrement")
    };
    
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
        console.log("increment")
    };

    return (
        <>
            <div className="pt-5">App1</div>
            <hr />
            <div className="container">
                <div className="row  justify-content-center">
                    <button onClick={decrementCount} className="col-sm-1">
                        -
                    </button>
                    <h3 className="col-sm-1">{count}</h3>
                    <button onClick={incrementCount} className="col-sm-1">
                        +
                    </button>
                </div>
            </div>
        </>
    );
};
