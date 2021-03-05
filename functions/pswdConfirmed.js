exports.pswdConfirmed = (pswd, pswd2) => {
    if(pswd !== pswd2) {
        return false;
    }
    return true;
}