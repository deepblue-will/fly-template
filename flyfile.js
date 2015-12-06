const config = require('./build_resource/config');
const browserSync = require('browser-sync').create();
const mainBowerFiles = require('main-bower-files');

export default function* () {
  yield this.start(["watch", "server"]);
}

export function* build() {
  yield this.start(["jade", "sass", "js", "asset"], {parallel: true});
}

export function* sass() {
  yield this
    .source(config.sass.src)
    .sass(config.sass.options)
    .postcss(config.postcss.options)
    .target(config.sass.target);
}

export function* js() {
  let bowerfiles = mainBowerFiles(config.mainBowerFiles.options);
  yield this.clear(config.js.target);
  yield this
    .source(...bowerfiles)
    .concat(config.js.concat)
    .target(config.js.target);
  yield this
    .source(config.js.src)
    .babel(config.js.options)
    .concat(config.js.concat)
    .target(config.js.target);
}

export function* jade() {
  yield this
    .source(config.jade.src)
    .jade(config.jade.options)
    .target(config.jade.target);
}

export function* asset() {
  yield this
    .source(config.asset.src)
    .target(config.asset.target)
}

export function* reload() {
  browserSync.reload();
}

export function* server() {
  browserSync.init(config.server.options);
}

export function* watch() {
  yield this.watch(config.jade.watch, ["jade", "reload"]);
  yield this.watch(config.sass.watch, ["sass", "reload"]);
  yield this.watch(config.js.watch, ["js", "reload"]);
  yield this.watch(config.asset.watch, ["asset", "reload"]);
}
