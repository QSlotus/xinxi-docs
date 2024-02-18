# 服务器指令

昕夕亭安装了许多插件以增强游戏趣味性。

> < ... > ：此为必选参数
>
> [ ... ]：此为可选参数

!> 指令无需带括号

## 原版指令

| 指令               | 别名               | 含义                          | 备注                           |
| ------------------ | ------------------ | ----------------------------- | ------------------------------ |
| /help [指令名] |  | 查看帮助 |  |
| /inform | /ifo | 查看服务器公告 | |
| /afk               |                    | 设置是否为AFK（暂时离开）状态 |                                |
| /getpos [玩家]   |                    | 查看某玩家坐标                |                                |
| /list              |                    | 查看当前在线的玩家            |                                |
| /msg <玩家> <信息> | /m , /t , /whisper | 私聊某玩家                    | 私聊内容不会在服务器控制台显示 |
| /near [半径]     |                    | 查看附近的玩家                |                                |
| /r <信息>        | /reply             | 快速回复私聊消息              |                                |
| /rules             |                    | 查看服务器规则                |                                |
| /suicide           |                    | 自杀                          |                                |
| /whois [玩家名]     |                    | 显示一个玩家的信息            |                  |
| /sethome <家>    | /createhome        | 在玩家当前位置设置家          |                                |
| /delhome <家>    | /rmhome , /remhome | 删除玩家的家                  |                                |
| /home <家>      | /homes             | 回家                          |        |
| /tpa <玩家> | /call , /tpask | 请求传送到一个玩家身边 |  |
| /tpaall [玩家] |  | 请求所有人传送到你身边        |  |
| /tpaccept [玩家] | /tpyes | 同意一个传送请求              |  |
| /tpdeny | /tpno | 拒绝一个传送请求              |  |
| /tpahere [玩家] |  | 请求一个玩家传送到你身边      |  |
| /balance [玩家] | /bal , /money | 查看某玩家的金钱数 | |
| /balancetop [页数] | /baltop | 服务器内金钱榜 | |
| /mail [ read\clear\send [to] [ 信息 ]] | /email | 发送和查阅短信 | |
| /gc | /lag , /tps , /mem , /uptime , /memory , /entities | 查看服务器的使用信息 |  |
| /hat | /head | 把手上的物品戴到头上 / 把头上的物品拿下来 |  |

## 插件指令 

| 插件                | 指令 / 按键            | 别名    | 含义                       | 备注                                                   |
| ------------------- | -------------------- | ------- | -------------------------- | ------------------------------------------------------------ |
| **MyWarp** | /setwarp <传送点名称> |  | 在玩家当前位置设置一个传送点 | 传送点名称仅能使用**汉字、字母、数字**，不支持**符号** |
|  | /mywarp |  | 查看传送点相关指令帮助 |  |
|  | /mywarp gui |  | 打开传送点列表GUI界面 |  |
|  | /warplist |  | 列出所有的传送点 |  |
|  | /warp <传送点名称> |  | 传送到指定传送点 |  |
| **WorldEdit** |  |  |  | 相关指令参见<br> [WorldEdit/命令列表 - Minecraft插件百科](https://mineplugin.org/WorldEdit/命令列表) |
| **Multiverse-Core** | /mv                  |         | 查看Multiverse命令帮助     |                                                              |
|                     | /mv list             | /mvlist | 查看所有的世界             |                                                              |
|                     | /mv tp <世界名>    | /mvtp   | 传送到指定的世界           |                                                              |
| **ZMusic**          | /zm help             | /zmusic | 查看ZMusic帮助             | 需在本地安装Mod [ZMusic](version?id=zmusic) <br>更多帮助请于服务器内查看 |
|                     | /zm stop             |         | 停止播放                   |                                                              |
|                     | /zm loop             |         | 开 / 关 循环播放           |                                                              |
|                     | /zm url <音乐直链> |         | 播放网络音乐               |                                                              |
|                     | /zm 163hot <歌名> |         | 获取网易云音乐热评（前三） |                                                              |
|                     | /zm play 163 <歌名> | /zm play netease | 网易云音乐播放 | **播放** 是你一个人听<br>**点歌** 是全服听 |
||/zm play qq <歌名>||QQ音乐播放||
||/zm play kuwo <歌名>||酷我音乐播放||
||/zm play kugou <歌名>||酷狗音乐播放||
||/zm play bilibili <:auxxxxx / 歌名>||bilibili音乐播放||
||/zm music 163 <歌名> | /zm music netease | 网易云音乐点歌 | **播放** 是你一个人听<br/>**点歌** 是全服听 |
||/zm music qq <歌名>||QQ音乐点歌||
||/zm music kuwo <歌名>||酷我音乐点歌||
||/zm music kugou <歌名>||酷狗音乐点歌||
||/zm music bilibili <:auxxxxx / 歌名>||bilibili音乐点歌||
||/zm search 163 <歌名> | /zm search netease | 网易云音乐搜索 | 搜索出来的结果可以选择是自己听还是全服听 |
||/zm search qq <歌名>||QQ音乐搜索||
||/zm search kuwo <歌名>||酷我音乐搜索||
||/zm search kugou <歌名>||酷狗音乐搜索||
||/zm search bilibili <:auxxxxx / 歌名>||bilibili音乐搜索||
||/zm playlist <qq/163/netease> import <歌单链接>||为自己导入歌单||
||/zm playlist global <qq/163/netease> import <歌单链接>||为全服导入歌单||
||/zm playlist <qq/163/netease> list||查看已导入的私人歌单列表||
||/zm playlist global <qq/163/netease> list||查看已导入的全服歌单列表||
||/zm playlist <qq/163/netease> play <歌单ID>||播放已导入的歌单||
||/zm playlist <qq/163/netease> show <歌单ID>||查看已导入的歌单||
||/zm playlist <qq/163/netease> update||更新已导入的私人歌单||
||/zm playlist global <qq/163/netease> update||更新已导入的全服歌单||
||/zm playlist type <normal/loop/random>||设置歌单播放方式|顺序播放/循环播放/随机播放|
||/zm playlist prev||切换到上一首歌曲||
||/zm playlist next||切换到下一首歌曲||
||/zm playlist jump \<ID>||切换到指定歌曲||
|**Image**|/image create <图片名称\|图片直链> [缩放百分比]||创建并开始粘贴新的自定义图像||
||/image delete||通过单击现有图像来删除它||
||/image delete near <范围>||删除范围内的图像||
|| /image list                                            || 显示可以添加的图像选项列表   ||
|||||持续更新中...|
