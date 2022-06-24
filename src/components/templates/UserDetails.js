import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../store/slices/UserSlice'
import { getDebtByUserId } from '../../store/slices/DebtSlice'
import Button from '../atoms/Button'

const UserDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { userSelected } = useSelector(state => state.userState)
  const { debtsSelected } = useSelector(state => state.debtState)

  useEffect(() => {
    dispatch(getUserById(id))
    dispatch(getDebtByUserId(id))
  }, [])

  return (
    userSelected && (
      <article>
        <div className="flex flex-col justify-center">
          <div>
            <h1>{`${userSelected.first_name} ${userSelected.last_name}`}</h1>
            <h2>{userSelected.email}</h2>
          </div>
          <div className="flex flex-col flex-wrap justify-center gap-1">
            {debtsSelected &&
              debtsSelected.map(debt => (
                <div className="grid grid-cols-2" key={debt.id}>
                  <div className="grid-cols-10">{`${debt.amount} $`}</div>
                  <div className="grid-cols-2">
                    <div className="flex justify-between">
                      <Button type="secondary" size={'mini'} textSize={'xs'}>
                        Save
                      </Button>
                      <Button size={'mini'} textSize={'xs'} type="outline">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </article>
    )
  )
}

export default UserDetails
