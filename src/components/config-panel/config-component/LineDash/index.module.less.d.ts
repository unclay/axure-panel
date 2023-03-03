declare namespace IndexModuleLessNamespace {
  export interface IIndexModuleLess {
    content: string;
    "content-item": string;
    "content-item-label": string;
    inline: string;
    "line-dash": string;
  }
}

declare const IndexModuleLessModule: IndexModuleLessNamespace.IIndexModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleLessNamespace.IIndexModuleLess;
};

export = IndexModuleLessModule;
