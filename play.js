function check(pass){
    let pass_arr = Array.from(pass);
    if(pass.length >= 8){
        let hasUpper = false;
        let haslower = false;
        let hasnum = false;

        for(let i = 65 ; i<= 90 ; i++){
            if(pass_arr.includes(String.fromCharCode(i))){
                hasUpper = true;
            }
        }

        for(let j = 97 ; j<= 122 ; j++){
            if(pass_arr.includes(String.fromCharCode(j))){
                haslower = true;
            }
        }

        for(let k = 48 ; k<= 57 ; k++){
            if(pass_arr.includes(String.fromCharCode(k))){
                hasnum = true;
            }
        }

        if(hasUpper && haslower && hasnum){
            console.log("Password is correct");
        }
        else{
            console.log("password is incorrect");
        }
    }
}

check("ijA5hakal")