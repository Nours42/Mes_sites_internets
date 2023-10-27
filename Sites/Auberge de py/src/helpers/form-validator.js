export const validateInputField = (label, type, value) => {
    //si le champs est vide
    if (value === "") {
        //on retourne une erreur
        return `Le champ ${label} est vide...`
    }

    //une magnifique condition switch
    switch (type) {
        //si c'est email
        case "email":
            //on test le mail à l'aide d'un regex qui test mails
            const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            //si le teste du regex est négatif
            if (regMail.test(value) === false) {
                //on retourne un message d'erreur
                return `Le champ ${label} n'est pas valide!`
            }
            break;
        //si c'est password
        case "password":
            //on test le mot de passe à l'aide d'un regex qui test la valeur pour avoir 8 chiffres,au moins une lettre, une majuscule une minuscule et un caractère spécial.
            const regPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
            //si le test du regex est négatif
            if (regPass.test(value) === false) {
                //on retourne un message d'erreur
                return `Le champ ${label} doit contenir minimum 8 caractères et au moins: un chiffre, une lettre majuscule, une lettre minuscule et un caractère spécial!`
            }
            break;
        //si c'est age
        case "age":
            //on test si l'age est correct
            //si ce n'est pas un nombre entier
            if (isNaN(value)) {
                //on retourne un message d'erreur
                return `Vous n'avez pas rentré un chiffre pour le champ ${label}!`
            } else if (value > 122) {
                //sinon si celui-ci est supérieur à 122 ans

                //on retourne que c'est un mytho
                return `Votre age ne peut pas aller au delà de 122 ans mytho!`
            }


            break;
        //si c'est l'addresse
        case "adress":
            //si la longueur de la valeur est supérieur à 20 caractères
            if (value.length > 20) {
                //on retourne que c'est pas possible en message d'erreur
                return `Le champ ${label} possède trop de caractères`
            }
            break;
    }

    //on retourne true (toutes les conditions sont bien remplies du coup)
    return true

}