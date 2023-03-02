import { faker } from '@faker-js/faker/locale/en_US';


export const  newUser = () =>  {
    let first_name = faker.name.firstName()
    let last_name = faker.name.lastName()
    let email = 'testerbhaai+1@gmail.com'
    let password = '12345678'

    return {
        first_name,
        last_name,
        email,
        password
    }
}
