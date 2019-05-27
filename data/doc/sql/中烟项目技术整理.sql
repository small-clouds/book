
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