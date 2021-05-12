const myTitle = document.getElementById("myName");
const myUrl = document.getElementById("myUrl");

let number = 0;

storage.addEventListener("click", function () {
    localStorage.setItem(myTitle.value, myUrl.value);
    myTitle.innerHTML = "";
    myUrl.innerHTML = "";
    location.reload();
});

for (i = 0; i < localStorage.length; i++) {

    let storageKey = localStorage.key(i);

    let createTrBody = document.createElement("tr");
    createTrBody.setAttribute("id", "bodyTable" + i);
    tBody.appendChild(createTrBody);

    let bodyTableArray = document.querySelectorAll(`tr[id=bodyTable${i}]`);

    let createIdElement = document.createElement("th");
    createIdElement.setAttribute("scope", "row");
    createIdElement.innerHTML = i;
    bodyTableArray.forEach(element => {
        element.appendChild(createIdElement);
    });

    let createTitle = document.createElement("td");
    createTitle.innerHTML = storageKey;
    bodyTableArray.forEach(element => {
        element.appendChild(createTitle);
    });

    let createSup = document.createElement("td");
    createSup.innerHTML = `<button id="supprimerStorage${i}" type="button" class="btn btn-primary btn-sm">Supprimer</button>`
    bodyTableArray.forEach(element => {
        element.appendChild(createSup);
    });

    let selectButtonSup = document.querySelectorAll(`button[id=supprimerStorage${i}]`);

    selectButtonSup.forEach(element => {
        element.addEventListener("click", function () {
            localStorage.removeItem(storageKey);
            bodyTableArray.forEach(element => {
                tBody.removeChild(element);
            });
        })
    });
}