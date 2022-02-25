const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb =>{
    fs.readFile(p, (err,data)=>{
        if(err){
            cb([]);
        } else{
            cb(JSON.parse(data));
        }
    })
}

module.exports = class Product{
    constructor(title, description, imageUrl, price){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.id = Math.random().toString();
    }

    save(){
        getProductsFromFile(products =>{
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (error) =>{
                if (error)
                console.log(error)
            })
        })
    }

    static fetchAll(cb){
        getProductsFromFile(cb)
    }

    static findById(id, cb){
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        })

    }

}