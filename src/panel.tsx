import React from 'react';
import ReactDOM from 'react-dom';

import Theme from './pages/theme';
import { LanguageSwitcher } from './components/common/LanguageSwitcher';

const dom = document.createElement('div');
dom.id = 'axhub-plugins-minimap';
document.body.appendChild(dom);
setTimeout(() => {
  ReactDOM.render(
    <div>
      <LanguageSwitcher className="sd-sd" style={{ display: 'none' }}></LanguageSwitcher>
      <Theme></Theme>
    </div>,
    dom
  );
}, 0);
