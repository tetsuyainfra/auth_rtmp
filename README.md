# auth_rtmp

nginx-rtmp-module have on_publish

# example

```
cp auth_rtmp.yaml.example auth_rtmp.yaml
vim auth_rtmp.yaml
yarn start

curl -vvv -X POST -d app=Foo name=Bar http://127.0.0.1:3010/
```

OBS Settings
server: rmtp://TARGET_NGINX_RTMP_SERVE/Foo
stream_key: Bar
