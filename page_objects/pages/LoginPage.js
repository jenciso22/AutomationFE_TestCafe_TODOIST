import { Selector, t  } from "testcafe";

class LoginPage{
    constructor(){

        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn')
        this.errorMessage = Selector('div.error_msg > span:nth-child(2)')

    }

    async submitLoginForm(email, password){
        await t
        .typeText(this.emailInput, email)
        .typeText(this.passwordInput, password)
        .click(this.loginButton)
    }
    async submitLoginEdgeCase(email){
        await t
        .typeText(this.emailInput, email)
        .click(this.loginButton)
    }

}

export default new LoginPage




// Selectores 

// > Unico, confiables, cortos...

//     1. Custom Attribute
//     2. #username - > ID
//     3. .username - > CLASS
//     4. [id="user-name"] -> CSS