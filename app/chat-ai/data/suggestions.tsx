import FilterSvg from "@/components/icons/filter.svg";
import WebSvg from "@/components/icons/web.svg";
import VisualizeSvg from "@/components/icons/visualize.svg";

const SUGGESTIONS = [
  {
    title: "Explore",
    desc: (
      <p className="text-[10px]">
        Learn how to use AI Assistant <br /> platform for your needs
      </p>
    ),
    icon: WebSvg,
    items: [
      {
        title: "Explain",
        exp: "Threat Hunting in simple steps",
        icon: `/icons/explain.png`,
      },
      {
        title: "How to",
        exp: "How to use AI Assistant",
        icon: `/icons/how_to.png`,
      },
    ],
  },
  {
    title: "Visualize",
    desc: (
      <p className="text-[10px]">
        Try built in visualizations <br /> for your data
      </p>
    ),
    icon: VisualizeSvg,
    items: [
      {
        title: "Draw",
        exp: "Draw a bar chart for alerts in the last 24 hours",
        icon: `/icons/draw.webp`,
      },
      {
        title: "Combine",
        exp: "Compare alerts between yesterday and today",
        icon: `/icons/display.webp`,
      },
    ],
  },
  {
    title: "Filter Sets",
    desc: (
      <p className="text-[10px]">
        Use our predefined filter sets <br /> to get started
      </p>
    ),
    icon: FilterSvg,
    items: [
      {
        title: "Display",
        exp: "Display available filter sets",
        icon: `/icons/filter.webp`,
      },
      {
        title: "Operate",
        exp: "Visualize alerts with msg=malware",
        icon: `/icons/operate.webp`,
      },
    ],
  },
];

export { SUGGESTIONS };
