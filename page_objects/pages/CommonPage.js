import { Selector, t } from "testcafe";

class CommonPage{
    constructor(){

        this.mainMenuButton = Selector('button.top_bar_btn:nth-child(1)')
        this.homeIcon = Selector('div.left_control > button.top_bar_btn:nth-child(2)')
        this.searchInput = Selector('.quick_find__input')
        this.addQuickButton = Selector('#quick_add_task_holder')
        this.menuUserButton = Selector('.settings_btn')
        this.productivityButton = Selector('.top_completed_holder_open')
        this.helpButton = Selector('#help_btn')
        this.notificationsButtons = Selector('.notifications_btn')

        this.addProjectButton = Selector('button[data-track="navigation|projects_quick_add"]')
        this.projectName = Selector('#edit_project_modal_field_name')
        this.projectBoard = Selector('.edit_project_modal__board_preview')
        this.projectList = Selector('.edit_project_modal__list_preview')
        this.submitProject = Selector ('.ist_button_red')
        this.projectSwitch = Selector ('.reactist_switch')
        this.projectSection = Selector ('.clickable.menu_clickable.indent_1.current')
        this.projectDropdownCoolor = Selector ('button[type="button"].color_dropdown_toggle')
        this.projectColor = Selector ('li:nth-child(17) > span.color_dropdown_select__name')
        this.projectOptionMenu = Selector ('button[aria-label="Project options menu"]')
        this.projectDeleteButton = Selector ('.project_view_menu > .icon_menu_item:nth-child(15)')
        this.projectSubmitDelete = Selector('.confirm_dialog__actions > button:nth-child(1)')




    }
    createNewProject = async projectNamed => {
        await t
            .click(this.addProjectButton)
            .typeText(this.projectName, projectNamed, { paste : true })
            .click(this.projectSwitch)
            .click(this.projectDropdownCoolor)
            .click(this.projectColor)
            .click(this.projectBoard)
            .click(this.submitProject)
      }
}

export default new CommonPage


// Selectores 

// > Unico, confiables, cortos...

//     1. Custom Attribute
//     2. #username - > ID
//     3. .username - > CLASS
//     4. [id="user-name"] -> CSS