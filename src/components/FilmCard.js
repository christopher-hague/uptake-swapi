import React from 'react'
import FilmInfo from './FilmInfo'

const FilmCard = ({leftCardInfo, rightCardInfo}) => {

  if(leftCardInfo && rightCardInfo) {
    return (
      <div className="card">
        <div className="left-card">
          <FilmInfo cardInfo={rightCardInfo} />
        </div>
        <div className="right-card">
          <FilmInfo cardInfo={leftCardInfo} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="card">
        <div className="left-card">
          <FilmInfo cardInfo={leftCardInfo} />
        </div>
        <div className="right-card">
        </div>
      </div>
    )
  }
}

export default FilmCard
