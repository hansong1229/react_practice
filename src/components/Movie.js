import PropTypes from "prop-types";
// 페이지를 이동할때 새로고침이 되는것을 막아줌
import { Link } from "react-router-dom";
function Movie({medium_cover_image, title,summary,genres,id}){
    return (      
    <div>
        <img src={medium_cover_image} alt={title} />
        <h2>
            {/* href 대신 Link를 이용해 페이지 새로고침 없이 이동가능  ${표시를 이용해서 파라미터 전달} 백틱 쓰는것도 잊지말기*/}
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul> 
          {genres.map((g) => (<li key={g}>
            {g}
            </li>))}
        </ul>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;