
******************  controller页面   ******************************************************************
/*
分页
	@RequestParam(value = "start", defaultValue = "0") int start
	, @RequestParam(value = "length", defaultValue = AppConstants.PAGE_SIZE) int length
	
	PageHelper.startPage(start / length + 1 , length);
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
	
	
*/