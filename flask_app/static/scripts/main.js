document.querySelector('#send-click').addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'btnClick',
        'btnAction': 'Primary CTA'
    });
})


document.querySelector('#send-purchase').addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null }); 
    window.dataLayer.push({
    event: "purchase",
    ecommerce: {
        transaction_id: "T12345",
        affiliation: "Online Store",
        value: "59.89",
        tax: "4.90",
        shipping: "5.99",
        currency: "EUR",
        coupon: "SUMMER_SALE",
        items: [{
            item_name: "Triblend Android T-Shirt",
            item_id: "12345",
            price: "15.25",
            item_brand: "Google",
            item_category: "Apparel",
            item_variant: "Gray",
            quantity: 1
        }, {
            item_name: "Donut Friday Scented T-Shirt",
            item_id: "67890",
            price: 33.75,
            item_brand: "Google",
            item_category: "Apparel",
            item_variant: "Black",
            quantity: 1
        }]
    }
    });
})