"use client";

import { Button, Tooltip } from "@mui/material";
import { MdOutlineCloudUpload } from "react-icons/md";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UploadFileSample() {
  return (
    <Tooltip title="Upload new file">
      <Button
        component="label"
        className="capitalize border-none rounded-full"
        sx={{
          height: 32,
        }}
        role={undefined}
        size="small"
        color="inherit"
        variant="outlined"
        tabIndex={-1}
        startIcon={<MdOutlineCloudUpload />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    </Tooltip>
  );
}

export default UploadFileSample;
