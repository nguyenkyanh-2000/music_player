import styled from "@emotion/styled";

export const WallPaper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: `linear-gradient(0deg,${theme.palette.secondary.main}  0%,  50%,${theme.palette.primary.main}  100%) 0px 0px / 100% 100% no-repeat no-repeat`,
}));
