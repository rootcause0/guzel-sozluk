import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
    return (
        <>
            <div className="wrapper border-t-4 border-green-500 border-b-2 border-b-gray-200">
                <div className="flex justify-evenly">
                    <div className="flex justify-center items-center left-upper gap-20 p-3">
                        <Link to="/">
                            <img className="w-60 h-8" alt="logo" src='https://ekstat.com/img/new-design/eksisozluk_logo.svg'></img>
                        </Link>
                        <div className="hidden md:flex items-center w-full">
                            <input className="border border-green-500 p-1 text-gray-500 dark:text-slate-200 text-md h-2/3 w-72 focus:outline-none" placeholder="başlık, #entry, @yazar"></input>
                            <button className="flex justify-center items-center bg-green-500 text-white" style={{ height: '30px' }}>
                                <IconSearch stroke={1}></IconSearch>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-end gap-5 items-center hover:cursor-pointer">
                        <Link className="dark:hover:text-gray-200" to={'login'} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <span className="text-black-200 mr-3">giriş</span>
                        </Link>
                        <span>kayıt ol</span>
                    </div>
                </div>
                <div className="flex bottom-nav justify-center items-center gap-20 font-extrabold pb-5">
                    <span className="text-sm text-gray-700 hover:cursor-pointer dark:text-slate-400">
                        gündem
                    </span>
                    <span className="text-sm text-gray-700 hover:cursor-pointer dark:text-slate-400">
                        debe
                    </span>
                    <span className="text-sm text-gray-700 hover:cursor-pointer dark:text-slate-400">
                        sorunsallar
                    </span>
                    <span className="text-sm text-gray-700 hover:cursor-pointer dark:text-slate-400">
                        #spor
                    </span>
                    <span className="text-sm text-gray-700 hover:cursor-pointer dark:text-slate-400">
                        #ilişkiler
                    </span>
                </div>
            </div>

        </>
    )
}

export default Navbar;