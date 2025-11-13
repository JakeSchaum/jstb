import LiterallyTool from "@/components/tools/LiterallyTool";
import { LiteralConversionOptions } from "@/lib/tools/literally/LiteralConversionOptions";

export default function Literally() {
  const defaultLiteralConversionOptions: LiteralConversionOptions= {
    useSingleQuotes: true,
    wrapWithBraces: true
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            JSTB
          </h1>
          <h4 className="max-w-xs italic leading-10 text-zinc-400 tracking-tight">
            {"Jake Schaum\'s Toolbox"}
          </h4>
          <LiterallyTool { ...{preferences: defaultLiteralConversionOptions }}></LiterallyTool>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
  
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    
        </div>
      </main>
    </div>
  );
}