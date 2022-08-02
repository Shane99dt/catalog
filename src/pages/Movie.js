import { useParams } from 'react-router-dom'
import filmList from '../filmList.json'

const Movie = () => {

  const params = useParams()
  console.log(params)



  return(
    <>
      <h1>Title: {params.name}</h1>
      <h3>Director: {}</h3>
      <h3>Stars</h3>
      <ul>

      </ul>
    </>
  )
}


export default Movie