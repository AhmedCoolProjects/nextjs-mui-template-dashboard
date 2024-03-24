"use client";

import IOSSwitch from "@/components/common/switch";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

function ClustersDialog({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="sm"
      fullWidth
      fullScreen={fullScreen}
    >
      <DialogTitle id="responsive-dialog-title">
        Select Clusters : Sensors to mantain
      </DialogTitle>
      <DialogContent className="space-y-6">
        <ClusterItem
          cluster="Cluster 1"
          sensors={["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4"]}
        />
        <ClusterItem
          cluster="Cluster 2"
          sensors={["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4", "Sensor 5"]}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleClose} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ClustersDialog;

function ClusterItem({
  cluster,
  sensors,
}: {
  cluster: string;
  sensors: string[];
}) {
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  let initialState = sensors.map((sensor) => ({ [sensor]: false }));

  const [sensorsChecked, setSensorsChecked] = useState<
    {
      [key: string]: boolean;
    }[]
  >(initialState);

  const handleSensorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSensorsChecked({
      ...sensorsChecked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
      }}
    >
      <FormControlLabel
        control={<IOSSwitch checked={checked} onChange={handleChange} />}
        label={cluster}
        labelPlacement="start"
        className=" m-0 w-auto justify-between flex flex-row-reverse items-center"
      />
      <div className="grid grid-cols-4 mt-2 gap-4 w-full">
        {sensors.map((sensor, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                //   @ts-ignore
                checked={sensorsChecked[sensor]}
                onChange={handleSensorChange}
                disabled={!checked}
                name={sensor}
              />
            }
            label={sensor}
          />
        ))}
      </div>
    </Paper>
  );
}
