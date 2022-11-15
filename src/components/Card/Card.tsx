import React from 'react'
import classNames from 'classnames'
import defaulImg from '../../assets/images/defaultImage.png'
import styles from './Card.module.css'

type TProps = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  follow: boolean
  buttonFollow: (id: number) => void
  buttonDelete: (id: number) => void
}

export const Card: React.FC<TProps> = (props) => {

  const buttonFollowClass = classNames({
    [styles.button]: true,
    [styles.buttonFollow]: props.follow
  })

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        {props.avatar ?
          <img className={styles.image} src={props.avatar} alt={props.first_name} />
          :
          <img className={styles.image} src={defaulImg} alt={props.first_name} />
        }
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.cardName}>{`${props.first_name} ${props.last_name}`}</h3>
          <p className={styles.contacts}>
            <span>Email:</span>
            <a href={`mailto: ${props.email}`}>{props.email}</a>
          </p>
        </div>
        <button onClick={() => props.buttonFollow(props.id)} type='button'  className={buttonFollowClass}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="inherit" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>
      <button onClick={() => props.buttonDelete(props.id)} type='button' className={styles.deleteCard}>Delete</button>
    </div>
  )
}
