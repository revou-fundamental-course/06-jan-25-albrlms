// Ini file Javascript

// Function to validateForm
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

// Funcition senderUI
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;

    changeBackground();
}

// Function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');

    if (indexBanner > bannerList.length) {
        indexBanner = 0;
    }

// Looping to changeBackground
for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = 'none';
}

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);