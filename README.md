# jQuery Broadcaster.
---
## Description.
jQuery Broadcaster 是一个简单的事件监听与广播模块，类似前端 `MVVM` 框架中的事件机制.

## Usage.
 - 发送广播：`$.$broadcast(事件名称, 传值);`
 - 监听事件：`$.$on(事件名称, 回调函数);`
 
## Example.
```

// Event Listener: listening "customEvent".
$.$on("customEvent", function (eventName, value) {
	console.log("EventName: " + eventName);
	console.log("Value: " + value);
});


// Event Broadcaster: broadcast "customEvent".
$("#something").on("click", function () {
	//...
    $.$broadcast("customEvent", "Bravo!");
});
  
  
```
