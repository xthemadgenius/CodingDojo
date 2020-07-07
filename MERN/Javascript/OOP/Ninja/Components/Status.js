import Ninja from "./Ninja.js";

const Status = (props, parentNode) => {
    const container = document.createElement("div");

    const heading = document.createElement("h2");
    heading.innerText = props.headingText;
    container.appendChild(heading);

    for (let i = 0; i < props.ninjas.length; i++){
        Ninja({
            ninja: props.ninjas[i],
        }, container);
    };
    parentNode.appendChild(container)
}

export default Status;