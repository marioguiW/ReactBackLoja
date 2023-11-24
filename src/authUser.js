
const isAuthenticated = ()=> {
    const a = JSON.parse(sessionStorage.getItem("login"))
    console.log(a)

    if(a == null){
        console.log("false")
        return false
        
    }else{
        console.log("true")
        return true;
    }
}

export default isAuthenticated;