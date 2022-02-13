import React, {Fragment} from 'react';
import Header from "./components/Header.js"
import Characters from './components/Characters.js'
import './App.scss';
import './components/Header.css'
import './components/Characters.css'

const App = () => {
    return(
        <Fragment>
            <Header
                title = "Rick and Morty API"
            />
            <Characters/>
        </Fragment>
    );
}

export default App;