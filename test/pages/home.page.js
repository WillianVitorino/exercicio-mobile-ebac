class HomePage {

    get buttonForms() {
        return $('~Forms');
    }

    async goToForms() {
        await this.buttonForms.click();
    }
}

module.exports = new HomePage();
