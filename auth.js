// Danh sách tài khoản bị khóa (dùng để minh họa test case "tài khoản bị khóa")
const LOCKED_ACCOUNTS = ['locked_user', 'banned_user'];

/**
 * Kiểm tra thông tin đăng nhập.
 * Trả về true nếu hợp lệ (admin/123, tài khoản không bị khóa),
 * false trong mọi trường hợp còn lại.
 * sửa lại thử chặng 4
 */
function login(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }
  if (username.trim() === '' || password === '') {
    return false;
  }
  if (LOCKED_ACCOUNTS.includes(username)) {
    return false;
  }
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = login;
}
