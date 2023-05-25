function sendMail() {

    var params = {

        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        subject: document.getElementById("Subject").value,
        message: document.getElementById("Message").value,

    };

    const servicesID = "service_0w2j8ge";
    const templateID = "template_jdro2jg";

    emailjs.send(servicesID, templateID, params).then((res) => {

        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Subject").value = "";
        document.getElementById("Message").value ="";
        console.log(res);
        alert("Message Sent Successfully!");

    })
    .catch((err) => console.log(err));

}

