import React from 'react'

const FilmInfo = ({cardInfo}) => {
  const promoEp1 = "https://images-na.ssl-images-amazon.com/images/I/51o6zchqOFL._SY450_.jpg"
  const promoEp2 = "https://images-na.ssl-images-amazon.com/images/I/51u4eDvof5L.jpg"
  const promoEp3 = "https://images-na.ssl-images-amazon.com/images/I/51OvwcE6BdL.jpg"
  const promoEp4 = "https://images-na.ssl-images-amazon.com/images/I/51tYqdoRx4L.jpg"
  const promoEp5 = "https://images-na.ssl-images-amazon.com/images/I/51cv2AvxOML.jpg"
  const promoEp6 = "https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL._SY450_.jpg"
  const promoEp7 = "https://images-na.ssl-images-amazon.com/images/I/71P30QVnE3L._SY550_.jpg"

  const moviePosters = {
    1: promoEp1,
    2: promoEp2,
    3: promoEp3,
    4: promoEp4,
    5: promoEp5,
    6: promoEp6,
    7: promoEp7
  }


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
    <div className="poster">
      <img alt={cardInfo.episode_id} src={moviePosters[cardInfo.episode_id]} />
      <div className="poster-info">
        <h3>Episode {romanNums[cardInfo.episode_id]}: {cardInfo.title}</h3>
        <div>
          <ul>
            <li>Directed by {cardInfo.director}</li>
            <li>Featuring {mainChars}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilmInfo
