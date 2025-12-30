  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAGe2YIJcuK4jVQMAxY6QjIJhQRNMXKjZE",
    authDomain: "smartbook-notify.firebaseapp.com",
    projectId: "smartbook-notify",
    storageBucket: "smartbook-notify.firebasestorage.app",
    messagingSenderId: "593485822584",
    appId: "1:593485822584:web:758f18c489a5555b780b8d"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);



emailjs.init({
    publicKey: "9581i2CjsVS8UMlpO"  
});

    const modal = document.getElementById("modal");
    const closebtn = document.getElementById("closeModal");
    const form = document.getElementById("notifyForm");
    form.addEventListener("submit", async(e) => {
    e.preventDefault();
    alert(" Your Details Submitted Successfully")
   
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    modal.classList.add("active");
    form.reset();
    try {
        await addDoc(collection(db, "notifyUsers"), {
             Name: name,
             Email: email
    });
    console.log("data stored successfully");
} catch (e) {
    console.log(error);
}




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