import React, { Component } from 'react';
import './MainPage.css';
import SearchBox from '../../components/SearchBox';
import Movies from '../../components/Movies';
import Favorites from '../../components/Search';

function MainPage () {
        return (
            <div className="main">
                <main className="main__content">
                    <section className="main__main-section">
                        <div className="main__search-box">
                            <SearchBox />
                        </div>
                        <div className="main__movies">
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites />
                    </aside>
                </main>
            </div>
        );
    }

 
export default MainPage;