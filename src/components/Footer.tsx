import React from 'react'
import pkg from '../../package.json'
const Footer = () => {
    return (
        <React.Fragment>
            <footer className="bg-white shadow  dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://funkyfunction.vercel.app/" className="hover:underline">funkyFunctions™</a>. All Rights Reserved.
                    </span>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">v {pkg.version}</span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        {/* <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li> */}
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>

    )
}

export default Footer