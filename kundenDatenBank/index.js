async function getUsersData() {
    const response = await fetch("http://localhost:3000/users")
    if (response.status !== 200) {
        throw new Error(response.status);
    }
    const users = await response.json();
    return users;
}
const list = document.querySelector("ul")
async function init(){
    try{
        const users = await getUsersData()
            users.forEach((user => {
            console.log(user);
            const listElement = document.createElement("li");
            const name = document.createElement("h3")
            name.innerText =`${user.last_name}, ${user.first_name}`;
            const info = document.createElement("p");
            info.innerHTML = `id: ${user.id}, email: ${user.email}, ip Adress: ${user.ip_address}`;
            list.appendChild(listElement);
            listElement.appendChild(name);
            listElement.appendChild(info);
        }))

    }catch(error) {
        console.log(error);
    }
}
init();
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    async function newUser () {
        try {
            const user = JSON.stringify(form.elements.newUser.value);
            console.log(user);
            const users = await getUsersData();
            const newUsers = {...users, user};
            const response = await fetch("http://localhost:3000/users",{method: "POST", body: JSON.stringify(newUsers)});
            if (response.status !== 201) {
                throw new Error(`POST nicht erfolgreich. Wir haben Status ${response.status} bekommen.`)
            }

        }catch(error) {
            console.log(error)
        }

    }
    newUser()
    form.reset();
})



