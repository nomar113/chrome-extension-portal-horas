
// setTimeout(() => { login() }, 3000);
setTimeout(() => { clickApontamentoDiario() }, 3000);
setTimeout(() => { selectCurrentYear() }, 10000);
setTimeout(() => { selectCurrentMouth() }, 10000);

function login() {
    document.getElementById("ext-gen197").value = "68254";
    document.getElementById("ext-gen196").value = "162";
    document.getElementById("ext-gen191").click();
}

function clickApontamentoDiario() {
    document.getElementsByClassName("workareaItem mobileObjIndex1")[0].click();
}

function selectCurrentYear() {

    document.getElementById("ext-gen273").click()
    let yearOptions = document.getElementsByClassName("x-combo-list-item");
    yearOptions[yearOptions.length - 1].click();

}

function selectCurrentMouth() {

    document.getElementById("ext-gen448").click();
    let mouthsOptions = document.getElementsByClassName("x-combo-list-item");
    setTimeout(() => {
        mouthsOptions[mouthsOptions.length - 1].click();
    }, 4000)
}