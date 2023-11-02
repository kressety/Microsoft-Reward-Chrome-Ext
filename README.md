[![CodeFactor](https://www.codefactor.io/repository/github/kressety/microsoft-reward-chrome-ext/badge)](https://www.codefactor.io/repository/github/kressety/microsoft-reward-chrome-ext)

# Microsoft Rewards Bot

这是一个为Microsoft Rewards开发的Chrome扩展，能自动完成PC、手机和Edge的搜索任务，并显示每日积分倒计时。

**在原项目的基础上，已添加针对Google trends和GitHub的代理，以方便中国大陆用户使用**。

该扩展不会清除任何促销链接或小测验任务，也不会实现此功能。

**这是一个机器人！**

请自行承担风险。我不对此扩展可能导致的任何后果承担责任。

# 从GitHub安装

1. 前往[Release](https://github.com/kressety/Microsoft-Reward-Chrome-Ext/releases)并下载 `Microsoft-Reward-Chrome-Ext-CN.zip` 。
2. 将下载的文件放置到合适的地方，**不要把它删除**。
### 对于Chrome用户：
  1. 打开Chrome。
  2. 前往 chrome://extensions/ 并启用 `开发人员模式`。
  3. 将 `Microsoft-Reward-Chrome-Ext-CN.zip` 拖进去。
  4. 启用该扩展。
### 对于Edge用户：
  1. 打开Microsoft Edge。
  2. 前往 edge://extensions/ 并启用 `开发人员模式`。
  3. 将 `Microsoft-Reward-Chrome-Ext-CN.zip` 拖进去。
  4. 启用该扩展。

# 从Chrome/Edge商店安装

遗憾的是，由于...明显的原因...此扩展无法在Chrom/Edge商店中显示。

# 使用方法

1. 登录[Microsoft Rewards](https://account.microsoft.com/rewards)和[Bing](https://www.bing.com/)。
2. 尽情使用。

*注：您可能需要在每次重启Chrome时重复第1步。*

# 功能

### 后台工作

该扩展每两小时检查一次您的Microsoft Rewards每日进度，并清除任何未完成的搜索任务。当您有任何尚未完成的小测验/链接任务时，会显示一个黄色徽章，上面有一个数字，表示它们的积分值。

### 动作按钮

1. 强制检查奖励进度的按钮。
2. 指向Microsoft Rewards的链接。
3. 选项：
   1. 兼容性模式。切换以启用/禁用不同的积分倒计时计算方式。如果您对当前的积分倒计时方法有任何问题，请尝试此功能。
   2. 复制调试信息。这会将一堆信息复制到您的剪贴板。这些信息对最终用户没有用处。

### 动作按钮徽章

根据您的每日奖励进度或扩展的状态，徽章的颜色会发生变化：

![greyLogo](https://github.com/kressety/Microsoft-Reward-Chrome-Ext/blob/master/src/img/grey@1x.png?raw=true) - 稍等片刻。扩展程序很快就会开始工作。

![blueLogo](https://github.com/kressety/Microsoft-Reward-Chrome-Ext/blob/master/src/img/busy@1x.png?raw=true) - 正在努力为您完成搜索任务！

![greenLogo](https://github.com/kressety/Microsoft-Reward-Chrome-Ext/blob/master/src/img/done@1x.png?raw=true) - 恭喜！您已完成今天的所有任务。

![yellowLogo](https://github.com/kressety/Microsoft-Reward-Chrome-Ext/blob/master/src/img/warn@1x.png?raw=true) - 注意！您仍然可以通过任务获得一些积分。

![redLogo](https://github.com/kressety/Microsoft-Reward-Chrome-Ext/blob/master/src/img/err@1x.png?raw=true) - 哎呀...发生了一个错误 - 请查看[Troubleshooting](TROUBLESHOOTING.md)。
