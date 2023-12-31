import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer feature-card`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p>
            <span className={`text-gradient font-poppins font-medium text-[18px]leading-[23.4px] mr-2`}> Get</span>
            
          </p>
          <img src={arrowUp} alt="arrow"  className='w-[23px] h-[23px] object-contain'/>
        </div>
        <p>
            <span className={`text-gradient font-poppins font-medium text-[18px]leading-[23.4px] `}> Started</span>
          </p>

      </div>
      
    </div>
  )

export default GetStarted