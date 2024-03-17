import React from 'react'
import { Appbar } from './Appbar'
import  {Balance} from './Balance'
import { Users } from './User'
const Dashboard = () => {
  return (
    <>
        <Appbar></Appbar>
        <Balance value = {3000}></Balance>
        <Users></Users>
    </>
  )
}

export default Dashboard