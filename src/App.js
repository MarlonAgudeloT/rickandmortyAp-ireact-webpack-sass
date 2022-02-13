import "./App.scss"
import React,{Fragment} from 'react';
import Header from "./components/Header "
import Characters from './components/Characters'

function App (){
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