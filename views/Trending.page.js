/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { HeaderPages, HeaderTitle, MovieContainer } from '@styles/Film.Trending';
import React from 'react';
import TrendingMovieDisplay from './Trending.Movie.Display';

const TrendingPage = ({data}) => {
    return (
        <>
        <HeaderPages>
            <HeaderTitle>
                Trending Movies
            </HeaderTitle>
        </HeaderPages>
        <MovieContainer>
            {data.map(tranding => (
            <TrendingMovieDisplay key={tranding.id} {...tranding} />
            ))}
        </MovieContainer>
        </>


    );
}

TrendingPage.defaultProps = {
    data: [],
  }

export default TrendingPage;
