import * as yup from 'yup';

export const schemas =yup.object({
    Nombre: yup.string().required(),
    email: yup.string().email().required()
});
