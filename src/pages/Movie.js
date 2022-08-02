import { useParams } from 'react-router-dom'
// import filmList from '../filmList.json'

const Movie = () => {

  const params = useParams()


  return(
    <>
      <h1>Title: {params.title}</h1>
      <h3>Director: {params.director}</h3>
      <h3>Stars</h3>
      <ul>

      </ul>
    </>
  )
}


export default Movie