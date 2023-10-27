module.exports = (_db)=>{
    db = _db;
    return SallesModel;
}

class SallesModel {
    
    static async saveOneSalle(req){
        let sql = 'INSERT INTO salle (name, nbrPlaces, creationTimestamp) VALUES (?, ?, ?, ?, ?, NOW())';
		return db.query(sql, [req.body.name, req.body.nbrPlaces])
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            return err;
        })
	}
        
    static async getAllSalles() {
        return db.query('SELECT * FROM salle')
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async getOneSalleById(id) {
        return db.query('SELECT * FROM salle WHERE id = ?', id)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }

    static async getOneSalleByName(name) {
        return db.query('SELECT * FROM salle WHERE name = ?', name)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async getAllSallesByUser(user_id) {
        return db.query('SELECT * FROM salle WHERE user_id = ?', user_id)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async updateSalle(req, id){
        return db.query('UPDATE salle SET name = ?, nbrPlaces = ? WHERE id = ?', [req.body.name, req.body.nbrPlaces, id])
			.then ((res)=>{
				return (res)
			})
			.catch((err)=>{
				return err;
			});
    }
    
     static deleteOneSalle(id){
        return db.query('DELETE FROM salle WHERE id=?', [id])
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            return err;
    })}

}