import { HexColorInput, HexColorPicker } from "react-colorful";

type ColorPickerProps = {
  label: string;
  id: string;
  color: string;
  onChange: (color: string) => void;
  name: string;
};

export function ColorPicker({
  color,
  id,
  name,
  label,
  onChange,
}: ColorPickerProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-emerald-800" htmlFor={id}>
        {label}
      </label>

      <HexColorPicker
        className="min-w-full"
        color={color}
        id={id}
        onChange={onChange}
      />

      <HexColorInput
        color={color}
        name={name}
        className="px-2 py-1 border-[1px] border-[hsl(0 0 100% / 50%)] rounded-md bg-white bg-opacity-50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        id={id}
        onChange={onChange}
      />
    </div>
  );
}
