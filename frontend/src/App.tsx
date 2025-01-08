import React from 'react'
import { UserList } from 'components/UserList'
import DataFetcher from 'components/DataFetcher'
import AddUser from 'components/AddUser'
import UpdateUser from 'components/UpdateUser'
export default function App() {
  return (
    <>
    <DataFetcher />
    <AddUser/>
    <UpdateUser/>
    </>
  )
}
