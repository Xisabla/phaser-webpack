# Phaser Webpack Boilerplate

This is a personnal, minimalistic template for building games using Phaser with Webpack

## Features

- [Phaser](https://www.npmjs.com/package/phaser) through npm
- [Webpack](https://www.npmjs.com/package/webpack) for the build
- [ESLint](https://www.npmjs.com/package/eslint) using standardjs with some custom rules
- [Husky](https://www.npmjs.com/package/husky) for custom git hooks
- Build for prodution or development
- DevServer with [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
- Ready to start, all is configured !

## Getting Started

Clone the repo:

```bash
git clone https://github.com/Xisabla/Phaser-Webpack
```

Install the dependencies:

```bash
npm install
```

Build/Serve:

```bash
npm run build   # Production build
npm run dev     # Developement build
npm run serve   # DevServer, auto build (dev)
```

## Configuration

### ESLint

- Rules is in the *.eslintrc.json*
- Manage ignored files: *.eslintignore*
- Turn on/off ESLint on build in webpack (this [here](#webpack-eslint))

### Webpack

Global configuration: *./config/config.js*

| Variable                 | Values                                    | Description                                                    | Default                                  |
| ------------------------ | ----------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| `env.mode`               | (`string`) `"production"`/`"development"` | Webpack compilation mode                                       | `"development"`                          |
| `dev.hints`              | (`boolean`) `true`/`false`                | Show Webpack hints on build                                    | `true`                                   |
| `dev.useEslint`          | (`boolean`) `true`/`false`                | Use ESLint and lint on build ([more details](#webpack-eslint)) | `true`                                   |
| `dev.server.host`        | (`mixed`/`string`) host                   | Webpack's devServer host                                       | `"localhost"`                            |
| `dev.server.port`        | (`int`) port                              | Webpack's devServer port                                       | `3000`                                   |
| `dev.watch`              | (`boolean`) `true`/`false`                | Watch for file modification                                    | `true` (dev only)                        |
| `build.assetsRoot`       | (`string`) path                           | Path where the output files will be build                      | `path.resolve(__dirname, '../', 'dist')` |
| `build.assetsPublicPath` | (`string`)                                | Public path of the assets from the root                        | `'/dist/'`                               |
| `build.outputBundle`     | (`string`) filename                       | Name of the bundle file                                        | `"bundle.js"`                            |
| `build.outputVendor`     | (`string`) filename                       | Name of the vendor file                                        | `"vendor.js"`                            |

#### Webpack ESLint

I decided to use ESLint directly into webpack, so as to lint the source files on build. But you can turn this behavior off by settings `dev.useEslint` at false.

You can also configure the ESLint Webpack module into *./config/webpack.base.conf.js* by editing the `buildEslintModule` function with [the documentation](https://github.com/webpack-contrib/eslint-loader)

Default options:

- `fix`: `true`
- `emitWarning`: `true`