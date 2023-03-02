import { faker } from '@faker-js/faker/locale/en_US';


export const  newUser = () =>  {
    let first_name = faker.name.firstName()
    let last_name = faker.name.lastName()
    let email = '[your@email.com]]'
    let password = '[yourpassword]'

    return {
        first_name,
        last_name,
        email,
        password
    }
}
