:: @echo off
:: cd c:/work/learn-web/console-web
:: git pull
:: echo "后台pull成功"
:: cd c:/work/learn-web/learner-web
:: git pull
:: echo "学员端pull成功"
:: cd c:/work/parim/parim-spark
:: git pull
:: echo "服务端pull成功"

:: echo "清空目录 启动parim-spark热部署"
:: pause
rem 启动热部署
cd e:/work/tongMing/project/JrebelLicenseServerforJava
mvn exec:java -Dexec.mainClass="com.vvvtimes.server.MainServer"
:: echo "启动selenium"
:: cd c:/work/tools/selenium-remote-control-1.0.3/selenium-server-1.0.3
:: java -jar selenium-server.jar 