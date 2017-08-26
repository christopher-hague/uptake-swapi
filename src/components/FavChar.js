import React from 'react'

const FavChar = ({favChar}) => {

  return (
    <div className="ui segment">
      <h1>Favorite Character</h1>
      <li>{favChar.name}</li>
    </div>
  )
}

export default FavChar
