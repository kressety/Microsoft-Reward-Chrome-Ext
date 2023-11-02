
# 故障排查
当你看到一个红色的错误图标时，可能有以下几种原因。以下是一些建议的解决方案。

## 一般步骤

1. 点击扩展图标，等待几秒看是否可以解决问题。
2. 如果不行，并且你看不到你的Microsoft Reward统计数据，但却要求你登录或加入Microsoft Reward，请参见[未登录](#未登录)。
4. 如果可以，请尝试访问[Microsoft Rewards页面](https://rewards.bing.com/)。
5. 如果页面无响应或非常慢，则问题可能是[Microsoft Rewards临时问题#1](#microsoft-rewards临时问题1)。
6. 如果页面加载没有问题，请在[区域问题](#区域问题)中检查症状。
7. 如果不是区域问题，请尝试在Bing上手动搜索看计数器是否有变化。如果没有，问题可能是[Microsoft Rewards临时问题#2](#microsoft-rewards临时问题2)。
8. 根据你使用的浏览器，检查扩展报告的错误。如果是`UserAgentInvalid`，请检查[用户代理无效](#用户代理无效)。
9. 如果以上都没有帮助，请报告问题。

# 常见问题
## 未登录
#### 症状
- 错误信息显示`UserNotLoggedIn`和/或`FetchRedirected: expected response status is within 200-299`。
- 没有进行任何搜索。
- [可能的]弹出页面显示*登录*或*现在加入*按钮，而不是任务和你的奖励账户的统计数据。

#### 解释
- 你还没有登录你的Microsoft账户。
- 你已经登录到你的Microsoft账户，但扩展不能检测到它。

#### 该怎么做
- 再次点击扩展图标。这通常可以解决问题。
- 如果你仍然看到*登录*或*现在加入*页面，按住control键点击链接，登录到你的MS账户，然后再试。

#### 何时报告
- 只有在以上方法不能解决问题时才报告。

## Microsoft Rewards临时问题#1

#### 症状
- 错误信息显示`FetchRedirected: expected response status is within 200-299`。
- 弹出页面显示你的奖励账户统计数据。
- 蓝色扩展图标不显示或只显示很短的时间。
- 如果你访问Microsoft Rewards页面(https://rewards.bing.com/)，它可能需要很长时间才能加载，或者根本不加载。

#### 解释
- Microsoft Rewards服务器太慢了，由Microsoft来解决这个问题。

#### 该怎么做
- 稍后再试，因为Microsoft可能会解决这个问题。有时可能需要几天。
- 不要报告它作为一个bug，但可以开一个问题与其他人讨论。

#### 何时报告
- 只有在问题持续3天时才报告。

## Microsoft Rewards临时问题#2

#### 症状
- 错误信息显示`UserAgentInvalid`。
- 没有进行任何搜索。
- 弹出页面显示你的奖励账户统计数据。
- 蓝色扩展图标亮起一两分钟，然后变为红色。
- 当你在Bing上搜索时，它不会增加到你的奖励计数器。

#### 解释
- Microsoft Rewards出了些问题，由Microsoft来解决这个问题。

#### 该怎么做
- 稍后再试，因为Microsoft可能会解决这个问题。有时可能需要几天。

#### 何时报告
- 只有在问题持续3天时才报告。

## 用户代理无效

#### 症状
- 错误信息显示`UserAgentInvalid`
- 当你点击扩展图标时，你可以看到你的奖励账户统计数据，但没有进行任何搜索。

#### 解释
- 用户代理被Microsoft用来识别你使用的浏览器和设备。Microsoft不时地屏蔽用户代理。因此，使用最新的用户代理很重要。
- 该扩展使用了几个不同的用户代理来源，但它们可能会过时。我会尽量保持它们的更新，但不总是。

#### 该怎么做
- 等我更新用户代理。
- 作为临时解决方案，在扩展选项中启用相关的用户代理覆盖，从以下列表中选择一个，并复制粘贴到框中。我建议用Edge浏览器的PC和Safari iOS的移动版。
   - https://www.whatismybrowser.com/guides/the-latest-user-agent/
   - https://whatmyuseragent.com/engines
   - https://techblog.willshouse.com/2012/01/03/most-common-user-agents/
- 正确的用户代理看起来像，严格地说，开头或结尾没有空白字符：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.106 Mobile/13E238 Safari/604.1
```

#### 何时报告
- 当这个问题发生时，它可能会影响到多个用户，如果不是所有的用户，其他人可能已经报告了。如果你看到一个已经存在的问题，不要开一个新的，但在现有的问题中添加你的评论。

## 区域问题

#### 症状
- 错误信息显示`FetchRedirected: expected response status is within 200-299`
- 访问[Microsoft Rewards页面](https://rewards.bing.com/)及其[迷你页面](https://www.bing.com/rewardsapp/flyout?channel=0)，你会看到地址栏中的最终地址不属于以下域名之一：
  - *.microsoft.com/
  - *.bing.com/

#### 解释
- Microsoft Rewards在你的国家使用不同的域名，这个扩展并不支持它们全部。

#### 该怎么做
- 等我为你的国家增加支持。

#### 何时报告
- 立即报告问题。

## Manifest版本2

#### 症状
- 错误信息显示`ManifestV2: manifest version 2 is no longer supported`。

#### 解释
- 该扩展使用的是一个旧的manifest版本，它将在未来被移除。
- 正在探索一个解决方案，但进展缓慢。如果你想帮忙，请告诉我。

#### 该怎么做
- 等我更新这个扩展。

#### 何时报告
- 请不要报告。我完全知道这个问题，它暂时不影响扩展的功能。
