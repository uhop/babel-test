// plain version
// class HelloWorld extends HTMLElement {
//   connectedCallback () {
//     this.appendChild(document.createTextNode('Hello, world!'));
//   }
// }

// dcl6 version
const HelloWorld = dcl(HTMLElement, Base => class extends Base {
  connectedCallback () {
    this.appendChild(document.createTextNode('Hello, world!'));
  }
});

customElements.define('hello-world', HelloWorld);
