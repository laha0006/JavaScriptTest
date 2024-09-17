const baseUrl = "https://jsonplaceholder.typicode.com/users"

async function fetchUsers() {
    return (await fetch(baseUrl)).json()
}

function displayUsers(users) {
    let displayElem = document.getElementById("showUser")
    let fragment = document.createDocumentFragment()
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    let headName = document.createElement("th")
    headName.textContent = "name"
    let headPhone = document.createElement("th")
    headPhone.textContent = "phone"
    tr.appendChild(headName)
    tr.appendChild(headPhone)
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement("tbody")
    users.forEach(user => {
        let tr = document.createElement("tr")
        let userName = document.createElement("td")
        userName.textContent = user.name
        let userPhone = document.createElement("td")
        userPhone.textContent = user.phone
        tr.appendChild(userName)
        tr.appendChild(userPhone)
        tbody.appendChild(tr)
    })
    table.appendChild(tbody)
    displayElem.innerHTML = ""
    displayElem.appendChild(table)
}

async function getAllUsers(e) {
    // e.preventDefault();
    console.log("GET ALL USERS");
    let getAllButton = document.getElementById("getAllUsersBtn");
    getAllButton.disabled = true
    let users = await fetchUsers()
    displayUsers(users);
    getAllButton.disabled = false
}


function getUserId() {
    return document.getElementById("userId").value
}

async function fetchUser(userId) {
    let userUrl = baseUrl + `/${userId}`;
    return (await fetch(userUrl)).json();
}

function displayUser(user) {
    console.log("inside display user!")
    let userElem = document.getElementById("showUser");
    let userText = `
        Name: ${user.name} <br>
        Phone: ${user.phone} <br><br>
        <b>Address</b> <br>
        Street: ${user.address?.street} <br>
        City: ${user.address?.city} <br>
        Zip: ${user.address?.zipcode} <br>
        Geo (lat, lng): ${user.address?.geo?.lat}, ${user.address?.geo?.lng || "N/A"}
    `;
    userElem.innerHTML = userText;
}

async function getUserString(e) {
    // e.preventDefault();
    let getButton = document.getElementById("getUser");
    getButton.disabled = true;
    let userId = getUserId();
    let user = await fetchUser(userId);
    displayUser(user);
    console.log("after await")
    getButton.disabled = false;
}

function checkRes(res) {
    if (res.ok) {
        return true;
    } else {
        return false;
    }
}

async function getUserLol() {
    let res = await fetch(baseUrl);
    let json = await res.json();
    console.log(json)
}