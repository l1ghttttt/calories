document.addEventListener("DOMContentLoaded", function () {
    let btnFitnesNode = document.querySelector("#btn_fitnes");
    let btnPremiumNode = document.querySelector("#btn_premium");
    let btnPostNode = document.querySelector("#btn_postnoe");
    let btnBalanceNode = document.querySelector("#btn_balance");
    let FitnessContent = document.querySelector(".Fitness");
    let PremiumContent = document.querySelector(".Premium");
    let PostContent = document.querySelector(".Post");
    let BalanceContent = document.querySelector(".Balance");
    let tabheaderList = document.querySelectorAll(".tabheader__item");
    let tabcontentList = document.querySelectorAll(".tabcontent");
    let womanSelect = document.querySelector("#woman");
    let manSelect = document.querySelector("#man");
    let pol = 0;
    let heightInput = document.querySelector("#height");
    let weightInput = document.querySelector("#weight");
    let ageInput = document.querySelector("#age");
    let modalBtn = document.querySelector(".btn_modal");
    let modalNode = document.querySelector(".modal");
    let modal2Btn = document.querySelector(".offer__action");
    let height = undefined;
    let weight = undefined;
    let age = undefined;
    let currentActivity = undefined;
    let activityList = document.querySelectorAll(
        ".calculating__choose-item-activity"
    );
    let currentCalories = document.querySelector("#calories");
    let modalCloseBtn = document.querySelector(".modal__close");
    let name = undefined;
    let phone = undefined;
    let feedBackBtn = document.querySelector("#feedbackBtn");
    let counter = 1;
    let nextBtn = document.querySelector(".offer__slider-next");
    let prevBtn = document.querySelector(".offer__slider-prev");
    let slide = document.querySelector(".offer__slide");
    let counterNode = document.querySelector("#current");
    let amplituda = 0;
    let dayss = document.querySelector("#days");
    let hourss = document.querySelector("#hours");
    let minutess = document.querySelector("#minutes");
    let secondss = document.querySelector("#seconds");

    let calc = function (pol, height, weight, age, currentActivity) {
        let coef = 1;
        switch (currentActivity) {
            case "low":
                coef = 0.75;
                break;
            case "small":
                coef = 1;
                break;
            case "medium":
                coef = 1.25;
                break;
            case "high":
                coef = 1.5;
                break;
        }
        let calories = 0;
        if (
            pol !== undefined &&
            height !== undefined &&
            weight !== undefined &&
            age !== undefined &&
            currentActivity !== undefined
        ) {
            if (pol === 2) {
                calories = Math.ceil(
                    (10 * weight + 6.25 * height - 5 * age) * coef
                );
            }
            if (pol === 1) {
                calories = Math.ceil(
                    (10 * weight + 6.25 * height - 5 * age + 5) * coef
                );
            }
        }
        return calories;
    };

    let polSelect = function (currentSelect, secondSelect) {
        currentSelect.classList.add("calculating__choose-item_active");
        secondSelect.classList.remove("calculating__choose-item_active");
    };

    let inputValueLimit = function (value, max) {
        if (value > max) {
            return max;
        } else {
            return value;
        }
    };

    let InputFunction = function (currentInput, valuee, max) {
        currentInput.value = inputValueLimit(currentInput.value, max);
        valuee = currentInput.value;
        return valuee;
    };

    btnFitnesNode.addEventListener("click", function (evt) {
        for (let i = 0; i < tabheaderList.length; i++) {
            tabheaderList[i].classList.remove("tabheader__item_active");
        }
        evt.target.classList.add("tabheader__item_active");
        for (let i = 0; i < tabcontentList.length; i++) {
            tabcontentList[i].classList.add("visually-hidden");
        }
        FitnessContent.classList.remove("visually-hidden");
    });

    btnPremiumNode.addEventListener("click", function (evt) {
        for (let i = 0; i < tabheaderList.length; i++) {
            tabheaderList[i].classList.remove("tabheader__item_active");
        }
        evt.target.classList.add("tabheader__item_active");
        for (let i = 0; i < tabcontentList.length; i++) {
            tabcontentList[i].classList.add("visually-hidden");
        }
        PremiumContent.classList.remove("visually-hidden");
    });

    btnPostNode.addEventListener("click", function (evt) {
        for (let i = 0; i < tabheaderList.length; i++) {
            tabheaderList[i].classList.remove("tabheader__item_active");
        }
        evt.target.classList.add("tabheader__item_active");
        for (let i = 0; i < tabcontentList.length; i++) {
            tabcontentList[i].classList.add("visually-hidden");
        }
        PostContent.classList.remove("visually-hidden");
    });

    btnBalanceNode.addEventListener("click", function (evt) {
        for (let i = 0; i < tabheaderList.length; i++) {
            tabheaderList[i].classList.remove("tabheader__item_active");
        }
        evt.target.classList.add("tabheader__item_active");
        for (let i = 0; i < tabcontentList.length; i++) {
            tabcontentList[i].classList.add("visually-hidden");
        }
        BalanceContent.classList.remove("visually-hidden");
    });

    manSelect.addEventListener("click", function () {
        polSelect(manSelect, womanSelect);
        pol = 1;
        currentCalories.innerHTML = `${calc(pol, height, weight, age, currentActivity)}`;
    });

    womanSelect.addEventListener("click", function () {
        polSelect(womanSelect, manSelect);
        pol = 2;
        currentCalories.innerHTML = `${calc(pol, height, weight, age, currentActivity)}`;
    });

    heightInput.addEventListener("input", function () {
        height = InputFunction(heightInput, height, 250);
        currentCalories.innerHTML = `${calc(pol, height, weight, age, currentActivity)}`;
    });

    weightInput.addEventListener("input", function () {
        weight = InputFunction(weightInput, weight, 450);
        currentCalories.innerHTML = `${calc(pol, height, weight, age, currentActivity)}`;
    });

    ageInput.addEventListener("input", function () {
        age = InputFunction(ageInput, age, 150);
        currentCalories.innerHTML = `${calc(pol, height, weight, age, currentActivity)}`;
    });

    document.querySelector("#activity").addEventListener("click", function (evt) {
        if (evt.target.classList.contains("calculating__choose-item-activity")) {
            activityList.forEach(function (item) {
                item.classList.remove("calculating__choose-item_active");
            });
            evt.target.classList.add("calculating__choose-item_active");
            currentActivity = evt.target.id;
            currentCalories.innerHTML = `${calc(pol, height, weight, age, currentActivity)}`;
        }
    });

    modalBtn.addEventListener("click", function () {
        modalNode.style.display = "block";
    });

    modal2Btn.addEventListener("click", function () {
        modalNode.style.display = "block";
    });

    modalCloseBtn.addEventListener("click", function () {
        modalNode.style.display = "none";
    });

    feedBackBtn.addEventListener("click", function () {
        name = document.querySelector("#nameInput").value;
        phone = document.querySelector("#phoneInput").value;
        alert(`Мы перезваним вам, ${name}, ваш номер: ${phone}`);
    });

    nextBtn.addEventListener("click", function () {
        if (counter < 4) {
            counter++;
            counterNode.innerHTML = `0${counter}`;
            amplituda += document.querySelector(".offer__slide").offsetWidth;
            slide.style.transform = `translateX(-${amplituda}px)`;
        }
    });

    prevBtn.addEventListener("click", function () {
        if (counter > 1) {
            counter--;
            counterNode.innerHTML = `0${counter}`;
            amplituda -= document.querySelector(".offer__slide").offsetWidth;
            slide.style.transform = `translateX(-${amplituda}px)`;
        }
    });

    const deadline = new Date(2024, 6, 20);

    function countdownTimer() {
        const diff = deadline - new Date();
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        dayss.innerHTML = days < 10 ? "0" + days : days;
        hourss.innerHTML = hours < 10 ? "0" + hours : hours;
        minutess.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        secondss.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }

    countdownTimer();
    setInterval(countdownTimer, 1000);
});