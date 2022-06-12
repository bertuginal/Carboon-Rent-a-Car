function signUp() {
    const emailS = document.getElementById("signE").value
    const passwordS = document.getElementById("signP").value

    firebase.auth().createUserWithEmailAndPassword(emailS, passwordS)
        .catch((error) => {
        swal({
            title: "Hata!",
            text: "Parola uzunluğu 6 karakterden uzun olmalı!",
            icon: "error",
          });
        });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            location.replace("welcome.html")
        }
    })
}