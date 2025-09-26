const _product = {
    id: 1,
    title: 'Test Product',
    price: '1200$',
    img: '',
}

function generateProducts(length = 5) {
    const list = [];
    for (let index = 0; index < length; index++) {
        list.push({
            ..._product,
            id: index + 1
        });
    }
    return list;
}

export const products_mock = generateProducts(1);