import React from 'react';
import logo from './assets/sm.png';


const App: React.FC = () => {
    return (
        <div className="container">
            <h1>Добро пожаловать!</h1>
            <img src={logo} alt="Пример картинки" />
        </div>
    );
};

export default App;
