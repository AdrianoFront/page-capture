import { useEffect, useState } from 'react'

export default function Credits() {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    console.log('inicializado')
  }, [])

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await request.json()
      setUserList(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {userList.map((user, key) => {
        ;<div key={`user-${key}`}>(user.name</div>
      })}
    </div>
  )
}