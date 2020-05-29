
******   一段程序的复杂度 是由当初设计的复杂度决定的   只有更简洁的代码 逻辑才会更清楚 越到后期 越能体现代码简介 容易理解的必要性  一段上百行逻辑的代码 即使效率在高  恐怕也没有多少程序员想去修改它

llhwvybubmbxjjdj
mbpigzyqbjugbaed
***********************   Mapper.xml *************************
/*
增改删
	UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson' 
	
	update table_a a join table_b b on a.xx=b.xx
	set a.xx=要变更的值
	where b.xx=条件值


	INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
	DELETE FROM Person WHERE LastName = 'Wilson' 
	alter table lib_document change column category_id category_id BIGINT(20) (not) null; // 更新表字段 是否为nullnull
批量插入
	insert into sys_role_privilege (privilege_id,role_id)
	select p.id as privilege_id,
	(select min(id) from sys_role r where r.role_type = 'SYSTRM') as role_id
	from sys_privilege p where p.id not in 
	(select rp.privilege_id form sys_role_privilege rp where rp.role_id = (select min(id) from sys_role r where r.role_type ='SYSTEM' ))
	
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
	@RequestParam(name="major.id",required=false) Long majorId
	
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
	
	
文件导出
	@Autowired
	ApplicationProperties applicationProperties;
	
	@GetMapping(value = "download")
	public void downloadExcel(@PageableDefault Pageable pageable, ExamStatusCommonParams examStatusCommonParams,
			HttpServletRequest request, HttpServletResponse response) {
		String fileName;
		pageable = null;
		if(examStatusCommonParams.getExcelTpye().equals("status")){
			fileName = "考试情况统计-" + DateTimeUtils.getCurrentDate().getTime() + ".xlsx";
		}else if(examStatusCommonParams.getExcelTpye().equals("examDetail")){
			fileName = "考试详情统计-" + DateTimeUtils.getCurrentDate().getTime() + ".xlsx";
		}else if(examStatusCommonParams.getExcelTpye().equals("question")){
			fileName = "试题答题情况统计-" + DateTimeUtils.getCurrentDate().getTime() + ".xlsx";
		}else{
			fileName = "考试成绩统计-" + DateTimeUtils.getCurrentDate().getTime() + ".xlsx";
		}
		
		String path = applicationProperties.getTemporaryDir() + "/" + fileName;
		try {
			examStatusService.createExcelFile(examStatusCommonParams, pageable, path);
			FileUtil.downLoadFile(request, response, path, fileName);

		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new BusinessException("操作文件出现错误，请尝试重新执行导出");
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new BusinessException(e.getMessage());
		} finally {
			FileUtils.deleteQuietly(new File(path));
		}
	}
	
*/
**************************  Service   ***********************************
/*
	extends BaseService<KnowledgeCollection,Long,KnowledgeCollectionRepository>
	
返回分页
	return new PageImpl<>(speaList, pageable, total);

service 手动增加排序
	List<Sort.order> orders = new ArrayList<>();
	orders.add(new Sort(new Sort.Order(Sort.Direction,"createdDate")));
	orders.add(new Sort(new Sort.Order(Sort.Direction,"isTop")));
	pageable = new PageRequest(pageabe.getPageNumber(),pageable.getPageSize(),orders)
service 手动增加排序
	Sort sort = new Sort(new Sort.Order(Sort.Direction,"createdDate"));
	Sort sort1 = pageable.getSort().and(sort);
	pageable = new PageRequest(pageabe.getPageNumber(),pageable.getPageSize(),sort1);
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
	@Inheritance(strategy = InheritanceType.JOINED)  //继承映射
	@DynamicInsert Hibernate: insert into Cat (cat_name, id) values (?, ?)   反之 Hibernate: insert into Cat (create_time, update_time, cat_name, id) values (?, ?, ?, ?)
	@DynamicUpdate Hibernate: update Cat set update_time=? where id=?  反之  Hibernate: update Cat set update_time=?, cat_name=? where id=?
属性注解
	@ColumnDefault("UNCOMPLETE")
	@Transient
	@Formula("(select count(kr.id) from knowledge_reply kr where kr.knowledge_id = id and kr.replied_target is null and kr.is_deleted = 0)")
	@ManyToOne
	@JoinColumn(name="last_replied_by")
	@QueryLike()
	@Lob
	@Column(length = 500)
	@ManyToMany(cascade = CascadeType.PERSIST)   级联更新  具体查查吧  很大概率在这些注
	
	解上出错
	@ManyToOne(fetch = FetchType.LAZY)			需要懒加载
	
	@OneToMany(mappedBy="material",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	在one-to-many注解配置： @OneToMany (mappedBy = "Articles"),mappedBy指向的是要关联的属性，而不是要关联的类，
        如果这样配置，hibernate则会找com.wangzhe.model.Keyword类下面的Articles 属性。但实际上没有这个属性，就会报上面的异常
   方法：指定到实际关联的属性：即：@OneToMany (mappedBy = "articles ")
	
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

滚动到最下面
		document.getElementById("divId").scrollIntoView();

排序	
		{ title: '名称/编码', tpl: 'col2-1', showSort: true, sortKey: 'name' }, 
		{ title: '培训内容', data: 'trainingContent',style:{'max-width':'200px','width':'200px'}, styleClass: 'text-center' },
分页参数
		let params= {
		  ...this.searchBy,
		  page: page ? page.number : 0,
		  size: page ? page.size : '10',
		  params['sort'] = typeof page.sort === 'string' ? page.sort : ''; 
		  sort:["tlastModifiedDate,DESC","usergroupId,ASC"]   // 多字段排序  
		}
		
		let param = FormDataUtil.searchParamFilter(params); // 过滤为空数据
回调参数		
		@Output() save: EventEmitter<any> = new EventEmitter();
		this.closeModal.emit();
		
js方法 --移除数组元素
		this.leftData.splice(index,1);     //index 为索引
		this.leftData.splice(5,0，{});   //指定位置添加一个对象

路由守卫 不更新页面更改连接地址
		this.router.navigateByUrl("/course;gradleId="+this.curId);
新页面打开地址
		this.router.navigate(['/home'], { replaceUrl: true });
		
验证组件		
		name: [m.name, [Validators.required, Validators.maxLength(20)]],
		phoneNumber: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
		endDate: [this.examDetail.endDate || '', [Validators.required, this.confirmEndDateValidator]],
		
		 <div nz-form-explain *ngIf="validateForm.controls.endDate.dirty&&validateForm.controls.endDate.hasError('error')">结束时间不能小于开始时间！!</div>
		  // 时间验证方法
		  confirmEndDateValidator = (control: FormControl): { [s: string]: boolean } => {
			let controls = this.validateForm && this.validateForm.controls;
			if (controls) {
			  const startTime = moment(controls[`startDate`].value).unix();
			  const enrollEnd = moment(controls[`enrollEnd`].value).unix();
			  if (control.value) {
				if (startTime > moment(control.value).unix()) {
				  this.validateForm.get(`startDate`).setValue(null);
				  this.message.error('结束时间不能小于开始时间！');
				  return;
				}
				if (enrollEnd) {
				  if (moment(enrollEnd).unix() > moment(control.value).unix()) {
					if ( typeof enrollEnd == 'number') {
					  this.validateForm.get(`enrollEnd`).setValue(null);
					  this.message.error('报名结束时间不能大于考试截止时间');
					  return
					}
				  }
				}
				if (controls.enrollStart) {
				  if (moment(controls.enrollStart.value).unix() > moment(control.value).unix()) {
					this.validateForm.get(`enrollStart`).setValue(null);
					this.message.error('报名开始时间不能大于考试截止时间');
					return
				  }
				}
			  }
			}
		  }
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
	<spk-user-group-select (selectOk)="logSelectGroup($event)" formControlName="userGroup"></spk-user-group-select> selectOk  选中之后 change 选择前的值
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
发布弹出
	  <ng-template cuiColTpl="isPutout" let-row="row">
        <div>
            <nz-popconfirm *ngIf="row.isPutout=='1'" [nzTitle]="'确定要取消发布吗？'" (nzOnConfirm)="ifPublishExam(row,row.examId,false)">
                <a nz-popconfirm class="text-success">已发布 </a>
            </nz-popconfirm>
            <nz-popconfirm *ngIf="row.isPutout=='0'" [nzTitle]="'确定要发布吗？'" (nzOnConfirm)="ifPublishExam(row,row.examId,true)">
                    <a nz-popconfirm class="text-secondary">未发布 </a>
            </nz-popconfirm>
        </div>
        <ng-template #elseBlock>
            <a *ngIf="row.isPutout=='0'" class="text-secondary">未发布</a>
            <a *ngIf="row.isPutout=='1'" class="text-success">已发布</a>
        </ng-template>
      </ng-template>
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
	
	
	git log --name-status   只查看日志文件改动的命令
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
	不再java resouce 中    gradle cleanEcl ecl  不行的话 重启 eclipse‘’‘
	
	
启动项目 
	安装 springboot 安装gradleship
	net.parim.spark.SparkApplication
	
前端项目启动   有点坑啊
	console-web 需要 Angular CLI version 1.1.1.  npm install -g @angular/cli@1.1.1    npm start
	npm start -- --port=4202
	spark-app  需要 Angular CLI version 6.0.8.  ng serve learner-web 
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

########git常用基本命令###############
查看分支：git branch
创建分支：git branch <name>
切换分支：git checkout <name>
在本地创建和远程分支对应的分支：git checkout -b branch-name origin/branch-name
创建+切换分支：git checkout -b <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>
把本地修改的文件添加到提交列表中：git add .
提交本地更新文件：git commit -m <describe>
撤销上次提交的记录：git reset --soft HEAD^
撤销到某一个版本号：git reset --hard e38a8100f2ba53549e9da4bff449afaaeba01e3b
从本地推送分支到服务器远端仓库(推送自己的修改到服务器)：git push origin <branch-name>
从远程抓取分支：git pull
查看远程库信息：git remote -v
查看commit提交记录日志：git log
######################################


----------------未整理 -------------start------


******************  controller页面   ******************************************************************
/*
分页
	@RequestParam(value = "start", defaultValue = "0") int start
	, @RequestParam(value = "length", defaultValue = AppConstants.PAGE_SIZE) int length
	
	PageHelper.startPage(start / length + 1 , length);
	
用户权限
	 and ia.AUDIT_ROLE in (
              select AUDIT_ROLE from base_user_audit_role where USER_ID=#{userId}
            )
			
list 判空	
	<if test="list.size() > 0">
	  _claimreview.id in
	  <foreach item="item" index="index" collection="list" open="(" separator="," close=")">  
		#{item}
	  </foreach>
	</if>
 
BigDecimal比较大小
		BigDecimal a = new BigDecimal (101);
		BigDecimal b = new BigDecimal (111);
		 
		//使用compareTo方法比较
		//注意：a、b均不能为null，否则会报空指针

		if(a.compareTo(b) == -1){
			System.out.println("a小于b");
		}
		 
		if(a.compareTo(b) == 0){
			System.out.println("a等于b");
		}
		 
		if(a.compareTo(b) == 1){
			System.out.println("a大于b");
		}
		 
		if(a.compareTo(b) > -1){
			System.out.println("a大于等于b");
		}
		 
		if(a.compareTo(b) < 1){
			System.out.println("a小于等于b");
		}

*/


******************  Html页面   ******************************************************************
/*
循环
	<select id="store" class="form-control">
		<option value="">全部</option>
		<option th:each="item:${baseStoreList}" th:value="${item.storeId}"
				th:text="${item.storeName}">
		</option>
	</select>
	
验证
	data-rule-required="true"  data-msg-required="请填写名称"  
	data-rule-checkCount="true" maxlength="10" 
	data-rule-number="true" data-msg-number="请填写数字!" 
	data-rule-min="0" data-msg-min="不能小于0!" 
	data-rule-rangelength="[8,50]" data-msg-rangelength="新密码长度必须介于8和50之间"
	
	data-rule-number="true" data-msg-number="请填写数字!"
	data-rule-min="0" data-msg-min="不能小于0!"

返回按钮
	<button type="button" class="btn btn-danger btn-sm" data-dismiss="modal" id="btnBack"><i class="fa fa-reply"></i> 返回</button>
	//返回
	$("#btnBack").click(function() {
		history.go(-1);
	});
*/





******************  js页面   ******************************************************************
/*
弹框提示
	$.modal.msgSuccess("保存成功");
	$.modal.alertError("保存失败");
	
ajax提交
	ajaxSubmit(ctx + 'resource/city/batch/submit', 
	{"provResIds": provResIds.join(",")}
	, function (data) {
		if (data.ok) {
			$.modal.msgSuccess("提交成功！");
			$table.ajax.reload();//刷新表格
		} else {
			$.modal.msgError("提交失败！");
		}
	})
确认数量验证
	 var inputList = $("input.resnumber");
        if(inputList==null || inputList.length==0){
            $.modal.msgError("请至少填写一条出库确认单明细信息!") ;
            return ;
        }	

*/


公司用到的程序	eclispe neno
	git 
	vscode
	node 
	java
	gradle
	angular
	pxcook


命令集合	
*************         gradle命令集合	
gradle cleanEcl ecl  	编译命令每次pull代码都应该编译一下
gradle run 	运行命令
	
	
关于程序要先编译在导入项目	
	
	
Gradle是一个基于Apache Ant和Apache Maven概念的项目自动化构建工具。	
	
	
	
自动化构建工具	
	
	
	
	
	
spring	
@Transactional	事务处理



 *************************   angular(npm)	

npm install 	安装命令(安装配置文件里面有的)
npm start 	运行命令
npm config set registry https://registry.npm.taobao.org     	淘宝换源 
npm config get registry  	查看换源是否成功
先ctrl+d在ctrl+c 	就能完全退出
	
npm install  console-ui-ng@0.0.68	
npm install bootstrap@4.0.0	
 npm install -g @angular/cli@1.2.7	安装脚手架
ng g c 	创建文件工程
	
npm run build	检查本地环境代码是否有错误
 npm start -- --port=4206	
	
	
	
npm uninstall -g angular-cli 	
npm cache clean --force 	
	
npm install -g @angular/cli@latest	


git	
git pull	
git clone	
	
git stash	暂存起来
git pull	与服务器同步
git statsh pop	暂存于服务器同步
	
git reset --hard FETCH_HEAD	FETCH_HEAD表示上一次成功git pull之后形成的commit点。然后git pull.
	
$ git reflog -10	
	
	
	
Apache Spark 是专为大规模数据处理而设计的快速通用的计算引擎

	
mainTyle必须写	net.parim.spark.SparkApplication	

	
	
	
