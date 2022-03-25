import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const TrendingMoviesDetails = () => {
    const router = useRouter();
    const trending_movies = useSelector(state => state.trending_movie);
    return (
        <React.Fragment>

        </React.Fragment>
    );
}

export default TrendingMoviesDetails;
