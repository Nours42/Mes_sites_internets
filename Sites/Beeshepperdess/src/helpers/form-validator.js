export const validateInputField = (label, type, value) =>{
    //si le champs est vide
    if(value ===""){
        //on retourne une erreur
        return `Le champ ${label} est vide`;
    }
    
    
    switch(type){
        
        case "name" :
            if(value.length > 20){
                return "nom trop long"
            }
        break;

        case "surname" :
            if(value.length > 20){
                return "prénom trop long"
            }
        break;

        case "email":
            //on test le mail à l'aide d'un regex qui test mails
            const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            //si le teste du regex est négatif
            if(regMail.test(value) === false) {
                //on retourne un message d'erreur
                return "email invalide"
            }    
        break;
        
        //si c'est l'addresse
        case "adresse":
            //si la longueur de la valeur est supérieur à 20 caractères
            if(value.length > 50){
                //on retourne que c'est pas possible en message d'erreur
                return "addresse trop longue";
            }
        break;
    
        case "message":
            //si la longueur de la valeur est supérieur à 20 caractères
            if(value.length > 3000){
                //on retourne que c'est pas possible en message d'erreur
                return "message limité à 3000 caractères";
            }
        break;
    }
    //on retourne true (toutes les conditions sont bien remplies du coup)
    return true
}