const productsViewPage = require('../pages/productsView.page.js')

describe('Product Flow', () => {

    it('should buy a product', async () => {
        let name = 'Eos V-Neck Hoodie'
        let searchName = 'testea'
        await productsViewPage.waitProduct(name)
        await productsViewPage.search()
        await productsViewPage.searchBy(`${searchName}\n`)
        await productsViewPage.productSelect()
        await productsViewPage.productAdd()
        await productsViewPage.goToCArt()
        expect (await productsViewPage.waitTotal()).toExist()
    
    })

    it('should list products', async () => {
        expect(await productsViewPage.product('camisa Ciclop')).toExist()
        expect(await productsViewPage.productList()).toBeElementsArrayOfSize(10)
    })

})