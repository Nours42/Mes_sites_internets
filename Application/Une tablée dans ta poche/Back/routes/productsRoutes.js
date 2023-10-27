const withAuth = require('../withAuth');
module.exports = (app, db)=>{
	const productsModel = require('../models/ProductsModel')(db)
	
	//route de récupération de tous les jeux
	app.get('/api/v1/products', async (req, res, next) => {
		let products = await productsModel.getAllProducts();
		if(products.code){
			res.json({status: 500, err: products});
        } else {
            res.json({status: 200, msg: "liste des jeux chargés", result: products});
		}
	})
	
	
	//route de récupération d'un jdr par son id
	app.get('/api/v1/products/:id', async (req, res, next)=>{
        let id = req.params.id;
    	let product = await productsModel.getOneProductById(id);
    	if(product.code){
            res.json({status: 500, err: product, msg: "jdr inconnu"});
        } else {
            res.json({status: 200, msg: "jdr chargé", result: product[0]})}
    });
	
	
	//route de récupération des jdrs par l'user_id (ses jdrs à lui)
	app.get('/api/v1/products/user/:user_id', async (req, res, next)=>{
        let user_id = req.params.user_id;
		let productsByUser = await productsModel.getAllProductsByUser(user_id);
        if (productsByUser.code){
            res.json({ status: 500, err: productsByUser, msg: "user_id ou jdrs inconnus"});
        } else {
            res.json({ status: 200, msg: "jdrs de l'utilisateur chargés", result: productsByUser })}
    });
	
	
	//route d'ajout d'un jdr
	app.post('/api/v1/products/save', async (req, res, next)=>{
        //en premier, vérifier si le jdr existe dans la bdd sinon on refoule
        let product = await productsModel.getOneProductByName(req.body.name);
        console.log("je rentre dans la requete")
        if(product.length > 0){
            console.log("il existe deja un jdr à ce nom ?")
            if(product[0].name.toLowerCase() === req.body.name.toLowerCase()){
                res.json({status: 401, err: "jdr déjà enregistré"});
            }
        } else {
        // ensuite on enregistre le nouveau jdr
        console.log("nouveau JDR en cours de création")
        let newProduct = await productsModel.saveOneProduct(req);
        if(newProduct.code){
            res.json({status: 500, err: newProduct});
        } else {
            res.json({status: 200, msg: "Nouveau product enregistré", result: newProduct})}}
    });
	
	
	//route de modification d'un jdr
	app.put('/api/v1/products/update/:id', async (req, res, next)=>{
        let productId = req.params.id;
        let product = await productsModel.updateProduct(req, productId);
        if(product.code){
            res.json({status: 500, msg: "Ce n'est pas ce jdr que vous recherchez", err: product});
        } else {
        res.json({status: 200, msg: "jdr modifié", result: product})};
    });
	
	
	//route de suppression d'un jdr
	app.delete('/api/v1/products/delete/:id', async (req, res, next)=>{
        let id = req.params.id;
        let product = await productsModel.getOneProductById(id)
        if(product.code){
            res.json({status: 500, error_msg: "probleme", err: product})
        } else {
        let supp = await productsModel.deleteOneProduct(id);
            if(supp.code){
                res.json({status: 500, error_msg: "supp", err: supp});
            } else {
			res.json({status: 200, msg: "product supprimé avec succés", result: supp})
			}
        }
    });
}