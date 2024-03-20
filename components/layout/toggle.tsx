
type ToggleProps = {
  toggled: boolean
  label: string
  setToggled: (arg: boolean) => void
}

export default function ToggleSwitch(props: ToggleProps) {
  const { toggled, label, setToggled } = props;

  return (
    <div data-testid="toggle-switch" onClick={() => setToggled(!toggled)} className="hover:cursor-pointer flex flex-row flex-wrap items-center  my-2 mx-4">
    <div className={toggled ? "bg-blue-500 overflow-y-visible w-8 h-4 flex flex-row items-center  rounded-full transition duration-300" : " overflow-y-visible w-8 h-4 flex flex-row items-center rounded-full bg-zinc-50 border"}>
      <div className={toggled ? "bg-zinc-100 border shadow w-5 h-5 rounded-full translate-x-full transition-all duration-300" : " -ml-2 bg-zinc-100 border shadow w-5 h-5 rounded-full transition-all duration-500"} />
    </div>
{/*     <p className={toggled ? "text-sm text-zinc-800 m-3" : "text-sm text-zinc-400 m-3"}>{label}</p>
 */}    </div>
  )
}