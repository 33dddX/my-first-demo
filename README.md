# 山居不记年

> 山中无历日，寒尽不知年。

一款微信小游戏端的古风隐居治愈放置游戏。架空世界观，低压力、无失败、无条件接纳，单次体验 2–5 分钟。

当前进度：**v0.1 技术底座 + 全量文案资产**（可导入微信开发者工具直接运行；一套源码同时跑浏览器）。

## 核心纲领

1. 无失败原则 —— 无惩罚、无对错评分
2. 无评判原则 —— 所有选择无高低贵贱
3. 无条件接纳原则 —— 无任务、无红点、无离线惩罚
4. 不洗白不审判原则 —— 只呈现心境与实际影响
5. 允许摇摆原则 —— 目标可中途更改，无"半途而废"
6. 四时与不计数的时间 —— 只有季节，没有天数；退出即存档

## 快速开始

```bash
# 微信开发者工具：首页先点「小游戏」，再导入本目录（AppID 选测试号 / touristappid）
# 注意：本项目是「小游戏」，不是「小程序」——报 app.json 未找到 = 导入时选错了类型
# 浏览器：
node scripts/serve.js          # 打开打印的 localhost 或局域网地址
# 或直接双击 preview/index.html（file:// 模式，无需服务）
```

验收步骤、调试面板、常见问题见 **`docs/framework-guide.md`**。

## 目录

```
game.js / game.json / project.config.json   微信小游戏入口与工程配置
preview/    浏览器入口（index.html / style.css / shim.js / manifest.js）与 assets
src/
  boot.js   端无关启动链：平台 → 画布 → 布局 → 载档 → 离线结算 → 场景 → 循环
  core/     bus 总线 · loop 循环 · sceneManager 场景 · input 输入
            store 存档 · saveModel 模型与迁移 · clock 时钟与结算 · state 运行态 · debug 调试
  render/   surface 画布 · layout 布局（唯一坐标入口）· painter 原语 · scenic 天地
            particles 粒子 · text 排版 · typewriter 逐字 · ui 控件 · props 家什 · pet 宠物 · transition 转场
  scene/    启动 / 三问 / 主场景 / 事件 / 心境 / 回望
  data/     config 常量 · 5 份 JSON 文案 · texts.bundle.js（生成物）
  platform/ contract 契约 · registry 单例 · wx.js · web.js
scripts/    serve · bundle-data · check-data · check-manifest · smoke · smoke-web · md2docx
docs/       需求文档（md + docx）· 框架验收操作指引 · 文案一览
```

## 命令一览

```bash
npm test                        # 全量：提审自检 + 契约 176 + 清欢 47 + 存档 96 + 三问 33 + 音频 47 + 事件 30 + 收束 28 + 集成 155
npm run test:fast               # 只跑单元/契约套件（约 2 秒，改逻辑时随手跑）
npm run test:mutation           # 突变测试：注入 29 种真实故障，验证断言不是假绿
npm run preflight               # 提审自检：工程类型/语法/包体/外链/占位符/文案新旧

node scripts/check-data.js      # 文案校验（数量/字数/禁用词/感叹号/bundle 一致）+ 生成 docs/文案一览.md
node scripts/check-assets.js    # 资产总闸：图片读 PNG 头核尺寸体积、音频读 RIFF 核时长电平
node scripts/check-audio.js     # 音频细查：循环接缝、削波、直流偏置、八度带能量
node scripts/check-manifest.js  # 模块清单一致（磁盘 ↔ game.js ↔ preview/manifest.js）
node scripts/smoke.js           # 无浏览器自检：启动→三问→主场景→热点→菜单→回望→存档 + 离线结算
node scripts/smoke-web.js       # 模拟浏览器加载全部模块并连跑 30 帧
```

## 文档

| 文件 | 说明 |
|---|---|
| `docs/mvp-requirements.md` | 《山居不记年》MVP 需求文档 v1.3（开发唯一依据） |
| `docs/山居不记年-MVP需求文档-v0.1.docx` | 同上，Word 评审版 |
| `docs/framework-guide.md` | 《框架验收操作指引》：导入步骤、验证点、调试面板、FAQ |
| `docs/testing.md` | 《测试说明》：四层结构、四条命令、怎么写新测试、本轮抓到的问题 |
| `docs/launch-checklist.md` | 《小游戏上线路径》：资质、备案、类目、提审说明话术 |
| `docs/intro-acceptance.md` | 《三问模块验收清单》 |
| `docs/core-loop-acceptance.md` | 《核心循环模块验收清单》+ 三处口径开关 |
| `docs/assets-manifest-v015.md` | 《v0.1.5 资产交付清单》：三类资产实测数据 + 诚实的局限 |
| `docs/roam-acceptance.md` | 《游历与事件模块验收清单》（单模块） |
| `docs/integration-acceptance.md` | 《模块联调验收清单》（端到端全链路 + 价值观 10 条） |
| `docs/audio-spec-v015.md` | 音频规格：合成方法、接入点、音量比、换真素材的注意事项 |
| `docs/progress.md` | 进度审计（对照文档 17.1 与验收条目） |
| `docs/文案一览.md` | v0.1 全部文案通读版（脚本生成） |

## 版本

| 版本 | 状态 | 范围 |
|---|---|---|
| v0.1.0 | 已交付 | 双端框架、存档、场景、逐字排版、190 条互动文案、8 条事件 |
| v0.1.2 | 已交付 | 开局三问（6×4×5=120 组合落库，宠物终身 1:1） |
| v0.1.3 | 已交付 | 测试体系（契约/单元/集成/突变四层 + 提审自检），修 2 个真 bug |
| v0.1.4 | 已交付 | 主场景核心循环：清欢（累积/收取/封顶）+ 五个居家互动 + 宠物陪伴与迎候 |
| v0.1.5 | 已交付 | 内容资产：剧情文案 4 份真源 / 美术 5 张 / 音频 8 条 + 接线 |
| v0.1.6 | 已交付（Beta） | 舆图 + 近景三处 + 路人见闻 + 山野事件 + 回望四区块 + 改目标 + 终局 |
| v0.2 | 规划 | 事件系统、回望页、舆图入口、搬迁、其余五区近景 |
| v1.0 | 规划 | 12 处 × 6 事件全量 |

## 技术约定（改代码前请先看这三条）

1. **CommonJS，不用 ESM**：小游戏原生支持；浏览器端由 100 行 shim 补齐。ESM 在 `file://` 下会被 CORS 拒绝，而"拷走 preview 双击打开"是硬验收。
2. **坐标只有一个入口**：`src/render/layout.js` 的 `toDesign()`。场景里绝不允许自己算屏幕像素。
3. **改文案只改 JSON**：`src/data/*.json` 是真源，`texts.bundle.js` 是生成物（改完跑 `node scripts/bundle-data.js`）。

## 分支与提交规范

- 分支：`main`（可交付）/ `dev`（集成）/ `feat/<模块>` / `fix/<问题>`
- 提交：`type(scope): 说明`，type ∈ feat / fix / docs / style / refactor / asset / perf / chore / test
- 每个可交付版本打 tag：`v0.1.3`
- 提交前必跑：`npm test`（任一项红即不提交）
- 推送远端：`git remote add origin <仓库地址> && git push -u origin main --tags`（当前仓库只有本地，尚未配置远端）

## 导出 Word

```bash
python scripts/md2docx.py docs/mvp-requirements.md "docs/山居不记年-MVP需求文档-v0.1.docx"
```
