import React, { useState } from "react";

export const App1 = () => {
    const [count, setCount] = useState(4);

    const decrementCount = () => {
        setCount(count - 1);
    };

    const incrementCount = () => {
        setCount(count + 1);
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
