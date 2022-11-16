import React, { useEffect } from 'react'
import { Card } from '../../components/Card/Card'
import { Itemlist } from '../../components/List/ItemList/ItemList'
import { List } from '../../components/List/List'
import Pagination from '../../components/Pagination/Pagination'
import { Preloader } from '../../components/Preloader/Preloader'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { deleteUser, filtredUser, getUsers, setCurrentPage, subscribe } from '../../store/actions/actionUsers'
import { selectors } from '../../store/selectors'
import classNames from 'classnames'
import styles from './UsersPage.module.css'
import { ErrorMessage } from '../../components/ErrorForm/ErrorForm'

export const UsersPage: React.FC = () => {

  const dispatch = useAppDispatch()

  //get data from storage
  const { page, per_page, total, data } = useAppSelector(selectors.getUsers)
  const {error, folllowData, isFilter, loading} = useAppSelector(selectors.users)

  let dataUser = isFilter ? folllowData : data

  // subscribe and unfollow a user
  const subscribeUser = (id: number) => {
    dispatch(subscribe(id))
  }

  //  delete card user
  const deleteUserItem = (id: number) => {
    dispatch(deleteUser(id))
  }

  // filters users by likes
  const filterFollow = () => {
    dispatch(filtredUser())
  }

  // change page
  const changePage = (currentPage: number) => {
    dispatch(setCurrentPage(currentPage))
  }

  const buttonFilterFollowClass = classNames({
    [styles.filterButton]: true,
    [styles.filterButtonActive]: isFilter
  })

  // user data request
  useEffect(() => {
    dispatch(getUsers(page))
  }, [page])

  return (
    <section className={styles.usersPage}>

      {error && <ErrorMessage message={error} />}

      {loading && <Preloader />}

      <button onClick={filterFollow} className={buttonFilterFollowClass}>Filter follow</button>

      <List className={styles.userList}>
        {dataUser.map(item => {
          return (
            <Itemlist key={item.id}>
              <Card
                id={item.id}
                avatar={item.avatar}
                email={item.email}
                first_name={item.first_name}
                last_name={item.last_name}
                follow={item.follow}
                key={item.email}
                buttonFollow={subscribeUser}
                buttonDelete={deleteUserItem}
              />
            </Itemlist>
          )
        })}
      </List>
      <Pagination
        className={styles.paginationUser}
        currentPage={page}
        pageSize={per_page}
        totalCount={total}
        onPageChange={changePage}
      />
    </section>
  )
}
