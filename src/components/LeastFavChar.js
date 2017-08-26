import React from 'react'

const LeastFavChar = ({leastFavChar}) => {

  return (
    <div className='ui segment'>
      <h1>Least Favorite Character</h1>
      <li>{leastFavChar.name}</li>
    </div>
  )
}

export default LeastFavChar
