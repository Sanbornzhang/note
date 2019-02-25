# proxy 
## install shadowsocks client
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:max-c-lv/shadowsocks-libev -y
sudo apt-get update
sudo apt install shadowsocks-libev
```
## start socks proxy
```
ss-local -s 服务器地址 -p 服务器端口 -l 本地端端口 -k 密码 -m 加密方法
```

## set proxy

```
alias setproxy="export ALL_PROXY=socks5://127.0.0.1:1080"
alias unsetproxy="unset ALL_PROXY"
alias myip="curl https://ipinfo.io/ip"
```
add alias to your profile `.zshrc ` or `.bashrc`

## set apt proxy
### install polipo
```
sudo apt-get update
sudo apt-get install polipo
```
### config polipo
`vi /etc/polipo/config`
```
logSyslog = true
logFile = /var/log/polipo/polipo.log
proxyAddress = "0.0.0.0"
proxyPort = 8123
socksParentProxy = "127.0.0.1:1080"
socksProxyType = socks5
```
### restart polipo
` /etc/init.d/polipo restart`
### test connection
`curl -x 127.0.0.1:8123  ip.gs `
### change apt config
`vi /etc/apt/apt.conf`
add `Acquire::http::Proxy "http://127.0.0.1:8123";`
