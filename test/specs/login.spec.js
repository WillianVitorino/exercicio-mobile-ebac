const formsPage = require("../pages/forms.page");
const homePage = require("../pages/home.page");

describe('Acessar painel de login', () => {
    it('Deve preencher os campos do formulário', async() => {
        const valueOne = 'This app is awesome';
        const valueTwo = 'webdriver.io is awesome';
        const valueThree = 'Appium is awesome';

        await homePage.goToForms();
        await formsPage.fillTypeSomething('Willian Vitorino Ebac');
        await formsPage.fillYouHaveTyped('Willian Vitorino Ebac');
        await formsPage.clickSwitch();
        await formsPage.selectItemDropdown(valueOne);
        await formsPage.clickActive();
        await setTimeout(() => {
            
        }, 5000);     
    });
});