import React from "react";

function Home(props) {
    return <div>My name is {props.name} and i am a {props.role}
        {props.children}
    </div>
}

export default Home