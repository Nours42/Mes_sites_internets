const withAuth = require('../withAuth');
module.exports = (app, db)=>{
	const partyModel = require('../models/PartyModel')(db)
	
	//route de récupération de toutes les tablées
	app.get('/api/v1/partys', async (req, res, next) => {
		let partys = await partyModel.getAllPartys();
		if(partys.code){
			res.json({status: 500, err: partys});
        } else {
            res.json({status: 200, msg: "liste des jeux chargés", result: partys});
		}
	})
	
	
	//route de récupération d'une tablée par son id
	app.get('/api/v1/partys/:id', async (req, res, next)=>{
        let id = req.params.id;
    	let party = await partyModel.getOnePartyById(id);
    	if(party.code){
            res.json({status: 500, err: party, msg: "tablée inconnue"});
        } else {
            res.json({status: 200, msg: "tablée chargée", result: party[0]})}
    });
	
	
	//route de récupération des tablées par le creator_id (les tablées qu'il a créée)
	app.get('/api/v1/partys/creator/:creator_id', async (req, res, next)=>{
        let creator_id = req.params.creator_id;
		let partysByCreator = await partyModel.getAllPartysByCreator(creator_id);
        if (partysByCreator.code){
            res.json({ status: 500, err: partysByCreator, msg: "creator_id ou tablées inconnues"});
        } else {
            res.json({ status: 200, msg: "tablées de ce créateur chargées", result: partysByCreator })}
    });
	
    app.get('/api/v1/partys/user/:user_key_id', async (req, res, next) => {
        let user_key_id = req.params.user_key_id;
        let partysByUserKeyId = await partyModel.getAllPartysByUser(user_key_id);
        if (partysByUserKeyId.code) {
            res.json({ status: 500, err: partysByUserKeyId, msg: "user_key_id ou tablées inconnues" });
        } else {
            res.json({ status: 200, msg: "tablées de cet utilisateur chargées", result: partysByUserKeyId })
        }
    });
	
	//route d'ajout d'une tablée
	app.post('/api/v1/partys/save', async (req, res, next)=>{
        //en premier, vérifier si la tablée existe dans la bdd sinon on refoule
        let party = await partyModel.getOnePartyByName(req.body.name);
        
        if(party.length > 0){
            
            if(party[0].name.toLowerCase() === req.body.name.toLowerCase()){
                res.json({status: 401, err: "tablée déjà enregistrée"});
            }
        } else {
        // ensuite on enregistre le nouveau tablée
        console.log("nouvelle tablée en cours de création")
        let newParty = await partyModel.saveOneParty(req);
        if(newParty.code){
            res.json({status: 500, err: newParty});
        } else {
            res.json({status: 200, msg: "Nouvelle tablée enregistrée", result: newParty})}}
    });
	
	
	//route de modification d'un tablée
	app.put('/api/v1/partys/update/:id', async (req, res, next)=>{
        let partyId = req.params.id;
        let party = await partyModel.updateParty(req, partyId);
        if(party.code){
            res.json({status: 500, msg: "Ce n'est pas cette tablée que vous recherchez", err: party});
        } else {
        res.json({status: 200, msg: "tablée modifiée", result: party})};
    });

    //routes d'ajout d'un joueur
    app.put('/api/v1/partys/update/playersUpdate/:game_id', async (req, res, next)=>{
        let game_id = req.params.game_id
        console.log("players update route", game_id)
        let updatePlayers = await partyModel.updatePlayers(req, game_id)
        if (updatePlayers.code){
            res.json({ status: 500, msg: "problème dans l'ajout de la joueuse", err: game_id });
        } else {
            res.json({ status: 200, msg: "liste des joueuses modifiée", result: game_id })
        };
    })
	
	
	//route de suppression d'un tablée
	app.delete('/api/v1/partys/delete/:id', async (req, res, next)=>{
        let id = req.params.id;
        let party = await partyModel.getOnePartyById(id)
        if(party.code){
            res.json({status: 500, error_msg: "problème", err: party})
        } else {
            let supp = await partyModel.deleteOneParty(id);
            if(supp.code){
                res.json({status: 500, error_msg: "supp", err: supp});
            } else {
			res.json({status: 200, msg: "tablée supprimée avec succés", result: supp})
			}
        }
    });
}