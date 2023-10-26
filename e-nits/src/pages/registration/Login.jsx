import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/Mycontext'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import Loader from '../../components/loader/Loader';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState("password");
    const [hidepassword, setHidepassword] = useState("Show Password");

    // context api for loading 
    const context = useContext(myContext)
    const { loading, setLoading, Mode } = context;

    // here i am using navigate when login successful then we go to the home page
    const navigate = useNavigate();

    // function for show and hide password
    const showPwrd = () => {
        // if (type === "password") {
        //     setType('text');
        //     setHidepassword('Hide Password');

        // } else {
        //     setType("password");
        //     setHidepassword('Show Password');
        // }
        type==="password"? (setType('text'), setHidepassword('Hide Password')) :(setType("password"), setHidepassword('Show Password'))
    }

    const login = async () => {
        setLoading(true);
        try {
            const userDetails = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(userDetails)
            )
            toast.success("successfully login")
            setLoading(false);
            setEmail('')
            setPassword('')
            navigate('/') // here navigate is used for when we loged in navigate forward us to home page
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('email and password did not match')
            setEmail('')
            setPassword('')
        }

    }
    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type={type}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                {/* button for show and hide password */}
                {/* <button
                    onClick={showPwrd}
                    className=' bg-yellow-500 w-36 text-black font-bold  px-2 py-2 rounded-lg'>
                    {hidepassword}
                </button> */}

                {/* checkbox for show and hide password */}
                <div className="flex items-center mb-4">
                    <input onClick={showPwrd} id="default-checkbox" type="checkbox" value=""   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                    <label htmlFor="default-checkbox" style={{ color: Mode === 'dark' ? 'white' : '', }} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{hidepassword}</label>
                </div>
                <div className=' flex justify-center mb-3 py-3'>
                    <button
                        onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don&apos;t have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login