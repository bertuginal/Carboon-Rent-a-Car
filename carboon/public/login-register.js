
function login() {
    const emailL = document.getElementById("loginE").value
    const passwordL = document.getElementById("loginP").value
    if(emailL && passwordL){
        firebase.auth().signInWithEmailAndPassword(emailL, passwordL)
        .then((userCredential) => {
            var user = userCredential.user
            location.replace("welcome.html")
        })
        .catch((error) => {
            swal({
                title: "Hata!",
                text: "Hatalı kullanıcı adı veya parola girdiniz!",
                icon: "error",
              });
        })
    }
}
