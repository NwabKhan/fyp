import {Route, Navigate} from 'react-router-dom'
import {useUserAuthContext} from '../context/UserAuthContet'

const PrivateRoute = ({component:Component, ...rest})=>{
  const {user} = useUserAuthContext()

  return (
    <Route
      {...rest}
      render={props => {
        return user?.emailVerified ? <Component {...props} /> : <Navigate to='/login' />
    }}>
    </Route>
  )
}

export default PrivateRoute