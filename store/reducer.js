import { combineReducers } from "redux";
import RendingMovieReducer from '../Reducer/trendingMoviesReducer';

const rootReducser = combineReducers({
    trending_movie: RendingMovieReducer,
});

export default rootReducser;