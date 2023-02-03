
const fs = require('fs');


//Clase para productos
class Product{
    constructor(title, description, price, thumbnail, code, stock ){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


//Clase Product Manager
class ProductManager{
    constructor(path){
        this.products = [];
        this.path = path;
    }

    //Metodo addProduct
    addProduct = (product) =>{
        //Valido los datos del objeto
        if(!product.title || !product.description || !product.price || !product.thumbnail|| !product.code || !product.stock){
            return console.log('Todos los campos son obligatorios');
        }else{
            //Valido que el codigo sea diferente
            if(this.products.find(element => element.code === product.code)){
                console.log("El codigo esta repetido");
            }else{
                //Creo un id autoincrementable
                let id = 0;
                if(this.products.length === 0){
                    id = 1;
                }else {
                    id = this.products.length + 1;
                }
                // Agrego el objeto con el id en el array products
                this.products.push({id,...product});
            }
            console.log(this.products);
        }
    }
    //Metodo getProduct para obtener todos los productos
    getProducts(){
        return this.products;
    }
    //Metodo getProductById para obtener los productos por su id
    getProductById(id){
        let resultado = this.products.find(product => product.id === id);
        if(resultado === undefined){
            return "Not found";
        }else{
            return resultado;
        }
    }
}

//Instancia de la clase Product

const product1 = new Product('Quilmes', 'Lata de 450cc', 250, './img-quilmes', 2, 200);
const product2 = new Product('Stella Atois', 'Lata de 450cc', 350, './img-stella', 5, 300);
//console.log(product1);
//Instancia de la clase ProductManager
const adminProductos = new ProductManager();

//Se agregan productos 
adminProductos.addProduct(product1);
adminProductos.addProduct(product2);

//Busco los productos por id
console.log(adminProductos.getProductById(1));
console.log(adminProductos.getProductById(3));

//Imprimo por consola todos los productos
console.log(adminProductos.getProducts());





