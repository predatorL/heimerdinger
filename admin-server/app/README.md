# 平台管理系统 server

# 系统模块

## 定时任务管理

### table

| 字段         |         描述 |        类型 |                        备注 |
| ------------ | -----------: | ----------: | --------------------------: |
| name         |     任务名称 | varchar(64) |                             |
| type         |     任务类型 |      int(2) |                             |
| pid          |  任务进程 id |     int(11) |                             |
| process_name | 任务进程名称 | varchar(64) |                             |
| status       |     任务状态 |      int(2) |                             |
| create_time  |     创建时间 |        date |           CURRENT_TIMESTAMP |
| update_time  |     更新时间 |        date | ON UPDATE CURRENT_TIMESTAMP |

### 功能

-   创建
    -   url: /admin/schedule
    -   method: post
-   查询
    -   url: /admin/schedule
    -   method: get
-   编辑
    -   url: /admin/schedule
    -   method: put
-   删除
    -   url: /admin/schedule
    -   method: delete
-   开启
    -   url: /admin/schedule/start
    -   method: put
-   停止
    -   url: /admin/schedule/stop
    -   method: put

---

## 短信模板管理

-   创建
-   查询
-   编辑
-   删除

---

## 邮件模板管理

-   创建
-   查询
-   编辑
-   删除
