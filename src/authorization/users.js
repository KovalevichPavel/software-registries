let users = [{name: '123', pass: '123'}];

function AddUser(...props) {
    users.push({
        name: props[0].name,
        pass: props[0].pass
    });
}

function GetUsers() {
    return users;
}

export {AddUser, GetUsers};