import React, { useEffect, useState } from 'react'
import HamMenu from '../../../assests/HeaderIcons/menu.svg'
import Close from '../../../assests/HeaderIcons/close.svg'
import Logo from '../../../assests/HeaderIcons/wired-lineal.gif'
import Search from '../../../assests/HeaderIcons/searchIcon.gif'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../../utils/menuSlice'
import { addQueries, queries } from '../../../utils/suggestions'
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../../../utils/constants'
import { addQuery } from '../../../utils/searchSlice'
import { Link } from 'react-router-dom'
import { onSearch, toggleList } from '../../../utils/showListSlice'

const HamburgerMenu = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(store => store.menu.isMenuOpen)
  return(
  <div onClick={() => dispatch(toggleList())} className='flex header:justify-center justify-around items-center header:px-16 ml-4'>
    <div className='bg-black '>
     {isMenuOpen ? <img className='cursor-pointer' onClick={() => {dispatch(toggleMenu())}} alt='close' src={Close} />  : <img className='cursor-pointer' onClick={() => {dispatch(toggleMenu())}} alt='open' src={HamMenu} /> }
  </div>
  <div className='w-20 h-20 flex'>
    <img className='cursor-pointer' src={Logo} alt='logo' />
  </div>
  </div>
  )
}

const SearchBar = () => {
   const [userQuery, setUserQuery] = useState('') 
   const [showQueries, setShowQueries] = useState([])
   const showList = useSelector(store => store.list.isListOpen)
   const dispatch = useDispatch()
   const cache = useSelector(store => store.search)
   useEffect(() => {
    const timer = setTimeout(() => {
    if(cache[userQuery]){
     setShowQueries(cache[userQuery])
     console.log('fetching from cache');
    }
    else{
    getSuggestions()
    }
    }, 2000)

    return () => {
    clearTimeout(timer)
    }
   }, [userQuery])

   const getSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + userQuery)
    const json = await response?.json()
    setShowQueries(json[1])
    dispatch(addQueries({
        [userQuery] : json[1]   
    }))
   }
   
   const handleListClick = (query) => {
    setUserQuery(query)
    dispatch(addQuery(query))
   }

   return(
    <div className='flex items-center pr-10 header:pr-0 justify-start header:justify-end header:px-2 header:w-2/3 px-2'>

        <div className='w-full flex justify-end'>

        <div className='header:w-[50%] w-[80%] flex flex-col items-end justify-end relative'>

         <input onFocus={() => {dispatch(onSearch())}}
         className='bg-gray-200 w-full font-bold py-1.5 px-3 outline-none rounded-l-full text-lg' type='text' value={userQuery} placeholder='search' onChange={(e) => {setUserQuery(e.target.value)}}/>

      <ul className='absolute bg-gray-200 top-10 border-gray-300 w-full rounded-lg shadow-2xl z-10 '>   
      {
      showList ?    
      showQueries.map(query =>
        <Link to={'/results'} key={query}>
        <li
        onClick={() => handleListClick(query)} 
        className='font-bold border-t-2 border-gray-300 py-1.5 px-3 cursor-pointer hover:bg-slate-300 rounded-lg flex gap-5 items-center'> 
        <img alt='searchIcon' src={Search} 
        className='w-8 h-8'/> 
        {query}
        </li>
      </Link> 
      ) : " "
      }
        </ul>
        </div>

        <div className='w-[20%]'>
        <Link to={'/results'}> <img alt='search' src={Search} className='w-10 h-10 bg-gray-300 border-l-black border rounded-sm p-1 cursor-pointer' /> </Link>
        </div>
        </div>
    </div>
   )
}

const Header = () => {
   return(
    <nav className='flex justify-between w-full h-20 max-w-7xl mx-auto'>
      <HamburgerMenu />
      <SearchBar />
    </nav>
   )
}
export default Header