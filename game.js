/**
 * 微信小游戏入口（CommonJS）。
 *
 * 两条纪律：
 * 1) require 一律**字面量**、带 .js 后缀——打包器靠静态分析收文件，漏一个就是真机白屏；
 * 2) 先注入平台单例，再逐个加载模块，最后启动。加载顺序 = preview/manifest.js 的顺序，
 *    两者由 scripts/check-manifest.js 守护一致。
 */
;(function () {
  'use strict';

  // 平台先行
  var registry = require('./src/platform/registry.js');
  var contract = require('./src/platform/contract.js');
  var wxPlatform = require('./src/platform/wx.js');
  registry.set(contract.ensure(wxPlatform.create()));

  // 数据层
  require('./src/data/config.js');
  require('./src/render/palette.js');
  require('./src/data/homes.js');
  require('./src/data/pets.js');
  require('./src/data/goals.js');
  require('./src/data/propsCatalog.js');
  require('./src/data/map.js');
  require('./src/data/places.js');
  require('./src/data/events.js');
  require('./src/data/texts.bundle.js');
  require('./src/data/textsStore.js');

  // 平台层其余
  require('./src/platform/web.js');

  // 内核
  require('./src/core/bus.js');
  require('./src/core/ambience.js');
  require('./src/core/loop.js');
  require('./src/core/tween.js');
  require('./src/core/rng.js');
  require('./src/core/saveModel.js');
  require('./src/core/store.js');
  require('./src/core/qinghuan.js');
  require('./src/core/eventRoll.js');
  require('./src/core/closing.js');
  require('./src/core/clock.js');
  require('./src/core/state.js');
  require('./src/core/input.js');
  require('./src/core/debug.js');
  require('./src/core/sceneManager.js');

  // 渲染
  require('./src/render/surface.js');
  require('./src/render/layout.js');
  require('./src/render/painter.js');
  require('./src/render/image.js');
  require('./src/render/scenic.js');
  require('./src/render/particles.js');
  require('./src/render/text.js');
  require('./src/render/typewriter.js');
  require('./src/render/ui.js');
  require('./src/render/transition.js');
  require('./src/render/props.js');
  require('./src/render/pet.js');

  // 场景
  require('./src/scene/sceneBase.js');
  require('./src/scene/boot.js');
  require('./src/scene/home.js');
  require('./src/scene/intro.js');
  require('./src/scene/event.js');
  require('./src/scene/mood.js');
  require('./src/scene/review.js');
  require('./src/scene/map.js');
  require('./src/scene/near.js');
  require('./src/scene/closing.js');
  require('./src/scene/index.js');

  // 启动
  require('./src/boot.js').start();
})();
