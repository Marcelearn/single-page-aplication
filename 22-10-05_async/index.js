const inventory = {
    laptop: {
        count: 32,
        price: 399
    },
    speaker: {
        count: 65,
        price: 34.99
    },
    monitor: {
        count: 12,
        price: 52.95
    }
}

function checkInventory(product) {
    return new Promise((resolve, reject) => {
        if(inventory[product].count > 0) {
            resolve("Produkt vorhanden")
        } else {
            reject("Produkt ausverkauft")
        }
    })
}

function processPayment(product, balance) {
    return new Promise((resolve, reject) => {
        if(balance >= inventory[product].price) {
            resolve("Bezahlung erfolgreich")
        } else {
            reject("Nicht genug Guthaben")
        }
    })
}

function shipOrder() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Produkt verschickt"), 2000)
    })
}
async function order(product, balance) {
    try {
        const productInventory = await checkInventory(product);
        console.log(productInventory);
        const productPayment = await processPayment(product, balance);
        console.log(productPayment);
        const productShipment = await shipOrder(product);
        console.log(productShipment);
    } catch (err) {
        console.log(err)
    }
}
order(speaker, 400);