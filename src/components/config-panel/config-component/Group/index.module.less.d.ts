declare namespace IndexModuleLessNamespace {
  export interface IIndexModuleLess {
    content: string;
    "content-collapsed": string;
    group: string;
    inline: string;
  }
}

declare const IndexModuleLessModule: IndexModuleLessNamespace.IIndexModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleLessNamespace.IIndexModuleLess;
};

export = IndexModuleLessModule;