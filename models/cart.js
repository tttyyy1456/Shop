const fs = require('fs');
const p = require('path');
const rootDir = require('../utils/path');

const p = path.join(rootDir, 'data', 'cart.json');


module.exports = class Cart{
    static addProduct(){
        fs.readFile(p, (err, data) =>{
            let cart = {products:[], totalPrice: 0}
                if(!err){
                    cart = JSON.parse(data)
                }
                
                    
                
        })
    }
}