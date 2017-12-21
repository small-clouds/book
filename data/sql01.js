var demo01 ={
    title: "sql查询常用方法",
    name: "小标题",
    data:[{
        title:"连表查询",
        data:[
            {context:"<span class='remark'>常用的</span>：SELECT * from role_menu rm INNER JOIN menu m on rm.menuid=m.menu_id where rm.roleid=5"},
            {context:"<span class='remark'>升级的</span>：SELECT * from role_menu rm, menu m  where rm.menuid=m.menu_id and  rm.roleid=5"},
            {context:"<span class='remark'>表结果作为变量参数</span>：select * from student inner join employment on student.st_id =employment.student_id where  (select count(*) from interview where interview.student_id = student.st_id and isdel=1) <= 3"},
            {context:"<span class='remark'>表结果作为新表查询</span>：select eg.num IFNULL(eg.num,0) from month_aux m LEFT JOIN (select count(*) num,e.* from enterprise_aud e  where e.user_id=#{user_id} GROUP BY DATE_FORMAT(cooperativetime,'%Y%m')) eg  on m.m_id = DATE_FORMAT(eg.cooperativetime,'%m')  "}
        ]
    }]
}
data=[demo01]