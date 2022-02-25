const Product = require('../models/product');



exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products =>{
    //Render template and adding variables that i can use in the template
      res.render('shop/product-list', {
        prods: products, 
        pageTitle:'Products', 
        path: '/products', 
    })  
    }); 
}

exports.getProduct = (req, res, next) =>{
  const productId = req.params.productId;
  Product.findById(productId, prod =>{
    res.render('shop/product-detail', {
      product: prod,
      pageTitle:prod.title, 
      path: '/products', 
  })
  })
}

exports.getIndex = (req, res, next) =>{
  Product.fetchAll(products =>{
    //Render template and adding variables that i can use in the template
      res.render('shop/index', {
        prods: products,
        pageTitle:'Shop', 
        path: '/', 
    })
  })  
    
}

exports.getCart = (req, res, next) =>{
    //Render template and adding variables that i can use in the template
      res.render('shop/cart', {
        pageTitle:'Cart', 
        path: '/cart', 
    })  
    
}

exports.postCart = (req, res, next) =>{
  const prodId = req.body.productId;
  console.log(prodId)
  res.redirect('/cart')
}

exports.getCheckout = (req, res, next) =>{
  //Render template and adding variables that i can use in the template
    res.render('shop/checkout', {
      pageTitle:'Checkout', 
      path: '/checkout', 
  })  
  
}

exports.getOrders = (req, res, next) =>{
  //Render template and adding variables that i can use in the template
  res.render('shop/orders', {
    pageTitle:'Your orders', 
    path: '/orders', 
})  
}



