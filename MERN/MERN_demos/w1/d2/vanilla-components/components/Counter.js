class Counter {
  /**
   * Class based component to represents our counter component which will display a button and some text that shows how many times it was clicked
   * @param {Object} props - containing the properties for the new Counter, such as button text, etc.
   * @param {Object} parentNode - HTML node that the counter component will be appended into
   */
  constructor(props, parentNode) {
    this.count = 0;

    // create an div HTML node, which we can now interact with as if we selected it form the HTML document itself
    const container = document.createElement("div");

    const heading = document.createElement("h2");
    heading.innerText = props.headingText;
    container.appendChild(heading); // append heading into the container div

    const paragraph = document.createElement("p");
    this.updateParagraph(paragraph);
    container.appendChild(paragraph);

    const btn = document.createElement("button");
    btn.innerText = props.buttonText;
    btn.addEventListener("click", (event) => {
      this.count++;
      this.updateParagraph(paragraph);
    });
    container.appendChild(btn);

    parentNode.appendChild(container);
  }

  updateParagraph(paragraphNode) {
    paragraphNode.innerText = `The button has been clicked ${this.count} times.`;
  }
}

export default Counter;
