import { Input } from "@/components/ui/input";
import SendSvg from "@/components/icons/send.svg";
import { IconButton } from "@mui/material";

function InputPrompt() {
  return (
    <div className="w-full flex items-center justify-center flex-col  pb-10 pt-4 absolute bottom-0">
      <div
        className="w-2/3 flex flex-row bg-background items-center
      px-4 py-2 rounded-full shadow-lg
      "
      >
        🧠
        <Input
          className=" mx-2 outline-none font-semibold ring-0 border-0 focus-visible:ring-0"
          placeholder="What's in your mind?..."
        />
        <IconButton className="bg-ai-assi-primary hover:bg-ai-assi-primary">
          <SendSvg />
        </IconButton>
      </div>
    </div>
  );
}

export default InputPrompt;
