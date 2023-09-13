import React from 'react';
import styles from "./login.module.scss";

import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';
const Login = () => {
  return (
    <section id='login'>
       <div className={styles.Login_wrapper}>
       <LoginLeft/>
        <LoginRight/>
       </div>
    </section>
  )
}

export default Login