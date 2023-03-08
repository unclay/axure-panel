import React, { useEffect, useState } from 'react';
import { ConfigPanel } from '../components/config-panel';
import { ConfigProps } from '../types';
import _ from 'lodash';
import { RightOutlined } from '@ant-design/icons';
import { DARK_THEME, LIGHT_THEME } from '../theme/default';
import './theme.less';

const DEFAULT_CONFIG: Omit<ConfigProps, 'theme'> = {
  seriesCount: 3,
  showAxisTitle: true,
};

export default (props: any = {}) => {
  /** 主题 */
  const [theme, setTheme] = useState(LIGHT_THEME);
  /** 其他和主题无关的配置项 */
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  /** 侧边栏是否缩进状态 */
  const [configPanelCollapse, setConfigPanelCollapse] = useState(false);

  useEffect(() => {
    props.onThemeChange && props.onThemeChange(config);
  }, [config]);

  /**
   * 处理配置变化, 如：seriesCount
   * @param args
   */
  const onConfigChange = (value: Partial<ConfigProps>) => {
    console.log(config);
    setConfig(_.merge({}, config, value));
  };

  /**
   * 处理主题变化
   * @param value
   */
  const onThemeChange = (value: any) => {
    const newTheme = _.merge({}, theme, value);
    setTheme(newTheme);
    props.onThemeChange && props.onThemeChange(newTheme);
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
    <div className={`antv-theme-panel ${configPanelCollapse ? 'sider-collapsed' : ''}`} style={{ height: window.innerHeight }}>
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