import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import { Controlled } from "react-codemirror2/.ts";
import { Loading, Error } from "../components";
import { CustomError } from "./hooks/useProgram";
import { Code, Mouse } from "lucide-react";
import { PlayButton } from "../components/PlayButton.tsx";

const ProgramViewer = ({
  codeAndStepCnt,
  setCodeAndStepCnt,
  loading,
  error,
  sdoWaiting,
}: {
  codeAndStepCnt: [string, number];
  setCodeAndStepCnt: React.Dispatch<React.SetStateAction<[string, number]>>;
  loading: boolean;
  error: CustomError | null;
  sdoWaiting: boolean;
}) => {
  const url = `${import.meta.env.VITE_DOUBLE_DEBUGGER_URL}?prog=${encodeURIComponent(codeAndStepCnt[0])}&iter=${encodeURIComponent(codeAndStepCnt[1])}`;

  return (
    <>
      <div className="flex shrink-0 grow-0 basis-auto flex-row items-center justify-between p-2">
        <div className="flex flex-row items-center gap-1 text-sm font-semibold text-neutral-500 [&>svg]:size-4">
          <Code />
          Program
        </div>
        <PlayButton href={url} />
      </div>
      <div className="relative w-full flex-auto basis-auto overflow-scroll">
        {sdoWaiting ? (
          <SDOWaiting />
        ) : loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          <div className="m-0 size-full">
            <Controlled
              className="min-h-full text-sm"
              value={codeAndStepCnt[0]}
              options={{
                lineNumbers: true,
                mode: "javascript",
              }}
              onBeforeChange={(editor, data, value) => {
                setCodeAndStepCnt([value, codeAndStepCnt[1]]);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export const SDOWaiting = () => {
  return (
    <div className="absolute left-0 top-0 z-[900] flex size-full items-center justify-center bg-[#ccc] bg-opacity-35 p-8">
      <div className="items-cener flex items-center justify-center gap-2">
        <Mouse />
        <p className="text-sm">
          Start by pressing a production with Option (Alt) + Left Click
        </p>
      </div>
    </div>
  );
};

export default ProgramViewer;
