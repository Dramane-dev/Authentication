exports.emptyField = (nom, prenom, email, pswd, pswd2) => {
    if(!nom || !prenom || !email || !pswd || !pswd2) {
        return false;
    }
    return true;
}