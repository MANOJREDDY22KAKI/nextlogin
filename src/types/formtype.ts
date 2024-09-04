export interface FormData {
    firstName : string,
    lastName : string ,
    email : string ,
    address : string ,
    state : string,
    Country : string
    PhoneNumber : string,
    Password : string ,
    ConfirmPassword : string,
    Zip : string
}
// Define a LoginFormData type by picking specific fields from FormData
export type LoginFormData = Pick<FormData, 'email'  | 'Password'>;
