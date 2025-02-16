const user = {
	username: "admin",
	email: "hoang@gmail.com",
	role: "admin",
};

admin đăng nhập -> lưu jwt và role lại -> vào hệ thống -> admin tắt tab đi chơi -> mở tab lên
-> lưu role và jwt ở trong localStorage thì không sao -> ứng dụng chạy tiếp vì jwt vẫn còn thời hạn.
-> lưu jwt và role vào trong state (context) -> tắt ứng dụng thì mất hết -> không cần phải logout.
-> chỉ lưu jwt, không lưu role