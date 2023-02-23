import React from 'react'

const footer = ({length}) => {
    const today=new Date();
  return (
    <footer>Copyright &copy; {today.getFullYear()}. All rights reserved.<br />Number of posts:{length} { length===1?"item":"items" }</footer>
  )
}

export default footer