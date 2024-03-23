"use client";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { Paper, useMediaQuery } from "@mui/material";
import { CategoryScale } from "chart.js";
import DATA from "./data.json";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { sendAnimationLine } from "./animation";

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
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({ x: i, y: prev });
  prev2 += 5 - Math.random() * 10;
  data2.push({ x: i, y: prev2 });
}

const lineData = [
  {
    data: data,
    label: "Series 1",
  },
  {
    data: data2,
    label: "Series 2",
  },
];

const lineLabels = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

function MainLine() {
  const dataset = [
    DATA.data1,
    DATA.data2,
    DATA.data3,
    DATA.data4,
    DATA.data5,
    lineData,
  ];
  const labels = [
    DATA.labels1,
    DATA.labels2,
    DATA.labels3,
    DATA.labels4,
    DATA.labels5,
    lineLabels,
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
    pr = 4,
    stepped = false,
    fill = false,
    borderDash = [],
  }: {
    br?: number | number[];
    d?: number;
    pr?: number;
    stepped?: boolean;
    fill?: boolean;
    borderDash?: number[];
  }) => {
    const data = {
      labels: labels[d - 1],
      datasets: dataset[d - 1].map((d, i) => ({
        data: d.data,
        label: d.label,
        borderRadius: typeof br === "number" ? br : br[i],
        pointRadius: pr,
        pointHoverRadius: pr * 1.5,
        stepped: stepped,
        fill: i === 1 ? fill : false,
        borderDash: i === 2 ? [5, 5] : borderDash,
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
  // @ts-ignore
  const skipped = (ctx, value) =>
    ctx.p0.skip || ctx.p1.skip ? value : undefined;
  // @ts-ignore
  const down = (ctx, value) =>
    ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-6">
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-6"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Line
          // @ts-ignore
          data={{ ...configData({ pr: 0, d: 6 }) }}
          options={{
            ...configConfig({ title: "Bar Chart 1" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 2,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: "linear",
              },
            },
            interaction: {
              intersect: false,
            },
            // @ts-ignore
            animation: sendAnimationLine({ data: data }),
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-3"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Line
          title="Bar Chart"
          // @ts-ignore
          data={{ ...configData({ br: 5, stepped: true, fill: false }) }}
          //   @ts-ignore
          options={{
            ...configConfig({ title: "Bar Chart 2" }),
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
          title="Bar Chart"
          // @ts-ignore
          data={configData({ br: 0, d: 4, pr: 10 })}
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
      >
        <Line
          // @ts-ignore
          data={configData({ br: 0, d: 5 })}
          options={{
            ...configConfig({ title: "Stacked Bar Chart" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 1,

            maintainAspectRatio: false,
            segment: {
              // @ts-ignore
              borderColor: (ctx) =>
                skipped(ctx, "rgb(0,0,0,0.2)") || down(ctx, "rgb(192,75,75)"),
              // @ts-ignore
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          }}
        />
      </MuiPaper>
      <MuiPaper
        className="flex flex-col items-center justify-center lg:col-span-4"
        elevation={1}
        sx={{ p: 2 }}
      >
        <Line
          // @ts-ignore
          data={configData({ br: 0, d: 3, fill: true })}
          options={{
            ...configConfig({ title: "Horizontal Bar Chart" }),
            //   @ts-ignore
            borderSkipped: false,
            borderWidth: 2,
            maintainAspectRatio: false,
          }}
        />
      </MuiPaper>
    </main>
  );
}

export default MainLine;
