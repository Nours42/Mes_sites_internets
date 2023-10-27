const withAuth = require('../withAuth');
module.exports = (app, db)=>{
	const TWModel = require('../models/TWModel')(db)
	
	//route de récupération de tous les jeux
	app.get('/api/v1/TW', async (req, res, next) => {
		let TW = await TWModel.getAllTW();
		if(TW.code){
			res.json({status: 500, err: TW});
        } else {
            res.json({status: 200, msg: "liste des jeux chargés", result: TW});
		}
	})
	//console.log("coucou")
	
	//route de récupération d'un TW par son id
	app.get('/api/v1/TW/:id', async (req, res, next)=>{
        let id = req.params.id;
    	let TW = await TWModel.getOneTWById(id);
    	if(TW.code){
            res.json({status: 500, err: TW, msg: "TW inconnu"});
        } else {
            res.json({status: 200, msg: "TW chargé", result: TW[0]})}
    });
	
	
	//route de récupération des TWs par l'user_id (ses TWs à lui)
	app.get('/api/v1/TW/user/:user_id', async (req, res, next)=>{
        let user_id = req.params.user_id;
		let TWByUser = await TWModel.getAllTWByUser(user_id);
        if (TWByUser.code){
            res.json({ status: 500, err: TWByUser, msg: "user_id ou TWs inconnus"});
        } else {
            res.json({ status: 200, msg: "TWs de l'utilisateur chargés", result: TWByUser })}
    });
	
	
	//route d'ajout d'un TW
	app.post('/api/v1/TW/save', async (req, res, next)=>{
        console.log("nouveau TW en cours de création")
        let newTW = await TWModel.saveOneTW(req);
        if(newTW.code){
            res.json({status: 500, err: newTW});
        } else {
            res.json({status: 200, msg: "Nouveau TW enregistré", result: newTW})}
    });
	
	
	//route de modification d'un TW
	app.put('/api/v1/TW/update/:id', async (req, res, next)=>{
        let TWId = req.params.id;
        let TW = await TWModel.updateTW(req, TWId);
        if(TW.code){
            res.json({status: 500, msg: "Ce n'est pas ce TW que vous recherchez", err: TW});
        } else {
        res.json({status: 200, msg: "TW modifié", result: TW})};
    });
	
	
	//route de suppression d'un TW
	app.delete('/api/v1/TW/delete/:id', async (req, res, next)=>{
        let id = req.params.id;
        console.log("heidy",id)
        let supp = await TWModel.deleteOneTW(id);
            if(supp.code){
                res.json({status: 500, error_msg: "supp", err: supp});
            } else {
			res.json({status: 200, msg: "TW supprimé avec succés", result: supp})
			}
    });
}