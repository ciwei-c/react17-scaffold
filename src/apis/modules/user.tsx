import request from "@/utils/request";

export default {
  login(data: any) {
    return request({
      url: "/login",
      method: "post",
      data
    })
  }
}