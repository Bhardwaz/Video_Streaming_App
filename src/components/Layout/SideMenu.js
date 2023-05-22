import React from 'react'
import { useSelector } from 'react-redux'
import store from '../../../utils/store'

const SideMenu = () => {
  const isMenuOpen = useSelector(store => store.menu.isMenuOpen)
  if(!isMenuOpen) return null
  return (
    <div>SideMenu</div>
  )
}

export default SideMenu