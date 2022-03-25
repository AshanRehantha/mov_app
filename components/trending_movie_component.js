import React from 'react';
import { useSelector } from 'react-redux';

const TrendingMovieComponent = () => {
    const trending_movies = useSelector(state => state.trending_movie);
    return (
        <div>
            
        </div>
    );
}

export default TrendingMovieComponent;
