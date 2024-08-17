import { Link } from "react-router-dom";
const Login = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col items-start pt-3 gap-5">
                <div className="flex justify-start w-full mb-3">
                    <span>giriş</span>
                </div>
                <div className="flex-col text-start">
                    <div className="mb-5">
                        <label htmlFor="email">e-mail adresi</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 h-10 p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">şifre</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 h-10 p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <label>
                        <input type="checkbox" id="rememberMe" className="mr-2" />
                        <span>unutma bunları sorucam sonra</span>
                    </label>
                    <div className="mt-3">
                        <button className="w-full p-2 bg-green-600 outline-none hover:outline-none border-0 hover:bg-green-700 focus:outline-none text-white">giriş yapmaya çabala</button>
                    </div>
                </div>
                <div className="flex flex-col text-start items-start justify-start">
                    <span className="font-bold text-lg mb-4">giremeyiş</span>
                    <Link className="text-sm hover:underline text-gray-300 hover:text-gray-300">şifremi unuttum</Link>
                    <Link className="text-sm hover:underline text-gray-300 hover:text-gray-300">kayıtlı kullanıcı olunası</Link>
                </div>
            </div>
        </>
    )
}

export default Login;