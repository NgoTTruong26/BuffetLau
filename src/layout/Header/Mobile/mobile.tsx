import styles from './mobile.module.scss'
import clsx from 'clsx'
import { useRef } from 'react'

interface Children {
  children: React.ReactElement
}

export default function Mobile({children}: Children) {

  const refCheckbox = useRef<HTMLInputElement>(null)
  const body = document.querySelector('body')
  

  const handleChangeCheckbox: React.ChangeEventHandler<HTMLInputElement> | undefined = (e: {target: HTMLInputElement}) =>{
  
   if ( e.target!.checked) {
      return body!.setAttribute('style','overflow:hidden')
   }
   
   return body!.removeAttribute('style')
   
  }


  return (
    <div className={styles.mobile}>
      <label htmlFor="input-nav-checkbox" className= {clsx("fa-solid fa-bars", styles.iconBars)}
      ></label>
      <input ref={refCheckbox} type="checkbox" 
      className={styles['input-nav-checkbox']} 
      id="input-nav-checkbox" 
      onChange={handleChangeCheckbox}
      />
      <label htmlFor="input-nav-checkbox" id="wrappMobile" className ={styles.wrapp}>
      </label>
      <div className={styles.content}>
        {children}
      </div>
    </div>
    
  )
}
