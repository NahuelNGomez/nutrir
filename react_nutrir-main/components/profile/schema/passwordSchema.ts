import * as yup from 'yup';

const characterLengthMsg = 'La constraseña debe tener por lo menos 8 caracteres'
const characterMaxLengthMsg = 'La constraseña no puede tener más de 32 caracteres'
const requiredMsg = 'La contraseña es requerida'

const passwordSchema = yup.object().shape({
  new_password1: yup
    .string()
    .min(8, characterLengthMsg)
    .max(32, characterMaxLengthMsg)
    .required(requiredMsg),
  new_password2: yup
    .string()
    .min(8, characterLengthMsg)
    .max(32, characterMaxLengthMsg) 
    .required(requiredMsg)
    .oneOf([yup.ref('new_password1'), null], 'Las contraseñas deben ser iguales'),
});

export default passwordSchema