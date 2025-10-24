import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        setTheme('dark')
    }
    return (
        <div >
            <button className='bg-blue-500 rounded m-5 py-3 px-2 cursor-pointer border-solid' onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default Button