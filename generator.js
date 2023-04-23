import { faker } from '@faker-js/faker';

const generateFakeEmail = () => {
    //Generate a random email
    const email = faker.internet.email();
    //Return the email
    return email;
}

export {generateFakeEmail};