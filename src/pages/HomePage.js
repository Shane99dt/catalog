import filmList from '../filmList.json'
import {Link} from 'react-router-dom'

const HomePage = () => {

  return(
    <>
      <h1 className='text-center movies-title'>Movies</h1>
      <section className='d-flex flex-row flex-wrap justify-content-center'>

        {filmList.map((film) => {
          return(
            <>
              <div className="card col-6 col-sm-4 col-md-3 col-lg-3 m-2 pt-2">
                <img className="card-img-top" src={film.image} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="w-100 p-0 m-0 text-center">
                    <Link to={`/movie/${film.id}`}>
                    {film.title}
                    </Link>
                  </h5>
                </div>
              </div>

            </>
          )
        })}
      </section>
    </>
  )
}

export default HomePage