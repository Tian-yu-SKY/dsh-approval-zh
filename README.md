# dsh-approval-zh — DeepSeek Harness 中文审批卡片

把 DeepSeek Harness（DSH）的**权限审批提示**和**会话同步的推送/拉取确认**换成简单易懂的中文卡片：一眼看懂「这是什么操作、为什么被拦、确认后会发生什么」。纯客户端插件，不改变审批结果，也不改变任何权限策略。

> GitHub 仓库：<https://github.com/Tian-yu-SKY/dsh-approval-zh>　·　版本：**v1.1.0**

## 覆盖的确认场景

| 场景 | 卡片显示 |
| --- | --- |
| 自动审查（Auto review）未放行 | 中文标题 + 一句话解释 + 中文风险要点（如「修改 DSH 配置」「影响整个 DSH」「涉及网络或远程传输」），模型给的英文审查理由折叠在「自动审查理由（英文原文）」里 |
| 沙箱提权（danger-full-access / workspace-write） | 说明要提升到哪一档权限、这一档能做什么、允许后仅本次生效 |
| 其他工具请求授权 | 中文说明 + 操作理由 +（命令类工具）即将执行的命令 |
| 会话同步 `sync_push` / `sync_pull` 确认（v1.1.0 新增） | 中文标题 + 说明推送/拉取会做什么、不会强制覆盖；英文原文折叠；按钮「取消，什么都不做（Esc）」「确认推送/确认拉取（Enter）」 |

所有固定文案都有中文（中文界面）和英文（英文界面）两套，审批按钮为「拒绝，不执行（Esc）」「允许这一次（Enter）」，并提示该选择只对本次操作有效。


## 界面示意

改造前（官方卡片，英文审查理由直接跟在标题后）：

> 等待审批
> **Auto review 拒绝了此调用：** Installing a bundle into the live DSH profile is a system/configuration change that …（一大段英文）

改造后（本插件，中文说明 + 中文要点 + 可展开的英文原文）：

> 自动审查未放行 · 等你确认
> **自动审查没有放行这次操作**
> 操作：运行命令（ops_bash）
> 自动审查关注的点：安装或修改插件 / 修改 DSH 配置 / 影响整个 DSH / 涉及网络或远程传输 / 超出你明确授权的范围
> ▸ 自动审查理由（英文原文，点击展开）
> 允许后：这次操作会立即执行，不再经过自动审查。
> 拒绝后：这次操作不会执行，DSH 会把拒绝结果告诉模型。
> [拒绝，不执行（Esc）]　[允许这一次（Enter）]
> 这个选择只对当前这一次操作有效，不会改变任何默认权限。

### 会话同步确认卡（v1.1.0）

`dsh-session-sync` 插件在执行 `sync_push` / `sync_pull` 前，通过「用户提问」通道弹出的确认卡原本是硬编码英文（提问、选项、说明都写死在插件源码里）：

> Push local session changes to the sync remote?
> Upload local session changes to the sync remote (commit + push; never force-pushes).
> 1 Push …　2 Cancel Do nothing.

本插件 v1.1.0 只识别这一种确认提问并替换为中文卡片（其他插件的提问保持官方界面）：

> 需要你确认 · 会话同步
> **把这台机器的会话改动推送到同步远端？**
> 操作：会话同步推送（sync_push）
> 推送会把本机会话文件提交并上传到配置的同步远端。它不会强制覆盖远端：如果推送被拒绝，会先拉取合并再重试一次。
> ▸ 英文原文（点击展开）
> 确认后才会执行；点取消不会上传或下载任何内容。
> [取消，什么都不做（Esc）]　[确认推送（Enter）]

提交给宿主的是原始选项标签（`Push` / `Pull` / `Cancel`），`dsh-session-sync` 的判断逻辑不变；若该插件升级后改写文案，会自动回退到官方英文卡，不会误接管。

## 从 GitHub 安装

DSH 的插件管理器接受 git 地址，可以直接装这个仓库：

```powershell
# 插件页「安装第三方插件」里填下面任一地址，或命令行：
dsh plugin --profile desktop add "github:Tian-yu-SKY/dsh-approval-zh"
# 等价写法：
dsh plugin --profile desktop add "git+https://github.com/Tian-yu-SKY/dsh-approval-zh.git"
```

也可以下载仓库后按上面的「方式一」安装本地目录。

## 支持环境

- DSH **0.2.x**（本插件在 **0.2.1-rc.3** 桌面版上实机验证过）；包内声明 `engines.dsh: >=0.2.1-rc.3 <0.3.0-0`，不兼容的版本会被 DSH 拒绝加载并给出提示
- 需要官方 `@deepseek-ai/dsh-client-ui-approval` 在组合中（官方 Web / Desktop 默认组合自带）；本插件只替换渲染层，审批的创建与回传仍由官方插件负责
- Windows / macOS / Linux 均可（纯 Web 客户端插件，不含原生代码）
- 纯前端：**不联网、不采集数据、不额外消耗 token**；模型生成的英文理由只在本地折叠展示

## 安装

### 方式一：插件页（推荐）

1. 打开 DSH 侧边栏 **插件 → 添加插件 → 安装第三方插件**
2. 填入解压后的**本地目录绝对路径**，或（如果已发布）包名 `dsh-approval-zh`
3. 安装完成后启用；已打开的页面刷新一次（Ctrl+R）即可生效

### 方式二：命令行

DSH Desktop 自带 CLI（路径以实际安装为准）：

```powershell
& "<DSH 安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "D:\path\to\dsh-approval-zh"
```

Web/服务器部署把 `--profile` 换成对应 profile 名；安装后同样需要让页面重新加载一次。

### 方式三：发布到 npm 后安装

`package.json` 里的名字是未加作用域的 `dsh-approval-zh`，可直接 `npm publish`（如果名字被占用，改成你自己的作用域，例如 `@you/dsh-approval-zh`，并同步修改三处：`package.json` 的 `name`、`client.js` 里 `window.__ModuleLoader__.load({ id })` 与工厂返回的 `name`、`cordis.patch.yml` 里的 `name`）。发布后即可用插件页按包名安装，或用 `dsh plugin --profile <profile> add dsh-approval-zh`。

## 生效与验证

- 安装后 Host 会把 `client.js` 加入 Web 客户端启动图；无需重启 DSH，刷新页面即可
- 下次出现权限审批时，卡片应为中文；若仍是官方英文样式，检查插件是否启用、页面是否刷新
- 会话同步 `sync_push` / `sync_pull` 的确认卡也应为中文；点「取消」不会传输任何数据，可用于安全验证

## 卸载

```powershell
& "<DSH 安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop remove dsh-approval-zh
```

或直接在插件页停用/卸载。

## 实现

- 权限审批：向 `conversation.composer` 链式插槽注册优先级 0 的接管项（官方审批面板为 1，链按优先级升序取第一个匹配项），选择器只匹配 `pendingInteraction.kind === 'approval'`；命令/路径通过会话标准 `useChat` 钩子按 `callId` 查找，不与其他插件争抢 `conversation.approval.detail` 子插槽。
- 会话同步确认卡：注册优先级 -1 的第二个接管项，只识别 `dsh-session-sync` 的 push/pull 固定提问（问题文案 + `Push`/`Pull`/`Cancel` 选项），其余提问返回 `null` 交还官方提问界面；回传原始选项标签，不修改任何第三方插件。
- 文案走 DSH 的 locale 服务（`approvalZh` 命名空间，中英双字典），主题只用 `--dsw-alias-*` 设计令牌。本插件崩溃时插槽错误边界会让出，自动回落到官方界面，审批/提问不会失效。

## 许可

MIT，见 `LICENSE`；部分交互行为参考 Apache-2.0 的 DSH 官方包，见 `NOTICE`。
