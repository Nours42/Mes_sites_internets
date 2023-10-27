const withAuth = require('../withAuth');
module.exports = (app, db)=>{
	const sallesModel = require('../models/SallesModel')(db)
	
	//route de récupération de toutes les salles
	app.get('/api/v1/salles', async (req, res, next) => {
		let salles = await sallesModel.getAllSalles();
		if(salles.code){
			res.json({status: 500, err: salles});
        } else {
            res.json({status: 200, msg: "liste des jeux chargés", result: salles});
		}
	})
	
	
	//route de récupération d'une salle par son id
	app.get('/api/v1/salles/:id', async (req, res, next)=>{
        let id = req.params.id;
    	let salle = await sallesModel.getOneSallesById(id);
    	if(salle.code){
            res.json({status: 500, err: salle, msg: "salle inconnue"});
        } else {
            res.json({status: 200, msg: "salle chargée", result: salle[0]})}
    });
	
	
	//route de récupération des salles par l'user_id (ses salles à lui)
	app.get('/api/v1/salles/:user_id', async (req, res, next)=>{
        let user_id = req.params.user_id;
		let sallesByUser = await sallesModel.getAllSallesByUser(user_id);
        if (sallesByUser.code){
            res.json({ status: 500, err: sallesByUser, msg: "user_id ou salles inconnues"});
        } else {
            res.json({ status: 200, msg: "salles de l'utilisateur chargés", result: sallesByUser })}
    });
	
	
	//route d'ajout d'une salle
	app.post('/api/v1/salles/save', async (req, res, next)=>{
        //en premier, vérifier si la salle existe dans la bdd sinon on refoule
        let salle = await sallesModel.getOneSalleByName(req.body.name);
        console.log("je rentre dans la requete")
        if(salle.length > 0){
            console.log("il existe deja une salle à ce nom ?")
            if(salle[0].name.toLowerCase() === req.body.name.toLowerCase()){
                res.json({status: 401, err: "salle déjà enregistrée"});
            }
        } else {
        // ensuite on enregistre la nouvelle salle
        console.log("nouvelle salle en cours de création")
        let newSalle = await sallesModel.saveOnesalle(req);
        if(newSalle.code){
            res.json({status: 500, err: newSalle});
        } else {
            res.json({status: 200, msg: "Nouvelle salle enregistrée", result: newSalle})}}
    });
	
	
	//route de modification d'une salle
	app.put('/api/v1/salles/update/:id', async (req, res, next)=>{
        let salleId = req.params.id;
        let salle = await sallesModel.updateSalle(req, salleId);
        if(salle.code){
            res.json({status: 500, msg: "Ce n'est pas cette salle que vous recherchez", err: salle});
        } else {
        res.json({status: 200, msg: "salle modifiée", result: salle})};
    });
	
	
	//route de suppression d'une salle
	app.delete('/api/v1/salles/delete/:id', async (req, res, next)=>{
        let id = req.params.id;
        let salle = await sallesModel.getOnesalleById(id)
        if(salle.code){
            res.json({status: 500, error_msg: "probleme", err: salle})
        } else {
        let supp = await salleModel.deleteOnesalle(id);
            if(supp.code){
                res.json({status: 500, error_msg: "supp", err: supp});
            } else {
			res.json({status: 200, msg: "salle supprimé avec succés", result: supp})
			}
        }
    });
}