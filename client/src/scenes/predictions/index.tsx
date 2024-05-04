import { Box, useTheme } from "@mui/material";

function Predictions() {
  const { palette } = useTheme();
  return <Box color={palette.grey[500]}>Predictions</Box>;
}

export default Predictions;
