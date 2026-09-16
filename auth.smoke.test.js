const login = require('./auth');

describe('Smoke Test - Chức năng đăng nhập cốt lõi', () => {
  test('đăng nhập đúng (admin/123) trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
