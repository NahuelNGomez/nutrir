import React, { useReducer } from "react";
import buildReducer from "../reducers";
import {
  ActionsForm,
  stateFormBase,
  SubmitForm,
} from "../types/forms";
import { useAppCtx } from "../contexts/store";

export default function useForm<T>(initialState: stateFormBase<T>) {
  const reducer = buildReducer<T>(initialState);
  const [Form, dispatch] = useReducer(reducer, initialState);
  const { user, comedorSeleccionado } = useAppCtx()

  const defaultValues = (values: typeof Form.fields) => {
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...values },
    });
  }

  const updateFieldProps = (field: string, value: any) => {
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...Form.fields, [field]: value },
    });
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {

    // const fieldsvalues = { ...Form.fields, [e.target.name]: e.target.value }
    // console.log({fieldsvalues});
  
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...Form.fields, [e.target.name]: e.target.value },
    });
  };

  const validateFields = (): boolean => {


    const errors = Object.keys(Form.fields).reduce((err: any, field) => {
      err[field] = !Form.fields[field] && !Form.rules[field].includes('optional');
      return err;
    }, {});

    // console.log('errors',{errors});
    
    
    dispatch({
      type: ActionsForm.FETCH_ERRORS,
      payload: errors,
    });

    return Object.values(errors).reduce<boolean>(
      (valid, value) => (!valid ? false : !value),
      true
    );
  };

  const setProcess = ({ validate, loading, finish }: typeof Form.processing) => {
    dispatch({
      type: ActionsForm.FETCH_PROCESS,
      payload: { validate, loading, finish },
    });
  };

  const submit = async (
    e: React.FormEvent,
    action: string
  ): Promise<SubmitForm> => {

    
    e.preventDefault();
    
    // console.log(e);
    // console.log('submit passs!', e)
    

    return new Promise(async (resolve, reject) => {
      setProcess({ validate: true, loading: true, finish: false });

      if (validateFields()) {

    

        const infoUser = { ...Form.fields, userinfo: user ? user : null }

        const infoComedor = { ...Form.fields, userinfo: user ? user : null, comedorInfo: comedorSeleccionado ? comedorSeleccionado : null }

        const data = action === "/api/merendero/edit" ? infoComedor : infoUser

        const response = await fetch(action, {
          method: "POST",
          body: JSON.stringify(data)
        }).then((res) => res.json());

        // console.log('useForm response', { response });
        
        if (response.success) {
          resolve(response);

        } else {
          setProcess({ validate: false, loading: false, finish: false });

          if (response.errors) {
            dispatch({
              type: ActionsForm.FETCH_ERRORS,
              payload: response.errors,
            });
            reject({ errors: response.errors });
          } else {
            reject({ errors: {} });
          }
        }
      } else {
        setProcess({ validate: true, loading: false, finish: false });
        reject({ errors: {} });
      }
    });
  };

  const finishProcess = () => {
    setProcess({ validate: true, loading: false, finish: true });
  }
  return { ...Form, submit, updateField, updateFieldProps, defaultValues, finishProcess };
}
