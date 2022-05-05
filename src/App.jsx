import React from 'react';
// import Authorization from './Body/Aurhorization/Authorization';
// import Header from './Header/Header';

import style from "./App.module.scss";
import Body from './Body/Body';

function App() {
  return (
    <div className={style.app}>
      {/* <Header /> */}
      <Body />
    </div>
  );
}

export default App;
