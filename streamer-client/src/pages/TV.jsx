import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, getGenres } from '../store/index';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import TVSlider from '../components/TVSlider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';


export default function Movies() {
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate();
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({ type: "tv" }))

        }
    }, [genresLoaded]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser.uid);
        else navigate("/login");
    });
    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectGenre genres={genres} type='tv' />
                {
                    movies.length ? <TVSlider movies={movies} /> : <NotAvailable />
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    .data{
        margin-top:8rem;
        .not-available{
            text-align:center;
            color:white;
            margin-top:4rem;
        }
    }
`
