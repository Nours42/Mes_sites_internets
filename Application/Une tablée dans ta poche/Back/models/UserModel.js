const bcrypt = require('bcryptjs');
const saltRounds = 10;
let randomId = require('random-id');
let len = 30;
let pattern = 'aA0'
 
module.exports = (_db)=>{
    db = _db;
    return UserModel;
}

class UserModel {
    
    static async saveOneUser(req) {
        //on hash le password
        let hash = await bcrypt.hash(req.body.password, saltRounds);
        //on génère un id personalisé
        let key_id = randomId(len, pattern);
        //console.log(key_id)

        let user = await db.query('SELECT * FROM users WHERE email = ?', [req.body.email]);

        if (user.length > 0) {
            return { status: 501, msg: "email déjà utilisé" }
        }
		//on sauvegarde l'utilisateur
        return db.query('INSERT INTO users (firstName, lastName, age, pseudo, email, password, address, zip, city, phone, pronouns, MJ, Handy, role, CreationTimesTamp, validate, key_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "user", NOW(), "no", ?)', [req.body.firstName, req.body.lastName, req.body.age, req.body.pseudo, req.body.email, hash, req.body.address, req.body.zip, req.body.city, req.body.phone, req.body.pronouns, req.body.MJ, req.body.handy, key_id])
            .then((result) => {
                //on retourne l'objet de reponse reussit en lui rajoutant le key_id
                result.key_id = key_id
                return result
            }).catch((err) => {
                return err
            })
	}

    static async updateValidateUser(key_id) {
        let user = await db.query('UPDATE users SET validate = "yes" WHERE key_id = ?', [key_id]);

        return user;

    }

    static async updateKeyId(email) {
        let key_id = randomId(len, pattern);

        let user = await db.query('UPDATE users SET key_id = ? WHERE email = ?', [key_id, email]);

        let result = { key_id: key_id, user: user }

        return result;

    }

    static async updatePassword(newPassword, key_id) {
        //on crypte le password
        let hash = await bcrypt.hash(newPassword, saltRounds);

        let result = await db.query('UPDATE users SET password = ? WHERE key_id = ?', [hash, key_id]);
        return result;
    }
	    
	static async getUserByMail(email){
	    return db.query("SELECT * FROM users WHERE email = ?", [email])
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }

    static async getOneUser(id) {
        return db.query('SELECT * FROM users WHERE id = ?', [id])
            .then((result) => {
                //console.log(result)
                return result;
            })
            .catch((err) => {
                return err;
            })
    }

	
    static async getUserByKeyId(key_id) {
        return db.query("SELECT * FROM users WHERE key_id = ?", [key_id])
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    }

    static async updateUser(req, key_id) {
        return db.query('UPDATE users SET firstName = ?, lastName = ?, age = ?, pseudo = ?, address = ?, zip = ?, city = ?, phone = ?, pronouns = ?, MJ = ?, handy = ? WHERE key_id = ?', [req.body.firstName, req.body.lastName, req.body.age, req.body.pseudo, req.body.address, req.body.zip, req.body.city, req.body.phone, req.body.pronouns, req.body.MJ, req.body.handy, key_id])
            .then((res) => {
                return (res)
            })
            .catch((err) => {
                return err;
            });
    }

}