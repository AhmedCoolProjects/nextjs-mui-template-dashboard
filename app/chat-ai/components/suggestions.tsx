import Image from "next/image";
import { SUGGESTIONS } from "../data/suggestions";
import ObstacleSvg from "@/components/icons/obstacle.svg";

function Suggestions() {
  return (
    <div className="w-full  pt-24 flex flex-col items-center justify-center">
      <h2 className="mb-3 bg-white py-2 rounded-full px-4 text-lg font-semibold tracking-tight">
        AI Assistant
      </h2>
      <h1 className="text-2xl font-semibold text-center mb-6">
        Good day! How can I help you today?
      </h1>
      <div className="flex flex-col space-y-3">
        {SUGGESTIONS.map((suggestion, index) => (
          <div className="flex flex-row items-center space-x-3" key={index}>
            <MainCard {...suggestion} />
            <ObstacleSvg className="w-5 " />
            {suggestion.items.map((item, ind) => (
              <SuggestionCard key={ind} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;

function MainCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: JSX.Element;
}) {
  return (
    <div className="bg-[#191919] min-h-28 min-w-44 flex flex-col items-start justify-start p-3 text-white rounded-2xl">
      <Icon className="w-5 h-5 " />

      <h3 className="text-sm mb-2 mt-1 font-semibold">{title}</h3>
      {desc}
    </div>
  );
}

function SuggestionCard({
  title,
  exp,
  icon,
}: {
  title: string;
  exp: string;
  icon: string;
}) {
  return (
    <div className="min-h-28 bg-white min-w-72 rounded-2xl p-3 flex flex-col items-start cursor-pointer hover:bg-gray-50">
      <Image
        src={icon}
        alt={title}
        width={40}
        className="rounded-full"
        height={40}
      />
      <h3 className="text-sm mb-2 mt-1 font-semibold">&quot;{title}&quot;</h3>
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[10px]">{exp}</p>
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1316 0.391387C12.3757 0.147309 12.7714 0.147309 13.0155 0.391387L17.1822 4.55805C17.4263 4.80213 17.4263 5.19786 17.1822 5.44194L13.0155 9.6086C12.7714 9.85268 12.3757 9.85268 12.1316 9.6086C11.8875 9.36453 11.8875 8.9688 12.1316 8.72472L15.2314 5.62499H1.24023C0.895056 5.62499 0.615234 5.34517 0.615234 4.99999C0.615234 4.65482 0.895056 4.37499 1.24023 4.37499H15.2314L12.1316 1.27527C11.8875 1.03119 11.8875 0.635464 12.1316 0.391387Z"
            fill="#131A29"
          />
        </svg>
      </div>
    </div>
  );
}
