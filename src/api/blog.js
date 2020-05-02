import request from "../helpers/request";

const URL={
  GET_LIST:'/blog',
  GET_DETAIL:'/blog/:blogTd',
  CREATE:'/blog',
  UPDATE:'/blog/:blogTd',
  DELETE:'/blog/:blogTd',
}

export default {
  getBlogs({page=1,userId,atIndex}={page:1}){
    return request(URL.GET_LIST,'GET',{page,userId,atIndex})
  },
  getIndexBlogs({page=1}={page:1}){
    return this.getBlogs({page,atIndex:true})
  },
  getBlogsById(userId,{page=1,atIndex}={page:1}){
    return this.getBlogs({userId,page,atIndex})
  },
  getDetail({blogId}){
    return request(URL.GET_DETAIL.replace(':blogId',blogId))
  },
  updateBlog({blogId},{title,content,description,aiIndex}){
    return request(URL.UPDATE.replace(':blogId',blogId),'PATCH',{title,content,description,aiIndex})
  },
  deleteBlog({blogId}){
    return request(URL.DELETE.replace(':blogId',blogId),'DELETE')
  },
  createBlog({title='',content='',description='',atIndex=false}={title:'',content:'',description:'',atIndex:false}){
    return request(URL.CREATE,'POST',{title,content,description,atIndex})
  }

}
