  import { statesForms } from "../constants/states";

export enum profileFields {
  user = "required",
  firstName = "required",
  lastName = "required",
  phone = "required",
  email = "required",
}

export enum merenderoFields {
  name = "required",
  street = "required",
  number = "required",
  between_street1 = "optional",
  between_street2 = "optional",
  province = "required"
}

export enum registerFields {
  user = "required",
  name = "required",
  phone = "required",
  email = "required",
  password = "required",
  exists_dinning_room = "required",
  dinning_room = "required"
};

export enum loginFields {
  cuil =  "required",
  password = "required",
};

export enum emailResetFields {
  email = "required"
};

export enum passwordResetFields {
  password = "required",
  confirm_password = "required",
  // token = "optional",
};

export type stateFormBase<T> = {
  fields: T | any;
  errors: T | any;
  rules: T | any; 
  processing: {
    validate: boolean;
    loading: boolean;
    finish:boolean;
  };
};

export type formBase = typeof statesForms;

export type SubmitForm = { token?: string; success?: boolean; errors: any, status?: number};

export enum ActionsForm {
  FETCH_FIELDS = "fetch_fields",
  FETCH_ERRORS = "fetch_errors",
  FETCH_PROCESS = "fetch_process",
}
