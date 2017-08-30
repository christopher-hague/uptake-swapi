import React from 'react'

const FilmCard = ({cardInfo}) => {
  const promo = "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SY550_.jpg"
  // style="float: right;"

  const mainChars = cardInfo.main_chars.map(char =>
    char.name
  ).join(", ")

  const romanNums = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII"
  }

  return (
    <div className="Film-Card">
      <img alt={cardInfo.episode_id} src={promo} />
      <h1>Episode {romanNums[cardInfo.episode_id]}: {cardInfo.title}</h1>
      <div>
        <ul>
          <li>Director: {cardInfo.director}</li>
          <li>Main Characters: {mainChars}</li>
        </ul>
      </div>
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
