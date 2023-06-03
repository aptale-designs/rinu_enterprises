function whatsapp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var message = document.getElementById("message").value;

    var url = "https://wa.me/+917597999578?text="
        + "*Name :* " + name + "%0a"
        + "*Email :* " + email + "%0a";
    // +"*Message :* "+message;

    window.open(url, '_blank').focus();
}