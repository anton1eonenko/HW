interface Login {
    login: string,
    password: string
}
const obj: Login = {
    login: '', 
    password: ''
}

function login(login:string, password: string) {
    obj.login = login
    obj.password = password
}
function validate(login:string, password: string, object: Login ) {
    if(object.login === login && object.password === password ){
        console.log('Добро пожаловать')
    }else(
        console.log('Ошибка')
    )
    
}
login('Anton', '123')
validate('Anton', '123', obj)
