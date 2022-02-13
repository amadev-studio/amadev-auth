//export default amadevAuth from './src/auth.ts';
import Auth from './src/scripts/auth'
import loginError from './src/scripts/loginError'
const auth = new Auth()
auth.login(null).catch((err: Error)=>{
  console.log(err)
  // censé retourner "Hello world"
})
