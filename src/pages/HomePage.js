import filmList from '../filmList.json'
import {Link} from 'react-router-dom'

const HomePage = () => {

  return(
    <>
      <h1>Movie List</h1>
      <ul>
        {filmList.map((film) => {
          return(
            <li key={film.title}>
              <Link to={`/movie/${film.title}`}>
                {film.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HomePage