import { Selector, t  } from "testcafe";
import { CREDENTIALS, URLS, INVALIDCREDENTIALS } from "../data/Constants";
import loginPage from '../pages/LoginPage'
import todayPage from "../pages/TodayPage";
import { STANDARD_USER } from '../data/Roles'




fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`


test('As a user, I should not be able to log in successfully by providing invalid credentials', async t => {

        await loginPage.submitLoginForm(INVALIDCREDENTIALS.INVALID_USER.EMAIL, INVALIDCREDENTIALS.INVALID_USER.PASSWORD)
        await t.expect(loginPage.errorMessage.innerText).contains('Wrong email or password.')
        
}).meta(
    'type','smoke'
  )

test('As a user, I should not be able to log in successfully by providing invalid email', async t => {

    await loginPage.submitLoginForm(INVALIDCREDENTIALS.INVALID_USER.INVALIDEMAIL, INVALIDCREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains('Invalid email address.')
    
})

test('As a user, I should not be able to log in successfully by providing Blank Password', async t => {

    await loginPage.submitLoginEdgeCase(INVALIDCREDENTIALS.INVALID_USER.EMAIL)
    await t.expect(loginPage.errorMessage.innerText).contains('Blank password.')
    
})
    

test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL, CREDENTIALS.STANDARD_USER.PASSWORD)
        await t.expect(todayPage.todayTitle.innerText).contains('Today')
}).meta(
    'type','smoke'
  )



test('As a user, I should be able to log in successfully by providing valid credentials (With ROLE)', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(todayPage.todayTitle.innerText).contains('Today')
}).meta(
    'type','smoke'
  )