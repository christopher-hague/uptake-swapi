import React from 'react'
import FilmInfo from './FilmInfo'

const FilmCard = () => {
  const promo = "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SY550_.jpg"

  return (
    <div className="Film-Card">
      <FilmInfo />
      <FilmInfo />
    </div>
  )
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
