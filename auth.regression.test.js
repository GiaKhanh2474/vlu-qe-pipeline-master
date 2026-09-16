const login = require('./auth');

describe('Regression Test - Các trường hợp ngoại lệ khi đăng nhập', () => {
  test('sai mật khẩu trả về false', () => {
    expect(login('admin', 'sai123')).toBe(false);
  });

  test('sai tài khoản trả về false', () => {
    expect(login('user', '123')).toBe(false);
  });

  test('username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('password rỗng trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('mật khẩu chứa ký tự đặc biệt trả về false', () => {
    expect(login('admin', '12#@!3')).toBe(false);
  });

  test('tài khoản bị khóa (locked_user) trả về false dù mật khẩu đúng', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('username viết hoa/thường khác trả về false', () => {
    expect(login('Admin', '123')).toBe(false);
  });

  test('cả username và password đều sai trả về false', () => {
    expect(login('hacker', 'wrongpass')).toBe(false);
  });
});
