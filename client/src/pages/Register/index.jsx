import React from 'react'
import RegisterLeft from './RegisterLeft'
import RegisterRight from './RegisterRight'
import styles from './register.module.scss'
const Register = () => {
  return (
    <section id='register'>
        <div className={styles.RegisterWrapper}>
            <RegisterLeft/>
            <RegisterRight/>
        </div>
    </section>
  )
}

export default Register