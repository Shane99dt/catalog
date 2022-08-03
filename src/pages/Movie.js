import { useState } from 'react'
import { useParams } from 'react-router-dom'
import filmList from '../filmList.json'

const Movie = () => {

  const params = useParams()
  const [film] = useState(filmList[params.name-1])

  return(
    <>
      <h1 className='text-center film-title pt-3'>{film.title}</h1>
      <section className='d-flex flex-column align-items-center justify-content-center'>
        <img className="col-8 col-md-4 col-lg-3 film-image my-3" src={film.image} alt="Card image cap"/>
        <div className='col-8 text-white'>
          <h3>Directed by: {film.director}</h3>
          <h3>Stars</h3>
          <ul>
            {film.stars.map((star) => {
              return(
                <li key={star}>{star}</li>
                )
              })}
          </ul>
          <h3>Description</h3>
          <p>{film.description}</p>
        </div>
      </section>
    </>
  )
}


export default Movie