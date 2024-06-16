import {  emailResetFields, loginFields, merenderoFields, passwordResetFields, profileFields, registerFields, stateFormBase } from "../types/forms";

export function initialFormState<T>(Fields:T):stateFormBase<T> {

  type errorFieldsType<T> = {[Property in keyof T] : Boolean}


  //@ts-ignore
  const error_fields = Object.keys(Fields).reduce<errorFieldsType>((err,field:keyof T) => {
    err[field] = false;
    return err;
  },{});

  //@ts-ignore
  const field_rules = Object.keys(Fields).reduce((rules:any,field:keyof T) => {
    rules[field] = Fields[field];
    return rules;
  },{});

   //@ts-ignore
   const field_values = Object.keys(Fields).reduce((values:any,field:keyof T) => {
    values[field] = '';
    return values;
  },{});

 return {
    fields: field_values,
    errors: error_fields,
    rules: field_rules,
    processing: { validate: true, loading: false,finish:false },
  };
 
}

export const statesForms = {
  register: initialFormState<typeof registerFields>(registerFields),
  login: initialFormState<typeof loginFields>(loginFields),
  email_reset: initialFormState<typeof emailResetFields>(emailResetFields),
  password_reset: initialFormState<typeof passwordResetFields>(passwordResetFields),
  profile:initialFormState<typeof profileFields>(profileFields),
  merendero:initialFormState<typeof merenderoFields>(merenderoFields)
};

