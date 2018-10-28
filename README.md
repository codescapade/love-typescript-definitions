# LÖVE 2D Typescript Definition Files
![Usage GIF](https://media.giphy.com/media/8rEiqcM9BldxRmSMgW/giphy.gif)
[![LOVE](https://img.shields.io/badge/L%C3%96VE-11.1-EA316E.svg)](http://love2d.org/)

Provides Typescript definitions to use with [Typescript to Lua](https://github.com/Perryvw/TypescriptToLua) for LÖVE 2D.

These definitions are transpiled from the [love-api](https://github.com/love2d-community/love-api).

Typescript supports many features that Lua lacks (such as classes) and has very useful packages to use with modern text editors.

See the [Wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for more information regarding setup, features and editor information.

## Usage
```bash
# Install the tstl transpiler
npm install -g typescript-to-lua

# Clone this repo (or download and extract a zip from the releases page)
git clone https://github.com/hazzard993/love-typescript-definitions.git
```
Create `main.ts`.
Create a `tsconfig.json` in your project folder, consider the options below for it.
```js
{
    "compilerOptions": {
        "baseUrl": ".",     // For resolving require(...) paths
        "noLib": true       // Prevents the use and auto-complete suggestions from non-lua libraries
    },
    "files": [
        "main.ts"           // You can swap this out with *.ts later when more files are made
    ],
    "include": [
        "../love-typescript-definitions/include/*.d.ts"		// Definitions for LÖVE 2D
    ]
}
```
Make sure to at least include the `include` folder from this repo.

Run `tstl -p tsconfig.json` within your project's directory to compile your project to Lua. Use `--luaLibImport none` if you don't want `-- Lua Library Imports` at the top of your generated Lua files.

## Build Dependencies
- [Moonscript](https://moonscript.org)
- [Lua 5.3.4](https://www.lua.org/download.html)

## Building and Cleaning
```bash
npm run         # See all npm commands
npm run init    # Prepare for build
npm run build   # Build dist/_G.d.ts
npm run clean   # Clean out generated files
```
