import Image from "next/image";
import Link from "next/link";
import { Box, Grid, Button, Typography, Container, Stack } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Version from "@/components/Home/Version";
import FriendlyLinks from "@/components/Home/FriendlyLinks";
import Features from "@/components/Home/Features";
import Title from "@/components/Home/Title";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const IMAGE_LIST = [
  {
    name: "主机资源监控",
    url: "/images/album/0.png",
  },
  {
    name: "批量主机管理",
    url: "/images/album/1.png",
  },
  {
    name: "在线终端",
    url: "/images/album/2.png",
  },
  {
    name: "多人共享终端",
    url: "/images/album/3.png",
  },
  {
    name: "文件管理",
    url: "/images/album/4.png",
  },
  {
    name: "Docker 管理",
    url: "/images/album/5.png",
  }
];

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#F8F9FC" }}>
      <Box sx={{ pt: 16, pb: 18, backgroundColor: "#0F1935", color: "#fff" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: { xs: "block", sm: "flex" }, flexWrap: "wrap" }}>
            <Grid container sx={{ flex: 1 }}>
              <Grid item xs={12}>
                <Typography variant="h3" sx={{ pb: 3 }}>
                  牧云主机管理助手{" "}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ pb: 3 }}>
                  简单、易用的主机一体化运维托管平台，帮你解放双手，像放羊一样管理服务器。
                </Typography>
              </Grid>
              <Grid container item xs={12} spacing={2}>
                <Button
                  variant="contained"
                  component={Link}
                  target="_blank"
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    ml: { xs: 2, sm: 2 },
                    mb: { xs: 2, sm: 0 },
                  }}
                  href="https://rivers.chaitin.cn/landing/collie"
                >
                  免费使用
                </Button>
                <Button
                  variant="contained"
                  color="neutral"
                  component={Link}
                  target="_blank"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#fff",
                    color: "#000",
                    ml: { xs: 2, sm: 2 },
                    mb: { xs: 2, sm: 0 },
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      fontWeight: "500",
                    },
                  }}
                  href="https://github.com/chaitin/collie"
                  startIcon={
                    <Image
                      src="/images/github.png"
                      alt="Logo"
                      width={16}
                      height={16}
                      priority
                    />
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  color="neutral"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    ml: { xs: 2, sm: 2 },
                    width: { xs: "100%", sm: "auto" },
                  }}
                  component={Link}
                  href="/#groupchat"
                  startIcon={
                    <Image
                      src="/images/wechat-logo.png"
                      alt="Logo"
                      width={16}
                      height={16}
                      priority
                    />
                  }
                >
                  讨论组
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "right" },
                pt: { xs: 3, sm: 0 },
                ml: { xs: 0, sm: 3 },
              }}
            >
              <Image
                src="/images/collie.png"
                alt="Logo"
                width={196}
                height={196}
                priority
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container sx={{ mt: -10, color: "#000", pb: 3 }}>
        <Features />
      </Container>
      <Container
        sx={{
          color: "#000",
          ".carousel .control-dots .dot": {
            backgroundColor: "#000",
          },
          ".carousel .control-prev.control-arrow": {
            padding: "20px",
            borderRadius: "12px 0 0 12px",
          },
          ".carousel .control-next.control-arrow": {
            padding: "20px",
            borderRadius: "0 12px 12px 0",
          },
          ".carousel .control-prev.control-arrow:before": {
            borderRightColor: "rgba(0,0,0,0.5)",
          },

          ".carousel .control-next.control-arrow:before": {
            borderLeftColor: "rgba(0,0,0,0.5)",
          },
          ".carousel .slide .legend": {
            width: "30%",
            marginLeft: "-15%",
          },
        }}
      >
        <Stack sx={{ pt: 15 }} spacing={6} alignItems="center">
          <Title title="产品展示" />
          <Box sx={{ boxShadow: "0 12px 25px -12px rgba(93,99,112, 0.2)" }}>
            <Carousel
              interval={2000}
              infiniteLoop
              autoPlay
              showStatus={false}
              showThumbs={false}
            >
              {IMAGE_LIST.map((item) => (
                <Box
                  key={item.url}
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <Box component="img" src={item.url} alt={item.name} />
                  <Box
                    className="legend"
                    sx={{
                      opacity: "0.40 !important",
                      py: "4px !important",
                      borderRadius: "4px !important",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontSize: "14px" }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Stack>
      </Container>
      <Container sx={{ color: "#000", pb: 3 }}>
        <Stack sx={{ pt: 15 }} spacing={3} alignItems="center">
          <Title title="版本对比" />
          <Version />
        </Stack>

        <Stack sx={{ pt: 15 }} id="groupchat" spacing={6} alignItems="center">
          <Title title="微信讨论组" />
          <Image
            src="/images/qrcode.png"
            alt="wechat"
            width={300}
            height={300}
            priority
          />
        </Stack>
        <Box sx={{ pt: 12 }}>
          <FriendlyLinks />
        </Box>
        <Stack sx={{ pt: 6, color: "rgba(0,0,0,0.5)", textAlign: "center" }}>
          © 2023 北京长亭未来科技有限公司京 ICP 备 19035216 号京公网安备
          11010802020947 号
        </Stack>
      </Container>
    </Box>
  );
}
