import React, { useState } from 'react'
import styles from '../../Login/login.module.scss'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineEyeInvisible ,AiOutlineEye} from 'react-icons/ai'
import Input from '../../../Atoms/Input/Input'
import Button from '../../../Atoms/Button/Button'
import { Formik } from 'formik';
const LoginRight = () => {
    const [showPassword,setSohwPassword] = useState(false)

    function handleShow(){
        setSohwPassword(!showPassword)
    }
    const navigate = useNavigate();
    function handleLogin (values){
        const userData = JSON.parse(localStorage.getItem('registrationData'));
        const storedPassword = isNaN(userData.password) ? userData.password : parseInt(userData.password);
        const enteredPassword = isNaN(values.password) ? values.password : parseInt(values.password);
    
        if (userData.name === values.name && storedPassword === enteredPassword) {
            alert('Login successful!');
            navigate('/')
        } else {
            alert('Please register first.');
        }
    }
    return (
        <div className={styles.login_Right}>
            <div className={styles.login_Right__top}>
                <h1>CineMax</h1>
            </div>
            <div className={styles.login_Right__center}>
                <h2>Hey there, welcome back</h2>
                <Link to="https://www.google.com/"><FcGoogle /> Login with Google</Link>
                <Link to="https://www.facebook.com/"><FaFacebookF className={styles.facebook} /> Login with Facebook</Link>
                <div className={styles.text}>
                    <hr />
                    <span>Or login with</span>
                    <hr />
                </div>
            </div>
            <div className={styles.login_Right__bottom}>
                <div className={styles.input_group}>
                    <Formik
                        initialValues={{ name: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            if(!values.password){
                                errors.password = 'Required';
                            }else if(values.password.length<5){
                                errors.password = 'Password length must be more than 5';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting,resetForm }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                 resetForm()
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                {errors.name && touched.name && (
                                <span className={styles.error_message}>{errors.name}</span>
                            )}
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder="Enter your name"
                                    htmlFor="name"
                                    text="Full Name"
                                />

                                {errors.password && touched.password && (
                                <span className={styles.error_message}>{errors.password}</span>
                            )}
                                <div className={styles.passwordInpt}>
                                    <Input
                                        type={showPassword ? "text" :"password"}
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Enter your password"
                                        htmlFor="password"
                                        text="Password"
                                    />
                                    {
                                       !showPassword ? <AiOutlineEyeInvisible onClick={handleShow}/>:<AiOutlineEye onClick={handleShow}/>
                                    }
                                </div>
                                <div className={styles.resetPassword}>
                                    <Link>Forgot Password</Link>
                                </div>

                                <div className={styles.loginBtn}>
                                    <Button type="submit" onClick={()=>handleLogin(values)} disabled={isSubmitting}>
                                        Login
                                    </Button>
                                    <div className={styles.forRegister}>
                                        <span>Don’t have an account? <Link to="/register">Register</Link></span>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>



                </div>

            </div>
        </div>
    )
}

export default LoginRight