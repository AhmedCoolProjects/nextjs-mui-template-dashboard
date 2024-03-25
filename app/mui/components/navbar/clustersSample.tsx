import { Badge, Button, Tooltip } from "@mui/material";
import { AiOutlineCluster } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import ClustersDialog from "../dialogs/clusters";
import { useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
    right: 6,
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function ClustersSample() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="2 Clusters, 7 Sensors">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Button
            className="capitalize rounded-full"
            sx={{
              height: 32,
            }}
            variant="outlined"
            size="small"
            color="inherit"
            onClick={handleOpen}
            startIcon={<AiOutlineCluster />}
          >
            Clusters
          </Button>
        </StyledBadge>
      </Tooltip>
      <ClustersDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default ClustersSample;
