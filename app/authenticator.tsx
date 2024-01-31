
const MAX_USERNAME_LENGTH: number = 15
const MIN_USERNAME_LENGTH: number = 1
const MAX_PASSWORD_LENGTH: number = 20
const MIN_PASSWORD_LENGTH: number = 7



type Username = string & {__usernameBrand: 'username'}
type Password = string & {__passwordBrand: 'password'}
function createUsername(potentalUsername: string): Username | void {
    if(potentalUsername.length >= MIN_USERNAME_LENGTH && potentalUsername.length <= MAX_USERNAME_LENGTH) {
        return potentalUsername as Username
    }
    return
}
function createPassword(potentalPassword: string):Password | void {
    if(potentalPassword.length >= MAX_PASSWORD_LENGTH && potentalPassword.length <= MIN_PASSWORD_LENGTH) {
        return potentalPassword as Password
    }
    return
}
class Authenticator {
    isLogin: boolean

    constructor() {
        this.isLogin = false
    }
    login(username: Username, password: Password): boolean {
        // Check if Users Credentials check out with the back end.
        return false  // fixme
    }
}

export default Authenticator