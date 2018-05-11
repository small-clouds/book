 @Test  
public void testJpaSpeciationExecutor(){  
        int pageNo=0;  
        int pageSize=5;  
        PageRequest pageRequest=new PageRequest(pageNo, pageSize);  
        //通常使用Specification 的匿名内部类，  
        Specification<Person> specification=new Specification<Person>() {  
  
        /* 
         * @param root:代表的查询的实体类 
         * @param query：可以从中得到Root对象，即告知JPA Criteria查询要查询哪一个实体类， 
         * 还可以来添加查询条件，还可以结合EntityManager对象得到最终查询的TypedQuery 对象 
         * @Param cb:criteriabuildre对象，用于创建Criteria相关的对象工程，当然可以从中获取到predicate类型 
         * @return:代表一个查询条件 
         */  
            @Override  
            public Predicate toPredicate(Root<Person> root,  
                    CriteriaQuery<?> query, CriteriaBuilder cb) {  
//              Path path=root.get("id");  
//              Predicate predicate=cb.gt(path, 5);  
                  
                Predicate p1=cb.like(root.get("id").as(String.class), "%"+"1"+"%");  
                Predicate p2=cb.equal(root.get("lastName").as(String.class), "sd");  
                Predicate p3=cb.like(root.get("email").as(String.class), "%s%");  
//              构建组合的Predicate示例：  
                Predicate p = cb.and(p3,cb.or(p1,p2));  
                  
                return p;  
            }  
              
        };  
          
        Page<Person> page=personRepotory.findAll(specification,pageRequest);  
      
        System.out.println("总记录数"+page.getTotalElements());  
        System.out.println("当前第几页"+page.getNumber());  
        System.out.println("总页数"+page.getTotalPages());  
        System.out.println("当前页面的List"+page.getContent());  
        System.out.println("当前页面的记录数"+page.getNumberOfElements());  
    }  