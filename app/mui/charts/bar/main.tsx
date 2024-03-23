"use client";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Paper, useMediaQuery } from "@mui/material";
import { CategoryScale } from "chart.js";
import DATA from "./data.json";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale);

const MuiPaper = styled(Paper)(({ theme }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return {
    height: "500px",
    ...(!isDesktop && {
      height: "300px",
    }),
  };
});

function MainBar() {
  const dataset = [DATA.data1, DATA.data2, DATA.data3, DATA.data4];
  const labels = [DATA.labels1, DATA.labels2, DATA.labels3, DATA.labels4];
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isDesktopState, setIsDesktopState] = useState(true);

  useEffect(() => {
    setIsDesktopState(isDesktop);
  }, [isDesktop]);

  const configData = ({
    br = 0,
    d = 1,
  }: {
    br?: number | number[];
    d?: number;
  }) => {
    const data = {
      labels: labels[d - 1],
      datasets: dataset[d - 1].map((d, i) => ({
        data: d.data,
        label: d.label,
        borderRadius: typeof br === "number" ? br : br[i],
      })),
    };
    return data;
  };
  const configConfig = ({
    title = "Bar Chart",
    r = true,
  }: {
    title?: string;
    r?: boolean;
  }) => {
    const options = {
      responsive: r,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: title,
          fullSize: true,
        },
      },
    };

    return options;
  };
  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-6">
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-6"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Bar
          data={configData({ br: [40, 5], d: 2 })}
          options={{
            ...configConfig({ title: "Bar Chart 1" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 2,
            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-4"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Bar
          title="Bar Chart"
          data={configData({ br: 5 })}
          //   @ts-ignore
          options={{
            ...configConfig({ title: "Bar Chart 2" }),
            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-2"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Bar
          title="Bar Chart"
          data={configData({ br: 0, d: 4 })}
          //   @ts-ignore
          options={{
            ...configConfig({ title: "Floating Bar Chart" }),

            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-2"
        elevation={1}
        sx={{ p: 2 }}
      ></MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-4"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Bar
          data={configData({ br: 0, d: 3 })}
          options={{
            ...configConfig({ title: "Horizontal Bar Chart" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 2,
            indexAxis: "y",
            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-3"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Bar
          data={configData({ br: 0, d: 3 })}
          options={{
            ...configConfig({ title: "Stacked Bar Chart" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 1,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-3"
        elevation={1}
        sx={{ p: 2 }}
      >
        {isDesktop ? "Desktop" : "Mobile"}
      </MuiPaper>
    </main>
  );
}

export default MainBar;
