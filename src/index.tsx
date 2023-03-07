// import React from 'react';
// import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/style.less';

import Theme from './pages/theme';
import { LanguageSwitcher } from './components/common/LanguageSwitcher';

const App = () => {
  const onThemeChange = (config) => {
    console.log(config);
  };
  return (
    <div>
      <LanguageSwitcher className="sd-sd"></LanguageSwitcher>
      <div>

      </div>
      <div>
        <Theme onThemeChange={onThemeChange}></Theme>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
);
// const root = createRoot(document.querySelector('#app'));
// root.render(<div>
//   <div>'webpack5 + react18'</div>
//   <Test1></Test1>
//   <Test2></Test2>
//   <Test3></Test3>
//   <Theme></Theme>
// </div>);
