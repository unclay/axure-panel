declare namespace IndexModuleLessNamespace {
  export interface IIndexModuleLess {
    "radio-button": string;
    "radio-group": string;
    "theme-style-switcher": string;
  }
}

declare const IndexModuleLessModule: IndexModuleLessNamespace.IIndexModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleLessNamespace.IIndexModuleLess;
};

export = IndexModuleLessModule;
