import request from "../../helpers/request";
import auth from "../../api/auth";
import blog from "../../api/blog";

window.request=request
window.auth=auth
window.blog=blog

export default {
    methods: {
      open1()
      {
        this.$message('这是一条消息提示');
      }
    }
}
