import { ColorPicker } from "./color-picker";
import { FormField } from "./form-field";

export function App() {
  return (
    <div className="relative min-h-screen min-w-full bg-gradient-to-br from-emerald-300 to-green-400">
      <div className="absolute inset-0 p-2 h-full w-full flex flex-col items-center justify-center">
        <main className="p-4 h-full w-full max-w-6xl gap-2 flex flex-col items-center justify-center bg-white bg-opacity-70 backdrop-blur-md border-[1px] border-[hsl(0 0 100% / 50%)] rounded-lg">
          <FormField label="Label" id="label" type="text" />
          <FormField label="Message" id="message" type="text" />
          <FormField label="Tech" id="tech" type="text" />

          <img
            className="w-1/4"
            src="https://img.shields.io/badge/Hello%20World!-green?style=for-the-badge&logo=appveyor"
            alt="badge"
          />

          <div className="flex gap-1">
            <ColorPicker
              color="#f0f0f0"
              onChange={(color) => console.log(color)}
              label="Label"
              id="label-color"
              name="label-color"
            />

            <ColorPicker
              color="#f0f0f0"
              onChange={(color) => console.log(color)}
              label="Logo"
              id="logo-color"
              name="logo-color"
            />

            <ColorPicker
              color="#f0f0f0"
              onChange={(color) => console.log(color)}
              label="Message"
              id="message-color"
              name="message-color"
            />

            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <button>PLASTIC</button>
                <button>FLAT</button>
                <button>FLAT SQUARE</button>
                <button>SQUARE</button>
                <button>SOCIAL</button>
              </div>

              <button className="py-2 px-4 rounded-md bg-white text-green-500 flex items-center">
                Copy as markdown
              </button>

              <button className="py-2 px-4 rounded-md bg-white text-green-500 flex items-center">
                Copy as HTML Image
              </button>

              <button className="py-2 px-4 rounded-md bg-white text-green-500 flex items-center">
                Copy as URL
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
