import React, { useEffect, useState } from "react";

export const App1 = () => {
    const [resourceType, setResourceType] = useState("Posts");
    useEffect(() => {
        console.log("in useEffect")
        // the above will be printed only if the resourceType is changes,
        // else it will not be printe
    },[resourceType]);
    return (
        <>
            <div className="pt-5">App1</div>
            <hr />
            <div>
                <button onClick={() => setResourceType("Users")}>Users</button>
                <button onClick={() => setResourceType("Posts")}>Posts</button>
                <button onClick={() => setResourceType("Comments")}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    );
};
