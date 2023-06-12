import { signInWithGoogle} from '../../firebase';

const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle}>
                Sign in with Google account
            </button>

        </div>    
    )
}


export default Login;