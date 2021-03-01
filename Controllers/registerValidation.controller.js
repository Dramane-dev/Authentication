const User = require("../models/users.model");

exports.register = (req, res) => {
    const { nom, prenom, email, pswd, pswd2 } = req.body;
    // Vérification de la récupération des champs
    console.log(`Nom : ${nom} Prenom : ${prenom} Email : ${email} Password : ${pswd} Password 2 : ${pswd2}`);

    // Vérification si l'un des champs n'est pas remplis
    if(!nom || !prenom || !email || !pswd || !pswd2) {
        res.send(`L'ensemble des champs son requis !`);
    }

    // Vérification des mot de passe 1 et 2
    if(pswd != pswd2) {
        res.send(`Les mots de passes ne sont pas identiques ❌`);
    }

    // Vérification de l'email avec une Regex
    const mailRegex = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
    // Test regex 
    console.log(mailRegex.test(email));

    if (!mailRegex.test(email)) {
        res.send(`Votre addresse est incorrect ❌ ! `);
    }

    /*  Pour le moment on procède à une légère vérification au niveau du mot de passe
        Plus tard nous utiliserons des restrictions avec des Regex.
    */
   if (pswd.length < 6) {
       res.send(`Votre mot de passe doit être supérieur à 6 charactères`);
   }

   User.findOne({ where: { email: email}})
    .then(user => console.log(user))
    .catch(err => console.log(err))
}