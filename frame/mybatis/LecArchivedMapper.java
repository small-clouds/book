package net.parim.spark.unicom.console.lecturer.manage.repository.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;
import org.springframework.data.domain.Pageable;

import net.parim.spark.core.system.security.authz.model.DataRestriction;
import net.parim.spark.learning.resources.entity.Teacher;


public interface LecArchivedMapper {
	//获取所有已归档的讲师
	List<Teacher> findLectherArchived(Teacher teacher);
	
	@Update("update  lrn_lec_category_ref set archiving_status ='ARCHIVED' where id in (${ids})")
	void getUserbyIds(@Param("ids")String ids);
	
	
	
	//讲师归档列表
	List<Teacher> findAllAreadyFileLecture(Teacher teacher,@Param("dataRule")DataRestriction dataRule,
				  @Param("page")Pageable pageable);
	//讲师归档数量
	Long findAllAreadyFileLectureCount(Teacher teacher);
	//批量归档
	@Update("update lrn_lec_category_ref set archiving_status ='UNFILED' where id in (${id})")
	int updateTeacherFile(@Param("id")String id);
	
	
	//讲师申请列表
	List<Teacher> getApplyList_y(@Param("teacher")Teacher teacher,@Param("dataRule")DataRestriction dataRestriction,
				  @Param("page")Pageable pageable);
	//讲师申请数量
	Long getApplyCount_y(@Param("teacher")Teacher teacher,@Param("dataRule")DataRestriction dataRestriction);

    //讲师认证列表
    List<Teacher> getAUTHList_h(@Param("teacher")Teacher teacher,@Param("dataRule") DataRestriction dataRestriction,  @Param("page")Pageable pageable);
	//讲师认证数量
	Long getAuthCount_h(@Param("teacher")Teacher teacher,@Param("dataRule") DataRestriction dataRestriction,@Param("page")Pageable pageable);

	//讲师库列表
    List<Teacher> getTeacherList_h(@Param("teacher")Teacher teacher,@Param("dataRule") DataRestriction dataRestriction,  @Param("page")Pageable pageable);
	//讲师库列表数量
	Long getTeacherCount_h(@Param("teacher")Teacher teacher,@Param("dataRule") DataRestriction dataRestriction, @Param("page") Pageable pageable);


	//推荐讲师列表
    List<Teacher> getTeacherList_ch(@Param("teacher")Teacher teacher,@Param("dataRule") DataRestriction dataRestriction,  @Param("page")Pageable pageable);
	//推荐讲师数量
	Long getTeacherCount_ch(@Param("teacher")Teacher teacher,@Param("dataRule") DataRestriction dataRestriction, @Param("page") Pageable pageable);


	//教辅查看列表
	List<Teacher> getAUTHList_jf(@Param("user_group_id")Long user_group_id,@Param("page") Pageable pageable);

	//教辅查看列表数量
	Long getAuthCount_jf(@Param("user_group_id")Long user_group_id, @Param("page")Pageable pageable);
}
