:: @echo off
:: cd c:/work/learn-web/console-web
:: git pull
:: echo "��̨pull�ɹ�"
:: cd c:/work/learn-web/learner-web
:: git pull
:: echo "ѧԱ��pull�ɹ�"
:: cd c:/work/parim/parim-spark
:: git pull
:: echo "�����pull�ɹ�"

:: echo "���Ŀ¼ ����parim-spark�Ȳ���"
:: pause
rem �����Ȳ���
cd e:/work/tongMing/project/JrebelLicenseServerforJava
mvn exec:java -Dexec.mainClass="com.vvvtimes.server.MainServer"
:: echo "����selenium"
:: cd c:/work/tools/selenium-remote-control-1.0.3/selenium-server-1.0.3
:: java -jar selenium-server.jar 