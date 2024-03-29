import { useContext } from 'react'
import UserContext from '../context/User'
import ChatsContext from '../context/Chats'
import API from '../app/API'

const Out = () => {
  const { setUser } = useContext(UserContext)
  const { setOpenChats } = useContext(ChatsContext)

  const signOut = async() => {
    await API.get('/sign/out')
      .then(() => {
        setOpenChats([])
        localStorage.clear()
        setUser(null)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <button tabIndex={0} onClick={signOut} className="sign-out">
      Sign out
    </button>
  )
}

export default Out