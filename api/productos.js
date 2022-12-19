class ProductosApi {
    constructor() {
        this.products = []
        // this.id = 0
    }

    listar(id) {
        const obj = this.products.find((product) => product.id === id)
        if (obj) {
            return obj;
        } else {
            return ERROR;
        }
    }

    listarAll() {
        return this.products;        
    }

    guardar(prod) {
        const arrayOfIds = this.products.map((product) => product.id)
        const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
        const id = maxId + 1;
        const newObj = { id, ...prod };
        this.products.push(newObj);
        return newObj;
    }

    actualizar(prod, id) {
        const foundObj = this.products.find((product) => product.id === id);
        if (foundObj) {
            const filteredProducts = this.products.filter(
                (product) => product.id !== id
            );

            const newObj = {id, ...prod};
            this.products = [...filteredProducts, newObj];

        } else {
            return ERROR;
        }
        return true;
    }

    borrar(id) {
        
    }
}

module.exports = ProductosApi
