module.exports = (_db)=>{
    db = _db;
    return ProductsModel;
}

class ProductsModel {
    
    static async saveOneProduct(req){
        let sql = 'INSERT INTO products (name, description, allergenes, quantite, PU, codeTVA, creationTimestamp) VALUES (?, ?, ?, ?, ?, ?, NOW())';
		return db.query(sql, [req.body.name, req.body.description, req.body.allergenes, req.body.quantite, req.body.PU, req.body.codeTVA])
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            return err;
        })
	}
        
    static async getAllProducts() {
        return db.query('SELECT * FROM ')
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async getOneProductById(id) {
        return db.query('SELECT * FROM products WHERE id = ?', id)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }

    static async getOneProductByName(name) {
        return db.query('SELECT * FROM products WHERE name = ?', name)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async getAllProductsByUser(user_id) {
        return db.query('SELECT * FROM products WHERE user_id = ?', user_id)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
    }
    
    static async updateProduct(req, id){
        return db.query('UPDATE products SET name = ?, description = ?, allergenes = ?, quantite = ?, prixUnitaire = ?, codeTVA = ? WHERE id = ?', [req.body.name, req.body.description, req.body.allergenes, req.body.quantite, req.body.PU, req.body.codeTVA, id])
			.then ((res)=>{
				return (res)
			})
			.catch((err)=>{
				return err;
			});
    }
    
     static deleteOneProduct(id){
        return db.query('DELETE FROM products WHERE id=?', [id])
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            return err;
    })}

}