import * as yup from 'yup';

const validationSchema = yup.object({
  childs: yup.number()
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer("Must be more than 0"),
  kids: yup.number()
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer(),
  teens: yup.number()
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer(),
  adults: yup.number()
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer(),
});

export default validationSchema