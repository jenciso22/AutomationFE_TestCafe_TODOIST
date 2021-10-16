import dotenv from 'dotenv'
import { nanoid } from 'nanoid';
dotenv.config()


export const URLS = {
    LOGIN_URL: 'https://todoist.com/users/showlogin'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        EMAIL: process.env.STANDARD_USER_EMAIL,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    }
}

export const INVALIDCREDENTIALS = {
    INVALID_USER: {
        EMAIL: process.env.INVALID_USER_EMAIL,
        PASSWORD: process.env.INVALID_USER_PASSWORD,
        INVALIDEMAIL: process.env.INVALIDEMAIL_USER_EMAIL,
        INVALIDPASSWORD: process.env.INVALIDPASSWORD_USER_PASSWORD
        
    }
}

export const taskName = 'New Project ' + nanoid();
export const taskNamed = 'New Project '
export const taskDesc = 'The New Task created by William '
export const projectNamed = 'New Project ' + nanoid();