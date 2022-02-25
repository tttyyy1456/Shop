exports.getNotFound = (req,res,next)=>{

    //Render template and adding variables that i can use in the template
    res.status(404).render('404', {pageTitle: 'Not Found', path: ''})
}