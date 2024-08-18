class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  minus() {
    let value = parseInt(this.getAttribute("value"), 10) || 0;
    this.setAttribute("value", value - 1);
    this.render();
  }

  plus() {
    let value = parseInt(this.getAttribute("value"), 10) || 0;
    this.setAttribute("value", value + 1);
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          button {
            font-size: 20px;
            margin: 5px;
          }
        </style>
        <div>
          <button id="minus">-</button>
          ${this.getAttribute("value") || 0}
          <button id="plus">+</button>
        </div>
      `;

    // Attach event listeners
    this.shadowRoot
      .getElementById("minus")
      .addEventListener("click", () => this.minus());
    this.shadowRoot
      .getElementById("plus")
      .addEventListener("click", () => this.plus());
  }
}

customElements.define("custom-counter", Counter);
