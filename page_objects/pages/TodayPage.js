import { Selector, t } from "testcafe";



class TodayPage{
    constructor(){
        //TASK
        this.todayTitle = Selector ('h1:nth-child(1) > span.simple_content:nth-child(1)')
        this.addTask = Selector ('.plus_add_button')
        this.newTaskName = Selector ('div.DraftEditor-editorContainer > div')
        this.taskDescription = Selector ('.task_editor__description_field')
        this.submitTask = Selector('.reactist_button')
        this.dateButton = Selector('.item_due_selector')
        this.tomorrowButton = Selector ('button[data-track="scheduler|date_shortcut_tomorrow"]')
        this.taskName = Selector('.task_content')
        this.taskItem = Selector('li.task_list_item')
        this.moreTaskAction = Selector('.more_actions_button')
        this.deleTask = Selector('.danger_menu')
        this.submitdeleTask = Selector ('.ist_button_red')


    }
    createNewTask = async (taskName, taskDesc) => {
        await t
          .click(this.addTask)
          .typeText(this.newTaskName, taskName, { paste : true })
          .typeText(this.taskDescription, taskDesc, { paste : true })
          .click(this.submitTask)
      }
    createTasks = async (taskName, taskDesc) => {
        await t
          .typeText(this.newTaskName, taskName, { paste : true })
          .typeText(this.taskDescription, taskDesc, { paste : true })
          .click(this.submitTask)
      }
    createTomorrowTask = async (taskName, taskDesc) => {
        await t
          .click(this.addTask)
          .typeText(this.newTaskName, taskName, { paste : true })
          .typeText(this.taskDescription, taskDesc, { paste : true })
          .click(this.dateButton)
          .click(this.tomorrowButton)
          .click(this.submitTask)
      }

      getTasksCount = async () => {
        await t.hover(this.taskItem)
        return this.taskItem.count
      }

      getLastTaskName = async () => {
        const tasksCount = await this.getTasksCount()
        return this.taskName.nth(tasksCount - 1).innerText
      }


}

export default new TodayPage




// Selectores 

// > Unico, confiables, cortos...

//     1. Custom Attribute
//     2. #username - > ID
//     3. .username - > CLASS
//     4. [id="user-name"] -> CSS