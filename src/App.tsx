import { Switcher } from "./Switcher";
import { commands, VimCommand, VimCommands } from "./data/commands";

function App() {
  return (
    <div className="bg-slate-50 relative dark:bg-gray-800">
      <div className="absolute mr-4 bg-gray-900 opacity-25"></div>
      <div className="px-8">
        <div className="flex justify-end py-4">
          <Switcher />
        </div>
        <h1
          className="text-gray-800 font-mono mb-8 text-3xl font-black text-center 
            dark:text-slate-50"
        >
          Vim Cheatsheet
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(commands).map(
            (
              [category, commands]: [keyof VimCommands, VimCommand[]],
              index: number
            ) => (
              <div
                key={index}
                className="flex flex-col rounded-lg p-4"
              >
                <h2 className="text-gray-800 font-sans font-bold text-xl my-4 dark:text-white">
                  {category
                    .toString()
                    .replace(/([a-z])([A-Z])/g, "$1 $2")
                    .replace(/^\w/, (match) => match.toUpperCase())}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {commands.map((command) => (
                    <div
                      key={command.name}
                      className="flex flex-col items-center justify-center rounded-lg p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                    >
                      <h2 className="text-gray-800 font-mono text-xl font-bold mb-2">
                        {command.name}
                      </h2>
                      <p className="text-gray-800 font-mono text-sm">
                        {command.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
