class FormsPage {

    get fieldTypeSomething() {
        return $('~text-input');
    }

    get fieldYouHaveTyped() {
        return $('~input-text-result');
    }

    get buttonSwitch () {
        return $('~switch');
    }

    get selectDropdown () {
        return $('~Dropdown');
    }

    get buttonActive() {
        return $('~button-Active');
    }

    get messageToast(){
        return $('id:message')
    }

    async fillTypeSomething (text) {
        await this.fieldTypeSomething.setValue(text);
    }

    async fillYouHaveTyped(text) {
        await expect(this.fieldYouHaveTyped).toHaveText(text);
    }

    async clickSwitch() {
        await this.buttonSwitch.click();
    }

    async selectItemDropdown(value) {
        await this.selectDropdown.click();
        await $(`//android.widget.ListView/*[@text='${value}']`).click();
    }
    async clickActive() {
        await this.buttonActive.click();
    }
    async assertMessageToast(){
        await this.messageToast.isDisplayed();
    }
}

module.exports = new FormsPage;