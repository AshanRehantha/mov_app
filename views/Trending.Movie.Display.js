/* eslint-disable @next/next/link-passhref */
import { TableGrid, TrendingImages, TrendingMovieTitle } from '@styles/Film.Trending';
import Link from 'next/link';
import React from 'react';

const TrendingMovieDisplay = ({poster_path, title, id, name}) => {
    return (
        <TableGrid>
            <TrendingImages src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
            <Link href={`/trending/${id}`} >
                <TrendingMovieTitle>{name === '' ? title : name}</TrendingMovieTitle>
            </Link>
        </TableGrid>
    );
}


TrendingMovieDisplay.defaultProps = {
    poster_path:'/h22eEPJpdS47JisaEPevdj48fVT.jpg',
    title: '',
    name: '',
}


export default TrendingMovieDisplay;
