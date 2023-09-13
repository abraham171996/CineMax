import React from 'react'
import styles from '../../Login/login.module.scss'
import MacBookPro16 from '../../../assets/images/MacBookPro16.png'
const LoginLeft = () => {
  return (
    <div className={styles.login_Left}>
            <div className={styles.content}>
                    <h2>The biggest international and local film streaming</h2>
                    <span>Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.</span>
            </div>
           
            <img src={MacBookPro16} alt="" />
        
    </div>
  )
}

export default LoginLeft