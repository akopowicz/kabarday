import { useFormik, FormikProps } from 'formik';
import { InferType, string, object, ref } from 'yup';
import TextField from '@mui/material/TextField';

import supabase from '../supabase/supabase';
import { useState } from 'react';


const yupSchema = object({
    name: string().min(3, "Nazwa musi zawierać przynajmniej 3 znaki").required("Pole wymagane"),
    surname: string().min(3, "Nazwisko musi zawierać przynajmniej 3 znaki").required("Pole wymagane"),
    login: string().email("Pole musi być mailem").min(5, "Nazwa ulicy musi zawierać przynajmniej 5 znaków").required("Pole wymagane"),
    password: string().min(6, "Hasło musi składać się zconamkniej 6 znaków").required("Pole wymagane"),
    repeatpassword: string().oneOf([ref('password')], 'Passwords must match')
        .min(6, "Hasło musi składać się zconamkniej 6 znaków").required("Pole wymagane"),
    email: string().email("Pole musi być mailem").min(5, "Nazwa ulicy musi zawierać przynajmniej 5 znaków").required("Pole wymagane"),
});

export type User = InferType<typeof yupSchema>;

const FormInput = ({
    formik,
    accessor,
    label,
    type,
    InputProps,
}: {
    formik: FormikProps<User>;
    accessor: keyof User;
    label: string;
    type: string;
    InputProps?: object;
}) => {
    return (
        <div>
            <TextField
                error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
                helperText={
                    formik.touched[accessor] && formik.errors[accessor]
                        ? formik.errors[accessor]
                        : null
                }
                id={accessor}
                label={label}
                name={accessor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[accessor]}
                type={type}
                inputProps={InputProps}
            />
        </div>
    );
};

export default function RegisterComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);
    const formik = useFormik<User>({
        initialValues: {
            name: '',
            surname: '',
            login: '',
            password: '',
            repeatpassword: '',
            email: '',
        },
        validationSchema: yupSchema,
        onSubmit: async (values) => {

            const { data, error } = await supabase.auth.signUp({
                email: values.login,
                password: values.password
            })
            console.log({
                data,
                error
            })
            if (!error && data.user && data.user.id) {
                const { data: user, error: publicDbError } = await supabase
                    .from('users')
                    .insert([
                        { id: data.user.id, name: values.name, surname: values.surname, login: values.login, email: values.email, role: "customer" },
                    ])
                    .select()
                console.log({ user, publicDbError })

            }


        },
    });



    return (
        <form onSubmit={formik.handleSubmit}>
            <FormInput formik={formik} accessor='name' type="text" label="Imię" />

            <FormInput formik={formik} accessor='surname' type="text" label="Nazwisko" />
            <FormInput formik={formik} accessor='email' type="email" label="E-mail" />
            <FormInput formik={formik} accessor='login' type="text" label="login" />
            <FormInput formik={formik} accessor='password' type={showPassword ? "text" : "password"} label="Hasło" />
            <p onClick={handleClickShowPassword}>Pokaż hasło</p>
            <FormInput formik={formik} accessor='repeatpassword' type={showRepeatPassword ? "text" : "password"} label="Powtórz hasło" />
            <p onClick={handleClickShowRepeatPassword}>Pokaż hasło</p>

            <button type='submit'>Zarejestruj się</button>
        </form>
    );
}