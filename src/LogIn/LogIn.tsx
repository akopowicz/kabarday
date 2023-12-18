import { useFormik, FormikProps } from 'formik';
import { InferType, string, object } from 'yup';
import TextField from '@mui/material/TextField';
import supabase from '../supabase/supabase';
import { useDispatch } from "react-redux";
// import { LoggedPerson } from '../Panel/LoggedPerson/LoggedPerson';
// import { RootState } from '../Redux/store';
import { useState } from 'react';
import { loginStatus } from '../Redux/sessionSlice';
import { UserRole, userRole } from "../Redux/userSlice";
import { useNavigate } from 'react-router-dom';

type LoginFormValuesType = { login: string, password: string };

const yupSchema = object({
  login: string().required("Pole wymagane"),
  password: string().required("Pole wymagane"),
});

type FormValues = InferType<typeof yupSchema>;

const FormInput = ({
  formik,
  accessor,
  label,
  type,
}: {
  formik: FormikProps<FormValues>;
  accessor: keyof FormValues;
  label: string;
  type?: string;
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
      />
    </div>
  );
};

export const LogIn = () => {
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
 
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const setifPersonisLogged = async (userId: string) => {

    const { data: user, error } = await supabase
      .from('users')
      .select()
      .eq('id', userId)

    if (!error && user) {
      console.log(user[0].role)
      dispatch(userRole(user[0].role as UserRole))

      dispatch(loginStatus(true))

      if (user[0].role === "admin") {
        navigate("/panel")
      } else if (user[0].role === "customer") {
        navigate("/customer-panel")
      } 
      
    }

  }

  const logIn = async (values: LoginFormValuesType) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.login,
      password: values.password
    })

    if (error) {

      return <p>Wrong login or password</p>
    }

    setifPersonisLogged(data.user.id)
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      logIn(values)
    },
  });

  return (
    <div>
       <form onSubmit={formik.handleSubmit}>
        <FormInput formik={formik} accessor='login' label='login' />
        <FormInput formik={formik} accessor='password' label='hasło' type={showPassword ? "text" : "password"} />
        <p onClick={handleClickShowPassword}>Pokaż hasło</p>
        <button type='submit'>Log In</button>
      </form>
    </div >
  );
}