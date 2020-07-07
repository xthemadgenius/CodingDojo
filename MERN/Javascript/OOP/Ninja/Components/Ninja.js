/**
 * Functional component
 * @param {Object} props
 * @param {Object} parentNode 
 */

const Ninja = (props, parentNode) => {
    const container = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = `Name: ${props.ninja.fullName()}`;
    container.appendChild(title);

    const health = document.createElement("h3");
    health.innerText = `Health: ${props.ninja.health}`;
    container.appendChild(health);

    const power = document.createElement("h4");
    power.innerText = `Power: ${props.ninja.power}`;
    container.appendChild(power);

    const speed = document.createElement("h4");
    speed.innerText = `Speed: ${props.ninja.speed}`;
    container.appendChild(speed);

    container.appendChild(document.createElement("hr"));
    parentNode.appendChild(container);
};

export default Ninja;
