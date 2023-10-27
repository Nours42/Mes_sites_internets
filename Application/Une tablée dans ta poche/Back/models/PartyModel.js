module.exports = (_db)=>{
    db = _db;
    return PartyModel;
}

class PartyModel {
    
    static async saveOneParty(req){
        let sql = 'INSERT INTO party (name, description, creator_id, dayBegin, dayEnd, timeBegin, timeEnd, salle_id, nbrPlayersMax, nbrPlayersOn, ageMin, creationTimestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())';
        return db.query(sql, [req.body.name, req.body.description, req.body.creator_id, req.body.dayBegin, req.body.dayEnd, req.body.timeBegin, req.body.timeEnd, req.body.salle_id, req.body.nbrPlayersMax, req.body.nbrPlayersOn, req.body.ageMin])
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            return err;
        })
	}
        
    static async getAllPartys() {
        return db.query('SELECT * FROM party')
            .then((res)=>{
                //console.log("getallpartys",res)
                return res;
            })
            .catch((err)=>{
                //console.log("getallpartys", err)
                return err;
            });
    }
    
    static async getOnePartyById(id) {
        return db.query('SELECT * FROM party WHERE id = ?', id)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }

    static async getOnePartyByName(name) {
        return db.query('SELECT * FROM party WHERE name = ?', name)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }

    static async getAllPartysByUser(user_key_id) {
        return db.query('SELECT * FROM party WHERE ? IN (id_player1, id_player2, id_player3, id_player4, id_player5, id_player6, id_player7, id_player8)', user_key_id)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    }

    static async getAllPartysByCreator(creator_id) {
        return db.query('SELECT * FROM party WHERE creator_id = ?', creator_id)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async updateParty(req, id){
        return db.query('UPDATE party SET name = ?, description =?, creator_id = ?, dayBegin = ?, dayEnd = ?, timeBegin = ?, timeEnd = ?, salle_id = ?, nbrPlayersMax = ?, nbrPlayersOn = ?, ageMin = ? WHERE id = ?', [req.body.name, req.body.description, req.body.creator_id, req.body.dayBegin, req.body.dayEnd, req.body.timeBegin, req.body.timeEnd, req.body.salle_id, req.body.nbrPlayersMax, req.body.nbrPlayersOn, req.body.ageMin, id])
			.then ((res)=>{
				return (res)
			})
			.catch((err)=>{
				return err;
			});
    }
    
    static async updatePlayers(req, game_id) {
        return db.query('UPDATE party SET id_player1 = ?, id_player2 = ?, id_player3 = ?, id_player4 = ?, id_player5 = ?, id_player6 = ?, id_player7 = ?, id_player8 = ? WHERE id = ?', [req.body.id_player1, req.body.id_player2, req.body.id_player3, req.body.id_player4, req.body.id_player5, req.body.id_player6, req.body.id_player7, req.body.id_player8, game_id])
            .then((res) => {
                console.log("updatePlayers res", res)
                return (res)
            })
            .catch((err) => {
                console.log("updatePlayers err", err)
                return err;
            });
    }

    static async deleteOneParty(id) {
        return db.query('DELETE FROM party WHERE id=?', [id])
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            })
    }


}