import React from 'react'
import styles from '../../Register/register.module.scss'
import MacBookPro18 from '../../../assets/images/MacBookPro18.png'
const RegisterLeft = () => {
  return (
    <div className={styles.register_Left}>
    <div className={styles.content}>
            <h2>Offers ad-free viewing of high quality</h2>
            <span>Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.</span>
    </div>
   
    <img src={MacBookPro18} alt="" />

</div>
  )
}

export default RegisterLeft