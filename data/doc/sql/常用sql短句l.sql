
******   一段程序的复杂度 是由当初设计的复杂度决定的   只有更简洁的代码 逻辑才会更清楚 越到后期 越能体现代码简介 容易理解的必要性  一段上百行逻辑的代码 即使效率在高  恐怕也没有多少程序员想去修改它

llhwvybubmbxjjdj
mbpigzyqbjugbaed
***********************   Mapper.xml *************************
/*
增改删
	UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson' 
	INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
	DELETE FROM Person WHERE LastName = 'Wilson' 

list数组的值用，分割成字符串
数据横排的一种方式
	select  group_concat(sc.name )  post from lrn_user_post lup left JOIN sys_category sc on lup.category_id  = sc.id
	
-- 数据横排
	select t1.user_id,t1.s_period,t1.s_count ,t2.l_network_period,t2.l_network_count,t3.l_other_period,t3.l_other_count  from 
		(select  spea.user_id , sum(spea.period) s_period , count(1) s_count 
		from short_plan_enrol_approval spea 
			 INNER JOIN post_plan pp on spea.post_plan_id = pp.id 
		where spea.plan_type ="SHORTTERM" and spea.state ="ADOPT" and (pp.complete_date   is null or  pp.complete_date is not null ) and ( pp.start_date is null or  pp.start_date is not null  )  GROUP BY spea.user_id   ) t1 ,
		(
		select  spea.user_id , sum(spea.period) l_network_period ,count(1) l_network_count from short_plan_enrol_approval spea 
			 INNER JOIN post_plan pp on spea.post_plan_id = pp.id 
		where spea.plan_type ="LONGTRERM" and pp.training_mode ="网络培训" and spea.state ="ADOPT" and (pp.complete_date   is null or  pp.complete_date is not null ) and ( pp.start_date is null or  pp.start_date is not null  )GROUP BY spea.user_id) t2, 
		(
		select  spea.user_id , sum(spea.period) l_other_period , count(1) l_other_count from short_plan_enrol_approval spea 
			 INNER JOIN post_plan pp on spea.post_plan_id = pp.id 
		where spea.plan_type ="LONGTRERM" and pp.training_mode !="网络培训"  and spea.state ="ADOPT" and (pp.complete_date   is null or  pp.complete_date is not null ) and ( pp.start_date is null or  pp.start_date is not null  )  GROUP BY spea.user_id) t3

		where t1.user_id=t2.user_id and t2.user_id =t3.user_id and  t3.user_id = 100000 

mysql中的视图 
		https://www.cnblogs.com/chenpi/p/5133648.html
	
mysql 时间、时间戳、字符串之间的相互转换
	https://www.cnblogs.com/smileFL/p/8473245.html   
	
不同实体之间转义

	显示 结果	描述	实体名称	实体编号
		空格	&nbsp;	&#160;
	<	小于号	&lt;	&#60;
	>	大于号	&gt;	&#62;
	&	和号	&amp;	&#38;
	"	引号	&quot;	&#34;
	'	撇号 	&apos; (IE不支持)	&#39;
	￠	分	&cent;	&#162;
	€	欧元	&euro
	
	
--where if 语句
			SELECT
			t.*, t.teacher_type
		FROM
			lrn_teacher t
		LEFT JOIN sys_user su on su.id = t.user_id
		WHERE
		IF (
			t.teacher_type = "INTERNAL",
			su.user_group_id IN (
				SELECT
					id
				FROM
					sys_user_group
				WHERE
					id_path LIKE concat('%', lower('11392008'), '%')
			)
		,
			t.group_id IN (
				SELECT
					id
				FROM
					sys_user_group
				WHERE
					id_path LIKE concat('%', lower('11392008'), '%')
			)
		)
	
公共
	<sql id="charge">  </sql>
	<include refid="AbrsCommonMapper.ABRS_COMMON_USER"></include>  
分页
	@Param("page") Pageable pageable   
	<include refid="common.page"></include>
	resultType="java.lang.Long"
条件
	<if test="tp.name != null"> and tp.name like concat("%",#{tp.name},"%")  </if>
	
	case when ppca.id is null  then "未颁发"
					else "已颁发"
					end is_awarded,
集合
	<resultMap type="net.parim.spark.abrs.trainingPlan.entity.TrainingPlan" id="TrainingPlan">
		<id column="id" property="id"/>
		<collection property="trainingPlanUnit" column="id" select="selectTrainingPlanUnit"></collection>
	</resultMap>
	
附件mybatis
	<collection property="attachements" column="id" select="Attachements"></collection>
	
	<resultMap type="net.parim.spark.core.library.entity.DocumentInfo" id="DocumentInfo"></resultMap>
	<select id="Attachements" resultMap="DocumentInfo">
		select ldi.* from post_plan_doc_xref ppdx 
			left join lib_document_info ldi on ldi.id = ppdx.document_id
			where  ppdx.post_plan_id = #{id}
	</select>
	
一个时间的时候 sql
	两个时间和一个时间比较
	<if test="exam.endDate != null and exam.startDate == null">
			AND e.start_time &lt;= #{exam.endDate}
		</if>
		<if test="exam.startDate != null and exam.endDate == null">
			AND e.start_time &gt;= #{exam.startDate}
		</if>
		
	两个时间和两个时间比较
	<if test="tp.startDate != null">
		and tp.start_date &gt;  #{tp.startDate}  
	</if>
	<if test="tp.endDate != null">
		and tp.end_date  &lt; #{tp.endDate}     小于号
	</if>
	
建表 各种类型
	https://www.cnblogs.com/widows/p/7137184.html
	
	create table taraining_plan_edu(
		id int primary key auto_increment,
		name varchar(18),
		start_date datetime,  #时间类型
		end_date datetime ,
		descript varchar(255),
		plan_type varchar(18),
		progress varchar(18)
	);
	
mysql 复制插入数据  平表
	replace INTO taraining_plan_edu ( name,start_date,end_date,descript,plan_type,progress,id,is_deleted)
	(select tp.name,tp.start_date,tp.end_date,tp.descript,tp.plan_type,
	concat_ws("/",
	(select count(1) ws1 from training_plan_unit tpu where tpu.training_plan_id = tp.id and  tpu.is_report="REPORTED" and tpu.is_deleted =0),
	(select count(1) ws2 from training_plan_unit tpu where tpu.training_plan_id = tp.id and  tpu.is_deleted = 0))  -- 8/9
	 progress ,
	tp.id id ,tp.is_deleted
	from training_plan tp  
	where DATE_FORMAT(tp.last_modified_date, '%Y-%m-%d') >= DATE_SUB(CURDATE(), INTERVAL 1 DAY)
	)
	
*/
*******************************  Controller  ********
/*
获取参数
	@PathVariable("id") Long id
	@RequestParam(name = "ids") Long[] ids   // {params:{ids:ids}}
	@PageableDefault(size = 10, sort = "lastModifiedDate", direction = Direction.DESC)Pageable pageable
	@CurrentUser() UserToken userToken
	
返回分页
	Page<KnowledgeReply> rePage = knowledgeReplyService.getKnowledgeReplyPage(knowledge,pageable);
	Type type = new TypeToken<List<KnowledgeReplyDto>>() {
	}.getType();
	return ModelMapperUtils.map(rePage, type, pageable);
	
controller modelMapper静态
	private final static ModelMapper modelMapper = new ModelMapper();
	
	
返回实体
	return ModelMapperUtils.map(knowledge2, KnowledgeDto.class);
注解
	@RestController
	@RequestMapping(value = "/api/postPlanAction")
	
	@RequestMapping(value = "add", method = RequestMethod.PUT)
	
	
权限 
	controller 注解
	@DataRule(value = "LEARNING:COURSE:VIEW", entity = Course.class, rangeBy = "userGroup")
	
	service 获取权限
	DataRestriction dataRestriction = DataRuleUtils.getDataRestriction();
	
	@Param("dataRule")DataRestriction dataRule
	
	<!--<if test="null != dataRule">
		and o.user_group_id in
		(<include refid="permission.userDataRuleSubQuery"></include> )
	</if>-->
	
*/
**************************  Service   ***********************************
/*
	extends BaseService<KnowledgeCollection,Long,KnowledgeCollectionRepository>
	
	return new PageImpl<>(speaList, pageable, total);
*/

*******************************     jpa    ********************
/*
jpa继承
	 extends SupportRepository<KnowledgeCollection,Long>
	 
	
*/

*****************************    实体entity  **********************
/*
表注解
	@Entity
	@Table(name = "regulations")
	@Table(name = "lrn_offering_enrollment", uniqueConstraints = {@UniqueConstraint(columnNames={"offering_id", "user_id"})})
	@DynamicInsert
	
属性注解
	@ColumnDefault("UNCOMPLETE")
	@Transient
	@Formula("(select count(kr.id) from knowledge_reply kr where kr.knowledge_id = id and kr.replied_target is null and kr.is_deleted = 0)")
	@ManyToOne
	@JoinColumn(name="last_replied_by")
	@QueryLike()

导入注解
	@ExcelImportConfig(startLine=4) // 实体注解
	@ExcelImportCol(nullable=false,colIndex=2)  //属性注解
实体继承
	extends Repairable

附件
	@OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "regulations_doc_xref", joinColumns = @JoinColumn(nullable = false, name = "regulation_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "document_id", referencedColumnName = "id"))
    private List<DocumentInfo> attachements;
	
	
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "lrn_course_teacher", joinColumns = @JoinColumn(name = "course_id", nullable = false, updatable = false, foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)), inverseJoinColumns = @JoinColumn(name = "teacher_id", nullable = false, updatable = false, foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)), uniqueConstraints = {
            @UniqueConstraint(columnNames = { "course_id", "teacher_id" }) })
	
四个属性dto的
	private UserDto createdBy;
	private Date createdDate;
	private UserDto lastModifiedBy;
	private Date lastModifiedDate;
*/


*********************************   ts   ***********************
/*					   

		private route: ActivatedRoute,
		private router:Router,
		private message: NzMessageService,
		private modal: NzModalService,
获取路由参数		-- 路由配置中的
		<div class="knowing-content-bottom-bd clearfix" *ngFor="let item of dataList ;let i =index " [routerLink]="['/knowing/knowing-detail/'+item.id]"></div>
		this.route.params.subscribe(
		  (params: Params) => {
			console.log(params)
			  this.trainingPlanUnitId = params["id"];
			}
		)
路由传参		--普通参数
		 <div class="knowing-content-bottom-bd clearfix" [routerLink]="['/knowing/knowing-detail/'+row?.id]" [queryParams]="{ type:'collection' }"></div>
		 this.route.queryParams.subscribe(
		  (params: Params) => {
			if(params.type=="collection"){
			  this.collectType = false;
			}
		}
		)
排序	
		{ title: '名称/编码', tpl: 'col2-1', showSort: true, sortKey: 'name' }, 
		{ title: '培训内容', data: 'trainingContent',style:{'max-width':'200px','width':'200px'}, styleClass: 'text-center' },
分页参数
		let params= {
		  ...this.searchBy,
		  page: page ? page.number : 0,
		 size: page ? page.size : '10',
		   params['sort'] = typeof page.sort === 'string' ? page.sort : ''; 
		}
		
		let param = FormDataUtil.searchParamFilter(params); // 过滤为空数据
回调参数		
		@Output() save: EventEmitter<any> = new EventEmitter();
		this.closeModal.emit();
		
js方法 --移除数组元素
		this.leftData.splice(index,1);     //index 为索引
		this.leftData.splice(5,0，{});   //指定位置添加一个对象
		
验证组件		
		name: [m.name, [Validators.required, Validators.maxLength(20)]],
		
		 <div nz-form-control [nzValidateStatus]="getFormControl('name')" nz-col [nzSm]="14" [nzXs]="24" nzHasFeedback>
			<nz-input [nzSize]="'large'" formControlName="name" [nzId]="'name'" [nzPlaceHolder]="'请控制字符在20个以内'"></nz-input>
			<div nz-form-explain *ngIf="getFormControl('name').dirty&&getFormControl('name').hasError('required')">评估名称必填!</div>
			<div class="text-danger" *ngIf="dataForm.controls.name.dirty&&dataForm.controls.name.errors?.maxlength">字数最多20个字</div>
		</div>
initForm赋值		
		this.getFormControl("changeUser").setValue(selUser);
		this.getFormControl("userGroupName").setValue( selUser.userGroup?selUser.userGroup.name:"");
//时间验证
		
		scoreDisplayTime: [this.examDetail.scoreDisplayTime || '', this._confirmEndTimeValidator],
		answerDisplayTime: [this.examDetail.answerDisplayTime || '', this.confirmEndTimeValidator],
		
		  _confirmEndTimeValidator = (control: FormControl): { [s: string]: boolean } => {
			let controls = this.validateForm && this.validateForm.controls;
			if (controls) {
			  const startTime = moment(controls[`startTime`].value).unix();
			  if (control.value) {
				if (startTime > moment(control.value).unix()) {
				  this.validateForm.get(`scoreDisplayTime`).setValue(null);
				  this.message.error('成绩发布时间不能小于考试开始时间');
				  return;
				}
			  }
			}
		  }
		  
批量操作
	    if (!this.selection || this.selection.length == 0) {
			this.message.error("请选择要删除的组织!");
			return;
		  }
		  this.selection.forEach(item => {
			if(item.isReport=="UNREPORTED"){
			  params.push(item.id)
			}
		  });
弹出
	    this.modal.confirm({
              title: `确定要删除选择的评估模板吗？`,
              onOk: () => {
                this.assessService.delete(this.selected).subscribe(
                  () => {
                    this.message.success('删除成功');
                    this.loadData();
                  },
                  err => { this.message.error(err) }
                );
              }
            });
			
组织名称按照规则显示全程
			 pressPaths(namePath) {
    if (namePath) {
      let name = namePath.split(',')
      if (name.length > 2) {
        name.splice(0, 2)
        if (name.length > 1) {
          name.splice(1)
        }
      } else {
        name.splice(0, 1)
      }
      return name.join(' / ');
    }
  }
 */
 ***************************   html     ********************************
 /*
 
 权限操作
	*spkAuthzIf="{hasPermission: 'RESOURCE:TEACHER_LIB:ADD'}"   html中加入这个 
 
 类型转换
	 <ng-template cuiColTpl="startDates" let-row="row">
		{{row.startDate | date: 'yyyy-MM-dd HH:mm:ss' }}
	</ng-template>
	
时间组件		
	<nz-datepicker [nzShowTime]="true" formControlName="startDate"  (ngModelChange)="onStartChange($event)"  [nzDisabledDate]="_disabledStartDate" style="width:100%;" [nzFormat]="'YYYY-MM-DD HH:mm:ss'"></nz-datepicker>
	
	_startDate = null;
   _endDate = null;

  onStartChange(date: Date): void {
    this._startDate = date;
  }

  onEndChange(date: Date): void {
    this._endDate = date;
  }
 
 _disabledStartDate = (startValue) => {
    // this.yearplan.endDate = new Date(this.yearplan.endDate)
    if (!startValue || !this._endDate) {
      return false;
    }
    return startValue.getTime() >= this._endDate.getTime();
  };

  _disabledEndDate = (endValue) => {
    // this.yearplan.startDate = new Date(this.yearplan.startDate)
    if (!endValue || !this._startDate) {
      return false;
    }
    return endValue.getTime() <= this._startDate.getTime();
  };
日期选择框
	<nz-datepicker [nzShowTime]="true" [nzMode]="'month'" formControlName="trainingDate" style="width:100%;" [nzFormat]="'MM月'"></nz-datepicker>
	
数字验证
	 <nz-input-number formControlName="trainPeopleNum" [nzMin]="0" [nzStep]="1"></nz-input-number>
	 
列表组件
	<cui-data-table #dataTable [columns]="columns" [data]="trainingPlan?.content" [pagination]="trainingPlan"
            selectType="checkbox" [(selection)]="selection" (reload)="loadData($event)" [loading]="loading">
			左侧菜单
		<ng-template #listTools>   
              <ng-container *ngTemplateOutlet="theListTools"></ng-container>
          </ng-template>
		  复杂查询
          <ng-template #complexSearch>
              <ng-container *ngTemplateOutlet="complexSearchBox"></ng-container>
          </ng-template>
		简单查询
          <ng-template #simpleSearch>
              <ng-container *ngTemplateOutlet="simpleSearchBox"></ng-container>
          </ng-template>
		  底部批量
		   <ng-template #actionGroup>
                <button class="btn btn-outline-primary" (click)="publish()">发布</button>
                <button class="btn btn-outline-info" (click)="disPublish()">取消发布</button>
                <button class="btn btn-outline-primary" (click)="archive()">结班</button>
                <button class="btn btn-outline-info" (click)="disArchive()">取消结班</button>
                <button class="btn btn-outline-danger" (click)="delete()">批量删除</button>
        </ng-template>
			
	</cui-data-table>
弹框组件	
	<nz-modal [nzVisible]="showVisible" [nzTitle]="false"  [nzZIndex]="800"  [nzWidth]="900" [nzFooter]="false" [nzContent]="detailContent" (nzOnCancel)="handleCancel($event)">
		 <ng-template #detailContent ></ng-template>
	</nz-modal>
	
切换栏组件
	 <nz-tabset [nzSelectedIndex]="0" *ngIf="showVisible">
		<nz-tab>
		  <ng-template #nzTabHeading>
			培训详情
		  </ng-template>
		  <div class="container-fluid">
			<div class="page-body">
				
			</div>
		  </div>
		</nz-tab>
	</nz-tabset>
	
选择框组件
	 <nz-select name="language" [nzPlaceHolder]="'默认语言'" [nzAllowClear]="true"  [(ngModel)]="searchBy.type" (ngModelChange)="search()"   [nzAllowClear]="false">
		<nz-option *ngFor="let item of _languages;let i =index" [nzLabel]="item.label" [nzValue]="item.value" [nzDisabled]="item.disabled">
		</nz-option>
	</nz-select>
	
选择组织	
	<spk-user-group-select (ngModelChange)="logSelectGroup($event)" formControlName="userGroup"></spk-user-group-select>
	<spk-user-group-select (ngModelChange)="logSelectGroup($event)" name="userGroup"></spk-user-group-select>
	 <spk-user-group-select formControlName="managerGroup" mode="single" [permission]="['EXAM:PAPER:ADD']"></spk-user-group-select>
	
	按钮
	 <spk-user-group-select #ugLookup  style="display: inline-block;" [autoClear]="true"
        (selectOk)="logSelectGroup($event)">
        <ng-template #echoTpl>
          <button type="button" class="btn btn-outline-primary" (click)="ugLookup.openLookup()">添加组织</button>
        </ng-template>
      </spk-user-group-select>
	
选择用户
	<spk-user-lookup formControlName="leaders" placeholder="请选择班级负责人" ></spk-user-lookup>
	<spk-user-lookup name="leaders" placeholder="请选择班级负责人" [(ngModel)]="searchBy.type"></spk-user-lookup>
	
	
nzInput 
	<nz-input name="searchText" [nzPlaceHolder]="'请输入培训班名称或编码'" [(ngModel)]="searchBy.type"> </nz-input>
	(nzBlur)="typeNameBlur()"
	(click) ="typeNameBlur()"
	
路由传参
	<a href="javascript:;" [routerLink]="[row.id, 'show',{type:PlanType}]">查看计划</a>
	
批量操作
	  <div class="btn-group">
        <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            <span>批量操作</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" (click)="publish(null,false)">发布</a>
            <a class="dropdown-item" (click)="disPublish(null,false)">取消发布</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" (click)="superior()">设为精选</a>
            <a class="dropdown-item" (click)="disSuperior()">取消精选</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" (click)="delete()">批量删除</a>
        </div>
    </div>
小竖线	
		<span nz-table-divider></span>
	 <div class="dropdown-divider"></div>  小横线
 */
 *************************      css    *****************************
 /*
	word-break:break-all;   英文断行
	text-overflow:ellipsis;overflow:hidden;  // 超出显示省略号
	white-space:nowrap; //强制不换行
	
	
class 名字
	text-secondary  蓝
	text-info	绿
	text-danger	灰
	text-success	红
 */
 
 
 *******************************其他注意细节**************************************************
/*
	(@RequestBody List<Long> ids)      				ts    return this.http.post(`${this.url}/approval/isRiding`, ids)
	(@RequestParam(name="ids") List<Long> ids)		ts	  return this.http.delete(`${this.url}/del/approval`,  { params: { ids: ids } })
*/
 
 
 
 *******************************gradle 项目创建  子项目 那些踩过的坑 **************************************************************
 
 -- 一定要相信自己 逻辑与代码都没有问题  错的 不过是那些 需要注意的地方  更是那些 项目本身没有刷新过来  ***代码是没有问题的***  
-- ***代码是没有问题的***    ***代码是没有问题的***
 -- 全是项目的锅
 /*

 第一步 创建项目 
	 settings.gradle  创建项目
		include 'spark-icbc:icbc-provider'
		include 'spark-icbc:icbc-console'
		include 'spark-icbc:icbc-learner'
		
	build.gradle   // 为了接口的
		compile project(':spark-icbc:icbc-console')
		compile project(':spark-icbc:icbc-learner')
	
 第二步 项目依赖
	build.gradle   // icbc-console
		compile project(':spark-icbc:icbc-provider')
	build.gradle   // icbc-learner
		compile project(':spark-icbc:icbc-provider')

		
	写完之后 已经不知道  gradle build  ||   install  ||   cleanEcl ecl  
	
	******最重要的  重新引入项目 删除 workspace
	
创建项目包
	不再java resouce 中    gradle cleanEcl ecl  不行的话 重启 eclipse
 */
 
 
 
 *******************************    打包命令     ************************
/*
 gradle clean :build -Denv=prod
 
gradle -Denv=prod clean mkZip -x test -x javadoc
gradle clean :build -Denv=prod

后台服务器启动命令
启动命令：进入 ~/docker/unicom-dev 后执行 docker-compose restart spark


脚本.bat
	@echo off
	cd c:/work/learn-web/console-web
	git pull
	echo "后台pull成功"
	cd c:/work/learn-web/learner-web
	git pull
	echo "学员端pull成功"
	cd c:/work/parim/parim-spark
	git pull
	echo "服务端pull成功"

	:: echo "清空目录 启动parim-spark热部署"
	pause
	rem 启动热部署
	rem cd c:/work/parim/JrebelLicenseServerforJava
	:: mvn exec:java -Dexec.mainClass="com.vvvtimes.server.MainServer"
	echo "启动selenium"
	cd c:/work/tools/selenium-remote-control-1.0.3/selenium-server-1.0.3
	java -jar selenium-server.jar 

*/





