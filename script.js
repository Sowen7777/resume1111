const name = "Mиxaйлo Татаренко";
document.getElementById("myau").textContent = name

const year = new Date().getFullYear();
document.getElementById("footer").textContent = year + " " + name;

let isDark = false;

const button = document.getElementById("кнпк")

button.addEventListener("click", function(){
    isDark = !isDark
document.body.classList.toggle("dark", isDark)

if(isDark) {
    button.textContent = "Світла тема 🌞"
} else {
button.textContent = "Темна тема 🌙"
}
})

