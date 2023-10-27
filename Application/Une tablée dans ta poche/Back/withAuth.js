const jwt = require('jsonwebtoken');
const secret = "un JDR sans MJ ? mais vous n'y pensez pas ?";
// middleware permettant de contrôler la validité du token
const withAuth = (req, res, next)=>{
    // on récupère les information du token stockées dans la partie headers de la requete axios
    const token = req.headers['x-access-token'];
    // si pas de token, c'est mort
    if(token === undefined) {
        res.json({status: 404, msg:"Pas de token"});
    } else {
        //si il y a un token on vérifie qu'il est bon
        jwt.verify(token, secret, (err, decode)=>{
            if(err){
                // mauvais token !
                res.json({status: 401, msg: "attention Token non valide"});
            } else {
                // bon token on passe à la suite
                
                // le token est bon, je peux récupérer l'id de l'utilisateur dans le token
                // on avait enregister celui-ci lors du login
                // je le stock dans le req de la fonction suivante
                req.id = decode.id;
                next();
            }
        });
        
        
    }
    
    
};
// on export le middleware
module.exports = withAuth;