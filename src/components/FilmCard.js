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
        <div className="right-card">
          <FilmInfo cardInfo={leftCardInfo} />
        </div>
      </div>
    )
  }
}

export default FilmCard

// <table border="1" cellpadding="5" cellspacing="5" width="100%"
// style="background        color:white;">
// <tr>
//      <th>Header Name1</th>
//      <th>Header name2</th>
// </tr>
// <tr>
//     <td>Row 1 Column 1</td>
//     <td>Row 2 Column 2</td>
// </tr>
// <tr>
//     <td>Row 2 Column 1</td>
//     <td>Row 2 Column 2</td>
// </tr>
//
// </table>
