document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",e=>{
e.preventDefault();

const target = document.querySelector(
 link.getAttribute("href")
 );
  if(target){
    target.scrollIntoView({
      behavior:"smooth"
     });
   }
 });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        alert("✅ Thank you! Your message has been sent successfully.");
        form.reset();
    } else {
        alert("❌ Something went wrong. Please try again.");
    }
});

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}else{
  themeBtn.textContent = "🌙";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        themeBtn.textContent = "☀️";
    }else{
        localStorage.setItem("theme","light");
        themeBtn.textContent = "🌙";
    }

});

