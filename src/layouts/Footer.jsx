import { Box, Container, Grid, Typography, List, ListItem, ListItemText, Link } from "@mui/material";

const Footer = () => {
	return (
		<Box sx={{ bgcolor: "#212121", color: "white", py: 4, mt: 4, width: "100vw" }}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					{/* Cột 1: Thông tin shop */}
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" gutterBottom>
							🛍️ Shop X - Thời trang phong cách
						</Typography>
						<Typography variant="body2">"Nâng tầm phong cách - Tự tin khẳng định"</Typography>
						<Typography variant="body2" sx={{ mt: 1 }}>
							📍 Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM
						</Typography>
						<Typography variant="body2">📞 Hotline: 0123 456 789</Typography>
						<Typography variant="body2">📧 Email: support@shopx.com</Typography>
					</Grid>

					{/* Cột 2: Menu phụ */}
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" gutterBottom>
							📌 Menu
						</Typography>
						<List>
							<ListItem>
								<ListItemText primary="Giới thiệu" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Chính sách bảo hành" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Chính sách đổi trả" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Liên hệ" />
							</ListItem>
						</List>
					</Grid>

					{/* Cột 3: Bản đồ */}
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" gutterBottom>
							📍 Bản đồ
						</Typography>
						<Box
							component="iframe"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.722001753003!2d106.66455817484445!3d10.758384959467998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edbaf5c3c7b%3A0x8d5c4d79ecf6f541!2sNguyen%20Hue%20Street%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1633271376548!5m2!1sen!2s"
							width="100%"
							height="150"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
						/>
					</Grid>
				</Grid>

				{/* Footer bản quyền */}
				<Box sx={{ textAlign: "center", mt: 3, pt: 2, borderTop: "1px solid gray" }}>
					<Typography variant="body2">© 2025 Shop X. All Rights Reserved.</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
