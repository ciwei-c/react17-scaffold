import { makeAutoObservable } from "mobx"

interface UserInfo {
  name?: string
}

class UserStore {
  userInfo: UserInfo = { name: 'c' }
  constructor() {
    makeAutoObservable(this)
  }

  setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo
  }
}

export default UserStore