import React, {Fragment} from 'react';
import Header from "./components/Header.js"
import Characters from './components/Characters.js'

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