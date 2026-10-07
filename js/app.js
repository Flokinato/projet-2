const buttons = document.querySelectorAll('.button_test')

for (const button of buttons) {
    button.addEventListener("click", () =>{
        button.classList.add("joue");
    })
}