class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
     <style>
        div {
          background: #e1e1e1;
        }
     </style>
     <div><slot></slot></div> 
    `;
  }
}

customElements.define("custom-counter", Counter);
