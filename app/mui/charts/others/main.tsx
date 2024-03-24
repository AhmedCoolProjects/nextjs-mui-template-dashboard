"use client";
import { Chart as ChartJS } from "chart.js/auto";
import {
  Bar,
  Bubble,
  Chart,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
} from "react-chartjs-2";
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

const data: any[] = [];
const data2 = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 100; i++) {
  prev += 5 - Math.random() * 10;
  data.push({ x: i, y: prev, r: Math.random() * 10 });
  prev2 += 5 - Math.random() * 10;
  data2.push({ x: i, y: prev2, r: Math.random() * 10 });
}

const bubbleData = [
  {
    data: data,
    label: "Series 1",
  },
  {
    data: data2,
    label: "Series 2",
  },
];

const bubbleLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function MainBar() {
  const dataset = [
    DATA.data1,
    DATA.data2,
    DATA.data3,
    DATA.data4,
    bubbleData,
    DATA.data5,
  ];
  const labels = [
    DATA.labels1,
    DATA.labels2,
    DATA.labels3,
    DATA.labels4,
    bubbleLabels,
    DATA.labels5,
  ];
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isDesktopState, setIsDesktopState] = useState(true);

  useEffect(() => {
    setIsDesktopState(isDesktop);
  }, [isDesktop]);

  const configData = ({
    br = 0,
    d = 1,
    t = undefined,
    f = false,
  }: {
    br?: number | number[];
    d?: number;
    t?: string[];
    f?: boolean;
  }) => {
    const data = {
      labels: labels[d - 1],
      datasets: dataset[d - 1].map((d, i) => ({
        data: d.data,
        label: d.label,
        borderRadius: typeof br === "number" ? br : br[i],
        // @ts-ignore
        type: t ? t[i] : undefined,
        fill: f,
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
        <Bubble
          //  @ts-ignore
          data={configData({ d: 5 })}
          options={{
            ...configConfig({ title: "Bubble Chart" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 2,
            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-3"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Doughnut
          //  @ts-ignore
          data={configData({ br: 5 })}
          //   @ts-ignore
          options={{
            ...configConfig({ title: "Doughnut Chart" }),
            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-3"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Line
          //  @ts-ignore
          data={{ ...configData({ d: 1, f: true }) }}
          //   @ts-ignore
          options={{
            ...configConfig({ title: "Area Chart" }),

            maintainAspectRatio: false,

            interaction: {
              mode: "nearest",
              axis: "x",
              intersect: false,
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Month",
                },
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: "Value",
                },
              },
            },
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-2"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Pie
          //  @ts-ignore
          data={configData({ d: 1 })}
          //   @ts-ignore
          options={{
            ...configConfig({ title: "Pie Chart" }),

            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-4"
        elevation={1}
        sx={{ p: 2 }}
      >
        <PolarArea
          //  @ts-ignore
          data={configData({ d: 6 })}
          options={{
            ...configConfig({ title: "Polar Area Chart" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 1,
            maintainAspectRatio: false,
            // scales: {
            //   r: {
            //     pointLabels: {
            //       display: true,
            //       centerPointLabels: true,
            //       font: {
            //         size: 18,
            //       },
            //     },
            //   },
            // },
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-3"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Chart
          //  @ts-ignore
          data={{
            // @ts-ignore
            ...configData({ br: 0, d: 3, t: [undefined, "line", undefined] }),
          }}
          options={{
            ...configConfig({ title: "Combo bar/line" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 1,
            maintainAspectRatio: false,
          }}
          type="bar"
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-3"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Radar
          //  @ts-ignore
          data={configData({ d: 2 })}
          options={{
            ...configConfig({ title: "Radar Chart" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 1,
            maintainAspectRatio: false,
            // scales: {
            //   r: {
            //     pointLabels: {
            //       display: true,
            //       centerPointLabels: true,
            //       font: {
            //         size: 18,
            //       },
            //     },
            //   },
            // },
          }}
        />
      </MuiPaper>
    </main>
  );
}

export default MainBar;
