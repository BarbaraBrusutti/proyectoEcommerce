const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: '',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    { 
        id: '2',
        name: 'Samgung',
        price: 2000,
        category: ' tablet',
        img: '',
        stock: 12,
        description: ' Descripcion de samsung'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout( ()=> {
            resolve(products)
        }, 500)
    })
}

export default asyncMock
