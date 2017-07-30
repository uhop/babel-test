class HelloWorld extends HTMLElement {
  connectedCallback () {
    this.appendChild(document.createTextNode('Hello, world!'));
  }
}
customElements.define('hello-world', HelloWorld);
