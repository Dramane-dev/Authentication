exports.pswdSize = pswd=> {
    if(pswd.length < 6) {
        return false;
    }
    return true;
}