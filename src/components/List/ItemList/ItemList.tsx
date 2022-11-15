import React from 'react'
import styles from './ItemList.module.css'

type TProps = {
  children: React.ReactNode
}

export const Itemlist:React.FC<TProps> = ({children}) => {
  return (
    <li className={styles.itemList}>
      {children}
    </li>
  )
}
