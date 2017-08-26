import React from 'react'
import FavChar from '../components/FavChar'
import LeastFavChar from '../components/LeastFavChar'

const MiscContainer = ({favChar, leastFavChar}) => {
  return (
    <div className="ui segment">
      <FavChar favChar={favChar} />
      <LeastFavChar leastFavChar={leastFavChar} />
    </div>
  )
}

export default MiscContainer
