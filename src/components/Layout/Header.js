import React, { useEffect, useState } from 'react'
import HamMenu from '../../../assests/HeaderIcons/menu.svg'
import Close from '../../../assests/HeaderIcons/close.svg'
import Logo from '../../../assests/HeaderIcons/wired-lineal.gif'
import Search from '../../../assests/HeaderIcons/searchIcon.gif'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../../utils/menuSlice'
import { addQueries, queries } from '../../../utils/suggestions'

const HamburgerMenu = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(store => store.menu.isMenuOpen)
  return(
  <div className='flex header:justify-center justify-around items-center header:px-16 ml-4'>
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
   const [showList, setShowList] = useState(false)

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
    const response = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + userQuery)
    const json = await response?.json()
    setShowQueries(json[1])
    dispatch(addQueries({
        [userQuery] : json[1]   
    }))
    console.log('API CALL');
   }

   return(
    <div className='flex items-center pr-10 header:pr-0 justify-start header:justify-end header:px-2 header:w-2/3 px-2'>

        <div className='w-full flex justify-end'>

        <div className='header:w-[50%] w-[80%] flex flex-col items-end justify-end relative'>

         <input onFocus={() => {setShowList(true)}}
         onBlur={() => {setShowList(false)}}
         className='bg-gray-200 w-full font-bold py-1.5 px-3 outline-none rounded-l-full text-lg' type='text' value={userQuery} placeholder='search' onChange={(e) => {setUserQuery(e.target.value)}}/>

         <ul className='absolute bg-gray-200 top-10 border-gray-300 w-full rounded-lg shadow-2xl'>
         
        {
        showList ?    
        showQueries.map(query => 
            <li onClick={() => {setUserQuery(query)}} key={query} className='font-bold border-t-2 border-gray-300 py-1.5 px-3 cursor-pointer hover:bg-slate-300 rounded-lg flex gap-5 items-center'> <img alt='searchIcon' src={Search} className='w-8 h-8'/>{query}</li>
        ) : " "
        }
        </ul>
         
        </div>

        <div className='w-[20%]'>
         <img alt='search' src={Search} className='w-10 h-10 bg-gray-300 border-l-black border rounded-sm p-1 cursor-pointer' />
        </div>
        </div>
    </div>
   )
}

const Header = () => {
   return(
    <nav className='flex justify-between w-full h-20'>
      <HamburgerMenu />
      <SearchBar />
    </nav>
   )
}
export default Header