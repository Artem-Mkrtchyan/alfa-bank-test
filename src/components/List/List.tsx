import classNames from 'classnames'
import React from 'react'
import styles from './List.module.css'

type TProps = {
  children: React.ReactNode
  className: string
}

export const List:React.FC<TProps> = ({children, className}) => {
  return (
    <ul className={classNames({[styles.list] : true}, { [className]: className })}>
      {children}
    </ul>
  )
}
