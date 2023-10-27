module.exports = (_db)=>{
    db = _db;
    return TWModel;
}

class TWModel {
    
    static async saveOneTW(req){
        let sql = 'INSERT INTO tw (name, description, user_id, creationTimestamp) VALUES (?, ?, ?, NOW())';
		return db.query(sql, [req.body.name, req.body.description, req.body.user_id])
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            return err;
        })
	}
        
    static async getAllTW() {
        return db.query('SELECT * FROM tw')
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async getOneTWById(id) {
        return db.query('SELECT * FROM tw WHERE id = ?', id)
            .then((res)=>{
                
                return res;
            })
            .catch((err)=>{
                
                return err;
            });
    }

    static async getOneTWByName(name) {
        return db.query('SELECT * FROM tw WHERE name = ?', name)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async getAllTWByUser(user_id) {
        return db.query('SELECT * FROM tw WHERE user_id = ?', user_id)
            .then((res)=>{
                //console.log(res)
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async updateTW(req, id){
        return db.query('UPDATE tw SET name = ?, description = ?, ligne = ?, voile = ? WHERE id = ?', [req.body.name, req.body.description, req.body.ligne, req.body.voile, id])
			.then ((res)=>{
                
				return (res)
			})
			.catch((err)=>{
				return err;
			});
    }
    
     static deleteOneTW(id){
        return db.query('DELETE FROM tw WHERE id=?', [id])
        .then((res)=>{
            console.log(res)
            return res;
        })
        .catch((err)=>{
            console.log(err)
            return err;
    })}

}