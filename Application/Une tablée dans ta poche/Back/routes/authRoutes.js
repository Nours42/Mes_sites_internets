const withAuth = require('../withAuth')

module.exports = (app, db)=>{
    const userModel = require('../models/UserModel')(db);
    const partyModel = require('../models/PartyModel')(db);
    const twModel = require('../models/TWModel')(db);
    //route de récupération des infos de l'utilisateur connecté par son token
    app.get('/api/v1/auth/checkToken', withAuth, async (req, res, next)=>{
       // si tout roule on envoie status 200 au front
        let userdata = await userModel.getOneUser(req.id);
        let party = await partyModel.getAllPartysByUser(userdata[0].key_id);
        let TW = await twModel.getAllTWByUser(userdata[0].id)
        let user = userdata[0];
        user.party = party;
        user.TW = TW;
        console.log(user, TW)
        if(user.code) {
            res.json({status:500, msg: "aucun user associé", err: user})
        }
        res.json({status: 200, msg: "token ok", user: user})
    })
}