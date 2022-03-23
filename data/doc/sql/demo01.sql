-- select * from standard 
-- select * from enterprise_aud where user_id = 1 and isdel = 1	
-- insert into welfare_standard values(null,1,2)
-- select * from employment where em_id in (40,41)
-- select * from  standard s INNER JOIN enterprise_aud e on s.ent_id=e.ent_id where s.isdel=1 and e.isdel=1
-- select * from standard where isdel=1
-- select * from enterprise_aud where isdel=1 and ent_id=57
-- select * from welfare_standard
-- select w.* from Welfare w INNER JOIN  welfare_standard ws ON w.we_id=ws.welfare_id where ws.standard_id=39
-- select * from standard where isdel=1 and jobname like "%电子%"
-- select * from standard where isdel = 1 and stand_id=1
-- delete from wekfare_standard where  standard_id = 1
-- 就业专员下面的学生   通过学生查班级  分组
-- select c.* from student s inner join classstu c on s.classid=c.classid where s.user_id=31 GROUP BY s.classid
#
-- select * from student inner join employment on student.st_id =employment.student_id where student.isdel=1 and employment.empstatus =0 or employment.empstatus =2 
-- select * from student where isdel=1          and classid =39        limit 0,5
-- select * from student s where isdel=1 and (select count(*) from interview i where i.student_id = s.st_id and isdel=1) = 3
-- select s.classid,c.* from student s INNER JOIN classstu c on s.classid=c.classid where s.user_id=31 GROUP BY s.classid
-- select * from student LEFT OUTER JOIN  employment on student.st_id =employment.student_id where student.isdel=1
-- select * from student where student.isdel=1
-- select * from student left outer join employment on student.st_id =employment.student_id where student.isdel=1
-- and student.st_name like  "%王%" 
-- select * from student inner join employment on student.st_id =employment.student_id where student.isdel=1 and employment.empstatus =1
-- select * from student where isdel=1 and (select count(*) from interview where interview.student_id = student.st_id and isdel=1) = 3 
# select * from student inner join employment on student.st_id =employment.student_id where student.isdel=1 and (select count(*) from interview where interview.student_id = student.st_id and isdel=1) <= 3 
-- select count(*) from interview where interview.student_id = student.st_id and isdel=1)
-- select count(*) from interview  where  isdel=1
-- select * from employment where em_time BETWEEN  "2017-11-01" and "2017-11-31"  ORDER BY salary DESC limit 0,4
-- select count(*) num,e.user_id,u.user_name from enterprise_aud e INNER JOIN userinfo u where e.user_id=u.user_id  GROUP BY e.user_id ORDER BY count(*) desc limit 0,4
-- select count(*),user_id,cooperativetime from enterprise_aud where cooperativetime  BETWEEN  "2017-12-01" and "2017-12-31"  and user_id=31
-- select * from enterprise_aud GROUP BY DATE_FORMAT(cooperativetime,'%Y-%m'),user_id 
-- select count(*) num,u.user_id,u.user_name from enterprise_aud e INNER JOIN userinfo u on e.user_id=u.user_id where ent_type=1  GROUP BY e.user_id ORDER BY count(*) desc limit 0,4;
-- 
-- select count(*),e.cooperativetime,DATE_FORMAT(cooperativetime,'%m') from enterprise_aud e where user_id=35 and ent_type=1  GROUP BY DATE_FORMAT(cooperativetime,'%Y%m')
-- select m.*,count(*),m.m_name,DATE_FORMAT(cooperativetime,'%m')  from month_aux m left OUTER    JOIN enterprise_aud e on DATE_FORMAT(e.cooperativetime,'%m')  = m.m_id where user_id=35 and ent_type=1  GROUP BY DATE_FORMAT(cooperativetime,'%Y%m')

-- select * from enterprise_aud  GROUP BY DATE_FORMAT(cooperativetime,'%Y%m') eg
-- select eg.num IFNULL(eg.num,0) from month_aux m LEFT JOIN (select count(*) num,e.* from enterprise_aud e  where e.user_id=#{user_id} GROUP BY DATE_FORMAT(cooperativetime,'%Y%m')) eg  on m.m_id = DATE_FORMAT(eg.cooperativetime,'%m')  
-- select eg.num ,IFNULL(eg.num,0) from month_aux m LEFT JOIN (select count(*) num,e.* from enterprise_aud e  where e.user_id=35 GROUP BY DATE_FORMAT(cooperativetime,'%Y%m')) eg  on m.m_id = DATE_FORMAT(eg.cooperativetime,'%m')  
-- select count(*),i.* from interview i where user_id=31  GROUP BY DATE_FORMAT(i.int_time,'%Y-%m')
select m.*,im.num from month_aux m left JOIN (select count(*) num,i.* from interview i where user_id=31  GROUP BY DATE_FORMAT(i.int_time,'%Y-%m')) im on m.m_id=DATE_FORMAT(im.int_time,'%m')
-- SELECT count(*),e.* from  employment e GROUP BY e.em_user_id ORDER BY count(*) desc
-- select count(*) num,e.* from employment e GROUP BY em_user_id ORDER BY count(*) desc

-- SELECT IFNULL(nume,0) from month_aux m LEFT outer JOIN (select count(*) num,e.* from employment e where e.em_user_id =32 GROUP BY DATE_FORMAT(e.em_time,'%Y-%m') ORDER BY count(*) desc) ea on m.m_id=DATE_FORMAT(ea.em_time,'%m')

-- select count(*),e.em_user_id,u.user_name from employment e INNER JOIN userinfo u on e.em_user_id=u.user_id GROUP BY em_user_id  ORDER BY count(*) desc

-- select count(*),i.* from interview i where user_id=32 GROUP BY DATE_FORMAT(int_time,"%Y-%m")
-- select count(*) num,i.user_id,u.user_name from interview i INNER JOIN userinfo u on i.user_id=u.user_id GROUP BY user_id ORDER BY count(*) desc

-- SELECT IFNULL(num,0) from month_aux m LEFT JOIN (select count(*) num,i.* from interview i where user_id=32 GROUP BY DATE_FORMAT(int_time,"%Y-%m")) ia on m.m_id=DATE_FORMAT(ia.int_time,'%m')
###############