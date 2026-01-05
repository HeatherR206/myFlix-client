import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m._id === movieId);

    if (!movie) return <div>Movie not found in database</div>;

    return (
        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <Card className="movie-view-card h-100 shadow-md custom-card-border">
                    <Card.Img variant="top" src={movie.imagePath} alt={movie.title} />
                    <Card.Body>
                        <Card.Title className="display-6"><strong>{movie.title}</strong></Card.Title>
                        <Card.Text className="mb-1 text-muted">
                            <strong>Release Date: </strong>
                            {new Date(movie.releaseDate).toLocaleDateString()}
                        </Card.Text>
                        <br />
                        <Card.Text>
                            <strong>Summary: </strong>{movie.summary}
                        </Card.Text>

                        <hr />

                        <div className="mb-2">
                            <strong>Genre: </strong>
                            <span>
                                {movie.genres?.map((g) => g.genreName).join(', ') || 'N/A'}
                            </span>
                        </div>

                        <div className="mb-2">
                            <strong>Director: </strong>
                            <span>
                                {movie.directors?.map((d) => d.directorName).join(', ') || 'N/A'}
                            </span>
                        </div>

                        <div className="mb-4">
                            <strong>Cast: </strong>
                            <span>
                                {movie.cast?.map((c) => c.castName).join(', ') || 'N/A'}
                            </span>
                        </div>
                        <br />

                        <Link to={`/`}>
                            <button 
                                variant="primary"   
                                className="back-button w-100"
                                style={{ cursor: "pointer "}}>
                                Back to Movies List
                            </button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imagePath: PropTypes.string,
        summary: PropTypes.string.isRequired,
        directors: PropTypes.arrayOf(PropTypes.shape({
            directorName: PropTypes.string.isRequired
        })).isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            genreName: PropTypes.string.isRequired
        })).isRequired
    }).isRequired,    
};