# react-template

webpack5 + react18

## feature

- [x] webpack5
- [x] react18
- [x] babel
- [x] dll
- [x] common config
- [x] typescript
- [x] less
- [x] css modules
- [x] dev server
- [x] build to dist
- [ ] build to source
- [ ] router
- [ ] router history mode


## 依赖迭代

```bash
pnpm i react@18 react-dom@18
pnpm i webpack@5 webpack-cli@5 webpack-dev-server@4 -D
pnpm i html-webpack-plugin html-webpack-tags-plugin copy-webpack-plugin -D
pnpm i cross-env -D
pnpm i typescript ts-loader -D
pnpm i @types/react @types/react-dom -D
pnpm i css-loader style-loader postcss-loader postcss autoprefixer -D
pnpm i less less-loader -D
pnpm i typings-for-css-modules-loader -D
pnpm i babel-loader @babel/core @babel/plugin-transform-typescript -D
```

+ html-webpack-plugin
  + html
+ html-webpack-tags-plugin
  + assets（css、js、img...）
+ copy-webpack-plugin
  + copy files(prod dll)

+ style-loader
  + css-js to style
+ css-loader
  + css to css-js
+ postcss-loader
  + css to css-tree(AST)
+ @teamsupercell/typings-for-css-modules-loader (extend of css-loader)
  + css to (css-js and *.d.ts)


