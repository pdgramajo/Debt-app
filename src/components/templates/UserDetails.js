import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DebtContext from '../../contexts/DebtContext'
import UserContext from '../../contexts/UserContext'
import Button from '../atoms/Button'

const UserDetails = () => {
  const { id } = useParams()
  const { selectedUser, getUsers, users, getUserById } = useContext(UserContext)
  const { debts, getDebtsByUserId } = useContext(DebtContext)

  useEffect(() => {
    if (users.length === 0) {
      getUsers()
    }
    if (!selectedUser) {
      getUserById(parseInt(id))
    }
    getDebtsByUserId(parseInt(id))
  }, [])

  return (
    selectedUser && (
      <article>
        <div className="flex flex-col justify-center">
          <div>
            <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
            <h2>{selectedUser.email}</h2>
          </div>
          <div className="flex flex-col flex-wrap justify-center gap-1">
            {debts &&
              debts.map(debt => (
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

/**    
 * <Card title={`${debt.amount} $`}>
                 
                 <div className="text-gray-700 text-base mb-4">
                    {debt.description}
                  </div>
                  <div className="flex justify-between">
                    <Button size={"mini"} textSize={"xs"}>Save</Button>
                    <Button size={"mini"} textSize={"xs"} type="outline">
                      Cancel
                    </Button>
                  </div> 
                </Card>
                 */
