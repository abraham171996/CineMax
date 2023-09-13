import React, { useState } from 'react'
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from '../../Register/register.module.scss'
import Input from '../../../Atoms/Input/Input';
import Button from '../../../Atoms/Button/Button';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible ,AiOutlineEye} from 'react-icons/ai'
const RegisterRight = () => {
    const [showPassword,setSohwPassword] = useState(false)
    const [confirmPassword,setConfirmPassword] = useState(false)
    function handleShow(){
        setSohwPassword(!showPassword)
    }
    function handleConfirm(){
        setConfirmPassword(!confirmPassword)
    }
    const navigate = useNavigate();
    return (
        <div className={styles.register_Right}>
            <div className={styles.register_Right__top}>
                <h1>CineMax</h1>
            </div>
            <div className={styles.register_Right__bottom}>
                <h2>Register</h2>
                <Formik
                    initialValues={{ name: '', email: '', password: '',confirmPassword:""}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.name) {
                            errors.name = 'Required'
                        }
                        if(!values.password){
                            errors.password = 'Required'
                        }
                        if(!values.confirmPassword){
                            errors.confirmPassword = 'Required'
                        }else if(values.confirmPassword !== values.password){
                            errors.confirmPassword = 'Password must be same'
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting ,resetForm}) => {
                        localStorage.setItem('registrationData', JSON.stringify(values));
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            resetForm();
                            navigate('/login')
                            
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
                                text="Full Name"
                                htmlFor="name"
                                placeholder="Enter your name"
                            />


                            {errors.email && touched.email && (
                                <span className={styles.error_message}>{errors.email}</span>
                            )}
                            <Input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                text="Email Address"
                                htmlFor="email"
                                placeholder="Enter your email address"
                            />
                            <div className={styles.regstrPas}>
                            {errors.password && touched.password && (
                                <span className={styles.error_message}>{errors.password}</span>
                            )}
                            <Input
                                type={showPassword ? "text" :"password"}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                text="Password"
                                htmlFor="password"
                                placeholder="Enter your password"
                            />
                            {
                                       !showPassword ? <AiOutlineEyeInvisible onClick={handleShow}/>:<AiOutlineEye onClick={handleShow}/>
                                    }
                            </div>
                            <div className={styles.regstrPas}>
                            {errors.confirmPassword && touched.confirmPassword && (
                                <span className={styles.error_message}>{errors.confirmPassword}</span>
                            )}
                            <Input
                                type={confirmPassword? "text" :"password"}
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                text="Confirm Password"
                                htmlFor="confirmPassword"
                                placeholder="Enter your password"
                            />
                            {
                                       !confirmPassword ? <AiOutlineEyeInvisible onClick={handleConfirm}/>:<AiOutlineEye onClick={handleConfirm}/>
                                    }
                            </div>
                            <div className={styles.registerBtn}>
                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                                <div className={styles.forBackLogin}>
                                    <span>Already have an account?<Link to="/login">Login</Link></span>
                                </div>
                            </div>

                        </form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default RegisterRight