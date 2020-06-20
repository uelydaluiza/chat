function getPatientIdLogged(){
    return localStorage.getItem("patientId");
}

function getUserNameLogged(){
    return localStorage.getItem("userName");
}

function isAuthenticated(){
    return localStorage.getItem("userName") === null;
}

function logoff(){
    localStorage.clear();
    window.location.href = "http://localhost:3000"; 
}

const userNameText = document.getElementById("user-name");
if (userNameText){
    userNameText.innerHTML = getUserNameLogged();
}