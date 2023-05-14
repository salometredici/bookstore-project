const products = [
    {
        id: '1',
        title: 'Fairy Tale',
        author: 'Stephen King',
        price: 16611,
        stock: 3,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/0439-1/%7B3BFCDB8C-F164-4718-8DF3-577B30C0E86F%7DIMG400.JPG',
        description: 'Fairy Tale by Stephen King (2022)'
    },
    {
        id: '2',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        price: 4588,
        stock: 10,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/8010-1/FFC/3A1/A3/%7BFFC3A1A3-A6D7-428E-9424-6DC3156C132C%7DImg400.jpg',
        description: 'Jane Eyre by Charlotte Brontë (1847)'
    },
    {
        id: '3',
        title: 'The Black Cat',
        author: 'Edgar Allan Poe',
        price: 2193,
        stock: 15,
        category: 'fiction',
        img: 'https://img1.od-cdn.com/ImageType-400/8010-1/279/5FD/D3/%7B2795FDD3-BE39-4A4E-98B5-38CEE58DE4ED%7DImg400.jpg',
        description: 'The Black Cat by Edgar Allan Poe (1843)'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
}