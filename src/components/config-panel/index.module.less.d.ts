declare namespace IndexModuleLessNamespace {
  export interface IIndexModuleLess {
    "ant-btn": string;
    btn: string;
    "color-group": string;
    "color-item": string;
    "color-palette-picker": string;
    "config-panel": string;
    "config-panel-title": string;
    "config-panel-title-container": string;
    "copy-btn": string;
    "export-btn": string;
    flex: string;
    "justify-between": string;
    operation: string;
    "title-icon": string;
  }
}

declare const IndexModuleLessModule: IndexModuleLessNamespace.IIndexModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleLessNamespace.IIndexModuleLess;
};

export = IndexModuleLessModule;
