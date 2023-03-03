import React, { useState } from 'react';
import { ConfigPanel } from '../components/config-panel';
import { ConfigProps } from '../types';
import _ from 'lodash';
import { RightOutlined } from '@ant-design/icons';
// import { DARK_THEME, LIGHT_THEME } from '../theme/default';

export default () => {
  /** 主题 */
  const [theme, setTheme] = useState({});
  /** 其他和主题无关的配置项 */
  const [config, setConfig] = useState({});
  /** 侧边栏是否缩进状态 */
  const [configPanelCollapse, setConfigPanelCollapse] = useState(false);

  /**
   * 处理配置变化, 如：seriesCount
   * @param args
   */
  const onConfigChange = (value: Partial<ConfigProps>) => {
    setConfig(_.merge({}, config, value));
  };

  /**
   * 处理主题变化
   * @param value
   */
  const onThemeChange = (value: any) => {
    setTheme(_.merge({}, theme, value));
  };

  let winHeight = 0;
  // 获取窗口高度
  if (window.innerHeight)
    winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight;
  // 通过深入 Document 内部对 body 进行检测，获取窗口大小
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    winHeight = document.documentElement.clientHeight;
  }
  
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 300, height: window.innerHeight, overflowY: 'auto' }}>
      <RightOutlined
        className="sider-trigger"
        onClick={() => setConfigPanelCollapse(old => !old)}
      />
      <ConfigPanel config={{ ...config, theme }}
      onChange={onConfigChange}
      onThemeChange={onThemeChange}></ConfigPanel>
    </div>
  );
};