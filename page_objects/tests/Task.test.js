import { nanoid } from "nanoid";
import {  t  } from "testcafe";
import { URLS, taskName, taskDesc, taskNamed } from "../data/Constants";
import { STANDARD_USER } from '../data/Roles'
import inboxPage from "../pages/InboxPage";
import todayPage from '../pages/TodayPage'





fixture('Task feature test')
    .page `${URLS.LOGIN_URL}`

.beforeEach (async t => {
    await t.useRole(STANDARD_USER)
    await t.maximizeWindow()
    await t.setTestSpeed(0.5)
})


test.after(async t =>{
    await t
        .hover(todayPage.taskItem)
        .click(todayPage.moreTaskAction)
        .click(todayPage.deleTask)
        .click(todayPage.submitdeleTask)
})('As a user, I should be able to create a new task with valid name', async t => {
    await todayPage.createNewTask(taskName, taskDesc)
    await t.expect(todayPage.taskName.withText(taskName).exists).ok()

  }).meta(
    'type','smoke'
  )
  
test.after(async t =>{
    await t
        .hover(todayPage.taskItem)
        .click(todayPage.moreTaskAction)
        .click(todayPage.deleTask)
        .click(todayPage.submitdeleTask)
})('As a user, I should be able to create a new task with Different Name', async t => {
    await todayPage.createNewTask(taskName, taskDesc)
    const newTaskName = await todayPage.getLastTaskName()
    await t.expect(newTaskName).eql(taskName)

  })


test.after(async t =>{
        await t
            .hover(todayPage.taskItem)
            .click(todayPage.moreTaskAction)
            .click(todayPage.deleTask)
            .click(todayPage.submitdeleTask)
  })('As a user, I should be able to create a new task for tomorrow with valid name', async t => {
    await todayPage.createTomorrowTask(taskName, taskDesc)
    await t.click(inboxPage.inboxFilter)
    const newTaskName = await todayPage.getLastTaskName()
    await t.expect(newTaskName).eql(taskName)
  }).meta(
    'type','smoke'
  )


test.after(async t =>{

    for(let i=0; i < 10; i++){
        await t
            .hover(todayPage.taskItem)
            .click(todayPage.moreTaskAction)
            .click(todayPage.deleTask)
            .click(todayPage.submitdeleTask)
        }
  })('As a user, I should be able to create 10 tasks with different name', async t => {
    await todayPage.createNewTask(taskName, taskDesc)
    const newTaskName = await todayPage.getLastTaskName()
    await t.expect(newTaskName).eql(taskName)
    for(let i = 1; i <= 9; i++) {       
        await todayPage.createTasks(taskName + nanoid(), taskDesc)
        await t.expect(todayPage.taskName.withText(taskName).exists).ok()
    }
  })

