// Select all dropdown menus
const optionMenus = document.querySelectorAll(".select-menu");

// Loop through each dropdown menu
optionMenus.forEach(optionMenu => {
    // Select elements within the current dropdown menu
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    // Add click event listener to the select button
    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
    });

    // Add click event listener to each option within the dropdown menu
    options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});