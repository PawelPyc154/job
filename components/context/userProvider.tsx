import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext<User | null>(null)

type UserType = 'employer' | 'candidate'

interface User {
  id: number
  type: UserType
}
const user1 = {
  id: 1,
  type: 'employer' as UserType,
}

const [user] = useState<User | null>(user1)

const UserProvider = () => <UserContext.Provider value={user}>userProvider</UserContext.Provider>

const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUser }
