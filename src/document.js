class Doc extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connected');
  }

  disconnectedCallback(){
    console.log('disconnected');
  }

  render(newHtml){
    this.innerHTML = newHtml;
  }

  static register(name, obj){
    window.customElements.define(name, obj)
  }
}

export default Doc
