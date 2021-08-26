import os;

filename = "student.txt";

# menu 主菜单
def menu():
    print('学生管理系统'.center(80,"="));
    print('功能菜单'.center(80,"-"));
    print("1.录入学生信息".center(80," "));
    print("2.查找学生信息".center(80," "));
    print("3.删除学生信息".center(80," "));
    print("4.修改学生信息".center(80," "));
    print("5.排序".center(80," "));
    print("6.统计人数".center(80," "));
    print("7.显示所有学生信息".center(80," "));
    print("0.退出系统".center(80," "));


# 录入信息
def insert():
    stuList = [];
    while True:
        id = input("请输入id");
        if not id:
            break;

        name = input("请输入姓名");
        if not name:
            break;
        try:
            enScore = int(input("请输入英语成绩"));
            pyScore = int(input("请输入python成绩"));
            javaScore = int(input("请输入jva成绩"));
        except:
            print("输入的不是成绩，重新输入");
            continue;
        # 保存成绩
        stuscore = {"id":id,"name":name,"enScore":enScore,"pyStore":pyScore,"javaScore":javaScore};
        #
        stuList.append(stuscore);
        an = input("是否继续添加？y/n\n");
        if an == "y" or an == "Y":
            continue;
        else:
            break;

    #保存文件
    save(stuList);
    print("录入完毕");

# 保存信息
def save(lst):
    try:
        stuTxt = open(filename,"a",encoding='utf-8');
    except:
        stuTxt = open(filename,"w",encoding='utf-8');
    for item in lst:
        stuTxt.write(str(item)+'\n');
    stuTxt.close();

def search():
    pass;

def delete():
    while True:
        studentId = input('请输入要删除学生的id： ');
        if studentId != '':
            if os.path.exists(filename):
                with open(filename,"r",encoding="utf-8") as file:
                    studentOld = file.readlines();
            else:
                studentOld = [];
            flag = False;
            if studentOld:
                with open(filename,"w",encoding="utf-8") as wfile:
                    d = {};
                    for item in studentOld:
                        d = dict(eval(item));
                        if d["id"] != studentId:
                            wfile.write(str(d)+"\n");
                        else:
                            flag = True;
                    if flag:
                        print(f"id{studentId}已删除");
                    else:
                        print(f"id{studentId} 不存在");
            else:
                print("没有学生信息");
                break;

            show();
            an = input("是否继续删除?y/n");
            if an == "y" or an =="Y":
                continue;
            else:
                break;


def modify():
    pass;
def sort():
    pass;
def total():
    pass;
def show():
    pass;


# 主程序
def main():
    while True:
        menu();
        choice = int(input("请选择菜单编号"))
        if choice in [0,1,2,3,4,5,6,7]:
            if choice == 0:
                an = input("你确定要退出系统吗?y/n");
                if an == "y" or an == "Y":
                    print("谢谢你的使用！");
                    break;
                else:
                    continue;
            elif choice == 1:
                insert();
            elif choice == 2:
                search();
            elif choice == 3:
                delete();
            elif choice == 4:
                modify();
            elif choice == 5:
                sort();
            elif choice == 6:
                total();
            elif choice == 7:
                show();


# 运行主程序
if __name__ == "__main__":
    main();