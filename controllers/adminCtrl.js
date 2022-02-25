const Product = require('../models/product');


exports.getAddProduct = (req, res, next)=>{
    
    //Render template and adding variables that i can use in the template
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
    })
}



exports.postAddProduct = (req,res,next) =>{
    const title = req.body.title;    
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

    const product = new Product(title, description, imageUrl, price)
    //Push a written value into the products array
    product.save();
    //Redirect to the shop page
    res.redirect('/products');
    
}

exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products =>{
    //Render template and adding variables that i can use in the template
    res.render('admin/products', {
        prods:products,
        pageTitle: 'Products', 
        path: '/admin/products', 
    })
})
}

