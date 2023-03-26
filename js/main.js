

function Submit() {
    let user = document.getElementById("username").value,
        pass = document.getElementById("password").value,
        Email = document.getElementById("Email").value;



    if (user == "" || user[0] == user[0].toLowerCase()){
        document.write("Error, try again");
    }

    else if(pass == "" || pass[0] == pass[0] .toLowerCase() || pass.length <= 5){
        document.write("Error, try again");
    }

    if (Email == '' ||  Email.indexOf("@") == -1){
        document.write("Error, try again");
    }
    else {
        document.write("Welcome");
    }
}



