const LS_KEY_LOGIN = "LS_LOGIN"

function setLocalStorage(key, value){
    try {
        localStorage.setItem(key, value)
    }
    catch (e) {
        console.warn("Failed to set LOCALSTORAGE:"+e.toString())
    }
}

function getLocalStorage(key){
    try {
        return localStorage.getItem(key)
    }
    catch (e) {
        console.warn("Failed to get LOCALSTORAGE:"+e.toString())
    }
}

function setLoginData(username, isLogin, expired){
    let loginData = {
        username: username,
        isLogin: isLogin,
        expired: expired
    }
    setLocalStorage(LS_KEY_LOGIN, JSON.stringify(loginData))
}
function getLoginData(){
    let jsonLoginData = JSON.parse(getLocalStorage(LS_KEY_LOGIN))
    if(jsonLoginData){
        return jsonLoginData
    }
    return null
}

export {
    setLoginData, getLoginData
}
