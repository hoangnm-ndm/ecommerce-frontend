import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import bannerApi from "../../api/bannerApi";

const HeroSection = () => {
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		const fetchBanners = async () => {
			const data = await bannerApi.getAll();
			setBanners(data);
		};
		fetchBanners();
	}, []);

	return (
		<Box sx={{ width: "100%", height: "500px", position: "relative" }}>
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{ delay: 5000 }}
				pagination={{ clickable: true }}
				navigation
				loop
				style={{ width: "100%", height: "100%" }}
			>
				{banners.map((banner) => (
					<SwiperSlide key={banner.id}>
						<Box
							sx={{
								width: "100%",
								height: "500px",
								backgroundImage: `url(${banner.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#fff",
								textAlign: "center",
								textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
							}}
						>
							<Box>
								<Typography variant="h3" fontWeight={700}>
									{banner.title}
								</Typography>
								<Typography variant="h6" mt={2}>
									{banner.description}
								</Typography>
								<Button variant="contained" color="primary" sx={{ mt: 3 }} component={Link} to={banner.link}>
									Xem ngay
								</Button>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default HeroSection;
