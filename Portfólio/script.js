function changeProfileImage() {
    let img = document.getElementById("image");
    let name = document.querySelector(".name");

    if (img.src.endsWith("victor.jpg")) {
        img.src = "imgs/rigby.jpg";
        name.textContent = "Rigby";
    } else {
        img.src = "imgs/victor.jpg";
        name.textContent = "Victor Hugo";
    }
}

function infoChange(section) {
    var description = document.getElementById("description-content");
    var hardSkill = document.getElementById("hard-skills-content");
    var softSkill = document.getElementById("soft-skills-content");

    var descriptionButton = document.getElementById("description");
    var hardSkillButton = document.getElementById("hard-skills");
    var softSkillButton = document.getElementById("soft-skills");

    description.style.display = "none";
    hardSkill.style.display = "none";
    softSkill.style.display = "none";

    if (section === "description") {
        description.style.display = "block";
        descriptionButton.style.order = "1"
        hardSkillButton.style.order = "0"
    } else if (section === "hardSkill") {
        hardSkill.style.display = "flex";
        hardSkillButton.style.order = "1"
    } else if (section === "softSkill") {
        softSkill.style.display = "flex";
        softSkillButton.style.order = "1"
        hardSkillButton.style.order = "2"
    }
}
