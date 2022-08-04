const homePage = require("../pages/home.page");
const loginPage = require("../pages/login.page");
const myStorePage = require("../pages/mystore.page");
const newproductPage = require("../pages/newproduct.page");
const productsPage = require("../pages/products.page");
const urlLoja = 'http://lojaebac.ebaconline.art.br'
const userLogin = 'gerente'
const password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Cadastrar produto', () => {
    it('Deve realizar cadastro de produto com sucesso', async() => {
        
        await homePage.goToLoginStore();
        await loginPage.fillFieldSiteAdress(urlLoja);
        await loginPage.continueWithStore();
        await loginPage.addLogin(userLogin, password);
        await loginPage.goToYourPasssword(password);
        await myStorePage.goToProducts();
        await productsPage.goToAddProdutc();
        await productsPage.goToSimplePhysycal();
        await newproductPage.fillFieldProductTitle('Produto Ebac');
        await newproductPage.addDescriptionProduct('Cadastro de produto para validar fluxo de testes EBAC');
        await newproductPage.addPrice('9000', '900');
        await newproductPage.publish();
        await productsPage.validateRegisterProduct();

    });
});