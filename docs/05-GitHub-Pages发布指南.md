# GitHub Pages 发布准备

## 检查结果
- 纯 React 静态网站；无需服务器、数据库、API Key 或付费服务。
- 未添加广告、访问统计、追踪 SDK、远程字体或 AI API。
- 浏览器 localStorage 只保存 portfolio-theme 深浅色偏好；复制邮箱在点击时调用剪贴板。
- 联系按钮为 mailto，不会由网站后台发送邮件。
- GitHub 为外部跳转；LinkedIn 与项目链接为空时隐藏。
- 网站显示姓名、邮箱、城市、学历、项目与经历，PDF 简历可公开下载。
- public 旧 DOCX 已移到 local-only 本地备份，构建只包含 PDF。
- 如果 GitHub 仓库公开，源码、开发文档、日志及 Git 历史也可见；忽略规则不会删除已有远程历史中的 Word 文件。
- npm audit 检查时未报告已知漏洞。这不等于全面安全认证。

## 仓库与预期网址
当前 remote： https://github.com/xindi-z/Xindi-Personal-Website
默认分支：main
预期 Pages 地址（启用并成功发布后）：https://xindi-z.github.io/Xindi-Personal-Website/
Vite 使用相对 base，支持该仓库子路径；简历及静态资源采用相对路径。
本次未推送、未启用 Pages、未执行部署，远程设置尚未验证。

## 发布步骤
1. 查看本次文件差异，然后提交并推送 main。不要上传 node_modules、dist、local-only 或 .env。
2. 在 GitHub 仓库 Settings → Pages → Build and deployment 中，Source 选择 GitHub Actions。
3. 在 Actions 找到 Publish portfolio to GitHub Pages，点击 Run workflow，选择 main。
4. 等待 build 和 deploy 成功，打开任务给出的真实 Pages 地址。
5. 检查首页、深浅色切换、手机导航、项目筛选、PDF 下载和联系邮箱。
6. 以后修改后推送，再手动 Run workflow。仅推送不会触发本流程发布。
旧 deploy.yml 原本已删除，本次保持删除；提交时一并确认删除，以免远程旧流程仍按 push 自动执行。
不需要个人访问令牌或额外仓库 Secrets；使用 GitHub 提供的工作流身份。

## 尚待补充
- LinkedIn 与每个项目的真实仓库/演示地址。
- 确认所选兴趣条目和公开简历内容。
- 发布成功后再加入确认过的 canonical 和 og:url。
- 当前 About 仍在 Education、Skill Set 之后；之前只是讨论排序，未改变。
- 本次无浏览器全量回归；之前的交互检查和本次生产构建为当前验证依据。

官方说明：
- [GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Vite 静态部署](https://vite.dev/guide/static-deploy.html)
