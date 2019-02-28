# 使用`grok`拆分`Nginx`日志
## 拆分Nginx日志的一个例子
日志输出格式为默认  
官方案例 : https://www.elastic.co/guide/en/logstash/current/logstash-config-for-filebeat-modules.html#parsing-nginx
### 测试日志
222.222.222.222 - - [04/Dec/2018:00:00:00 +0800] "GET /example HTTP/1.1" 200 1024 "http://localhost:8080/" "Mozilla/ (Windows; WOW64) AppleWebKit/ (KHTML, like Gecko) Chrome/ Safari"

### logstash 配置
``` 
input {stdin{}}
filter {
  grok {
    match => { 
      "message" => ["%{IPORHOST:[nginx][remote_ip]} - %{DATA:[nginx_user_name]} \[%{HTTPDATE:[nginx_time]}\] \"%{WORD:[nginx_method]} %{DATA:[nginx_url]} HTTP/%{NUMBER:[nginx_http_version]}\" %{NUMBER:[nginx_response_code]} %{NUMBER:[nginx_body_sent]} \"%{DATA:[nginx_referrer]}\" \"%{DATA:[nginx][agent]}\""] 
    # remove_field => "message" `remove_field`在`grok.match`中无法生效 
    # https://github.com/logstash-plugins/logstash-filter-grok/issues/142
    }
  }
  date {
    match => [ "[nginx][access][time]", "dd/MMM/YYYY:H:m:s Z" ]
  }
  mutate {
    # Ref: mutate使用: https://elkguide.elasticsearch.cn/logstash/plugins/filter/mutate.html
    add_field => { "read_timestamp" => "%{@timestamp}" }
    remove_field => "message"
  }
  useragent {
    # Ref: https://www.elastic.co/guide/en/logstash/current/plugins-filters-useragent.html
    source => "[nginx][agent]"
    target => "[nginx][agent]"
    remove_field => "[nginx_agent]"
  }
  geoip {
    # geoip: https://elkguide.elasticsearch.cn/logstash/plugins/filter/geoip.html
    source => "[nginx][remote_ip]"
    target => "[nginx][geoip]"
  }
}
output {stdout{codec => rubydebug}}
```
### 返回结果
```
{
  "nginx" => {
    "remote_ip" => "222.222.222.222",
    "agent" => {
      "os_name" => "Windows",
      "build" => "",
      "os" => "Windows",
      "device" => "Other",
      "name" => "Other"
    },
    "geoip" => {
      "timezone" => "Asia/Shanghai",
      "latitude" => 39.8897,
      "region_code" => "13",
      "longitude" => 115.275,
      "city_name" => "Hebei",
      "country_name" => "China",
      "ip" => "222.222.222.222",
      "continent_code" => "AS",
      "country_code3" => "CN",
      "region_name" => "Hebei",
      "location" => {
        "lat" => 39.8897,
        "lon" => 115.275
      },
      "country_code2" => "CN"
    }
  },
  "nginx_http_version" => "1.1",
  "nginx_body_sent" => "1024",
  "nginx_user_name" => "-",
  "nginx_referrer" => "http://localhost:8080/",
  "read_timestamp" => "2018-12-03T16:00:00.000Z",
  "nginx_method" => "GET",
  "@timestamp" => 2018-12-03T16:00:00.000Z,
  "host" => "ubuntu",
  "nginx_url" => "/example",
  "nginx_response_code" => "200",
  "@version" => "1",
  "nginx_time" => "04/Dec/2018:00:00:00 +0800"
}
```

在这里需要注意的是`kibana`的`dashboard`不支持这种方式的`GeoIP`需要重新通过`api`创建新的`GeoIp`格式.
