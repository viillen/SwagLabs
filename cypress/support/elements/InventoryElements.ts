const Texts = {
    logo: '.app_logo',
    title: '[data-test="title"]',
    TermsOfService: '[data-test="footer-copy"]'
}

const Product1 = {
    titleProduct: '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]',
    descriptionProduct: '[data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]',
    priceProduct: '[data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]',
    imageProduct: '[data-test="inventory-item-sauce-labs-backpack-img"]',
    buttonAddToCart: '[data-test="add-to-cart-sauce-labs-backpack"]'

}

const ProductInf = {
    itemName: '[data-test="inventory-item-name"]',
    itemDesc: '[data-test="inventory-item-desc"]',
    itemPrice: '[data-test="inventory-item-price"]',
    buttonCart: '[data-test="add-to-cart"]',
    buttonBackProducts: '[data-test="back-to-products"]',
    img: '[data-test="item-sauce-labs-backpack-img"]'
}

const ContainerNamePrice = {
    ContainerNP: '.select_container'
}

const Social = {

    twitter: '[data-test="social-twitter"]',
    facebook: '[data-test="social-facebook"]',
    linkedin: '[data-test="social-linkedin"]'
}

const Menu = {
    menuButton: '#react-burger-menu-btn', 
    allItems: '[data-test="inventory-sidebar-link"]',
    about: '[data-test="about-sidebar-link"]',
    logout: '[data-test="logout-sidebar-link"]',
    resetAppState: '[data-test="reset-sidebar-link"]'
}
export {Texts, Product1, ProductInf, ContainerNamePrice, Social, Menu }