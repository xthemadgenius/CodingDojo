/**
 * Functional component
 * @param {Object} props
 * @param {Object} parentNode 
 */

const Ninja = (props, parentNode) => {
    const container = document.createElement("div");
    
    const title = document.createElement("h1");
    title.innerText = `Name: ${props.player.fullName()}`;
    container.appendChild(title);

    const health = document.createElement("h2");
    title.innerText = `Health: ${props.player.health}`;
    container.appendChild(health);

    const power = document.createElement("h3");
    title.innerText = `Power: ${props.player.power}`;
    container.appendChild(power);

    const speed = document.createElement("h4");
    title.innerText = `Speed: ${props.player.speed}`;
    container.appendChild(speed);

    container.appendChild(document.createElement("hr"));
    parentNode.appendChild(container);
};

export default Ninja;
