class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Delgado Gonzalez Daniela Karina IC-51M.`;
    }
}
customElements.define("mi-footer", MiFooter);