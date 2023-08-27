import { Injectable } from "@angular/core";

@Injectable()
export class ValidationMsgService {

    public getValidationMsg(validationId: string): string {
        return this.errorMessages[validationId];
    }

    private errorMessages: any = {
        'username-required-msg': "Username is a required field",
        'username-minlength-msg': "Username must have 4 characters",

        'first_name-required-msg': "Firstname is a required field",
        'first_name-minlength-msg': "Firstname must have 3 characters",

        'last_name-required-msg': "Lastname is a required field",
        'last_name-minlength-msg': "Lastname must have 3 characters",

        'email-required-msg': 'Email is a required field',
        'email-email-msg': 'Email is not in valid format',

        'user_type-required-msg': 'User type is a required field',

        'password-required-msg': 'Password type is a required field',
        'password-pattern-msg': "Lastname must have at least one number and one letter",

        'repeat_password-required-msg': 'Repeat password is a required field',
        'repeat_password-notMatch-msg': "Passwords should be the same",
    }

}