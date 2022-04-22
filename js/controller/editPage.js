const user = localStorage.getItem("user")

if(user === null){
    location.href = "login.html"
}