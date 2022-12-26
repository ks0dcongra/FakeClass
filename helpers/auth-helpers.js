const getUser = req => {
  return req.user || null
}
// 驗證進入後台的人是否為管理員
const ensureAuthenticated = req => {
  return req.isAuthenticated()
}

module.exports = {
  getUser, ensureAuthenticated
}
