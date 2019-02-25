# grok
grok 在性能和资源损耗方面被广为诟病
但是如果使用良好的`正则表达式`对性能的影响实际上也没有那么大.  
关于`grok 性能`可以看一下: [do-you-grok-grok](https://www.elastic.co/blog/do-you-grok-grok)  
中文版: [[译]你真的理解grok吗](https://segmentfault.com/a/1190000013051254)    
在`某些`场景下可以用 `dissect` 替代: [Logstash Dude, where's my chainsaw? I need to dissect my logs](https://www.elastic.co/blog/logstash-dude-wheres-my-chainsaw-i-need-to-dissect-my-logs)  
## 在logstash中使用`grok`
定义一个文件`std.yml`
```
input {stdin{}}
filter {
  grok {
    match => { 
      "message" => []
    }
  }
}
output {stdout{codec => rubydebug}}

```

