import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
              
function App() {
  return (
    <div className="app">
        <Header />
        <div className="ooo">
          <Navigation />
          <Main>
            <div className="ooo">
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
              <Advertisement />
          </Main>
        </div>
    </div>
  );
}
                
export default App;