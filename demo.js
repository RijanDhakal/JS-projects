function setUserName(username){
    // complex db calls 
    this.username = username
    console.log("called")
}

function createUSer(username , email , password){
    // here call actually calls the function and put username in createUSer;s this due to we can get the username
    setUserName.call(this , username)
    this.email = email
    this.password = password
}

const check = new createUSer("rijan" ,"rijandhakal0619@gmail.com" , "RDeve")
console.log(check)