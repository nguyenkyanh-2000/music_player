import { styled } from "@mui/material/styles";

export const AppContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  height: "100%",
  maxHeight: "667px",
  width: "100%",
  maxWidth: "375px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
  boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.5)",
}));
