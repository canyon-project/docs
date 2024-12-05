#!/bin/bash

appid=${PAAS_APP_APPID:-100059834}
appname=nodeapp-$appid


# 不同的环境因为机器配置不一样,使用不同的实例数
case "$env" in
  "FWS"|"FAT"|"LPT")
    instance=1
  ;;
  "UAT")
    instance=1
  ;;
  *)
    instance=1
;;
esac

pm2 delete all

if [ -d /opt/nodeapp ]; then
	# docker
	cd /opt/nodeapp
else
	# vm
	cd "$(dirname $BASH_SOURCE)/../current/"
fi


NODE_ENV=production pm2 start 'npm run start' \
  -i $instance \
  --name $appname \
  --merge-logs \
  --log-date-format "YYYY-MM-DD HH:mm:ss.SSS" \
  --log "/opt/logs/$appid/outerr.log" \
  --output "/opt/logs/$appid/out.log" \
  --error "/opt/logs/$appid/err.log"
exit 0
