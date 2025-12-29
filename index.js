emailjs.init({
    publicKey: "9581i2CjsVS8UMlpO"  
});

    const modal = document.getElementById("modal");
    const closebtn = document.getElementById("closeModal");
    const form = document.getElementById("notifyForm");
    form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert(" Your Details Submitted Successfully")
   
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    modal.classList.add("active");
    form.reset();


    emailjs.send("service_36bza89", "template_xajtecb", {
        user_email: email,
        user_name: name
    })
    .then(() => {
        document.getElementById("msg").innerHTML = "✅ Thank you! We will notify you soon.";
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
    })
    .catch((error) => {
        document.getElementById("msg").innerHTML = "❌ Failed to send email.";
        console.log(error);
    });
});

closebtn.addEventListener("click" ,()=>{
    modal.classList.remove("active");
});

modal.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.classList.remove("active");

    }
});