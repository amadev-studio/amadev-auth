//export default amadevAuth from './src/auth.ts';
import { Auth } from './scripts/auth'
import { loginError } from './scripts/loginError'
const auth = new Auth()
auth.login(null)