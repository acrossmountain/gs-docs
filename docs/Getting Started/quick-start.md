---
id: quick-start
title: 快速入门
---

## 入门示例

Go-Spring 版本 `v1.1.0-alpha`

## 代码

```go
package main

import (
	"github.com/go-spring/spring-core/gs"
	"github.com/go-spring/spring-core/web"
	_ "github.com/go-spring/starter-echo"
)

func init() {
	gs.Object(new(Echo)).Init(func(e *Echo) {
		gs.GetMapping("/", e.Call)
	})
}

type Echo struct {
	GoPath string `value:"${GOPATH}"`
}

func (e *Echo) Call(ctx web.Context) {
	ctx.JSON(map[string]interface{}{
		"code": 200,
		"msg": "successful",
		"data": e.GoPath,
	})
}

func main() {
	gs.Run()
}

```

## go.mod

```
module example

go 1.15

require (
	github.com/go-spring/spring-core v1.1.0-alpha
	github.com/go-spring/starter-echo v1.1.0-alpha
)
```

## 启动程序
```shell
go run main.go
```

控制台输入 `curl http://127.0.0.1:8080` 或浏览器访问,得到如下结果代表程序运行成功

```json
{"code":200,"data":"Your gopath","msg":"successful"}
```