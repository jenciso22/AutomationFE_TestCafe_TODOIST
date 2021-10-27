import { URLS, projectNamed } from "../data/Constants";
import { STANDARD_USER } from '../data/Roles'
import commonPage from "../pages/CommonPage";





fixture('Project feature test')
    .page `${URLS.LOGIN_URL}`


.beforeEach(async t => {
    await t.useRole(STANDARD_USER)
    await t.setTestSpeed(.8)
})

test.after(async t =>{
    await t
        .click(commonPage.projectOptionMenu)
        .click(commonPage.projectDeleteButton)
        .click(commonPage.projectSubmitDelete)
        .wait(1500)

})('As a user, I should be able to create a New Project', async t => {
    await commonPage.createNewProject(projectNamed)
    await t.expect(commonPage.projectSection.withText(projectNamed).exists).ok()
}).meta(
    'type','smoke'
  )

