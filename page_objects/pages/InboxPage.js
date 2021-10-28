import { Selector } from "testcafe";




class InboxPage{
    constructor(){

        this.inboxFilter = Selector ('#filter_inbox')

    }


}

export default new InboxPage