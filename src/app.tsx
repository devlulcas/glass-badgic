import { BadgeColorInputGroup } from "./components/badge-color-input-group";
import { BadgeTextInputGroup } from "./components/badge-text-input-group";
import { ColorPicker } from "./components/color-picker";
import { HTMLIcon, LinkIcon, MarkdownIcon } from "./components/icons";
import { ImagePreview } from "./components/image-preview";

export function App() {
  return (
    <div className="relative min-h-screen min-w-full">
      <div className="absolute inset-0 p-2 h-full w-full flex flex-col items-center justify-center">
        <main className="p-4 md:p-20 h-full w-full max-w-6xl gap-2 flex flex-col items-center justify-center bg-white bg-opacity-70 backdrop-blur-md border-[1px] border-[hsl(0 0 100% / 50%)] rounded-lg">
          <BadgeTextInputGroup />
          <ImagePreview />

          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <BadgeColorInputGroup />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <button className="p-2 flex-1 bg-emerald-500 text-white rounded-md">
                  PLASTIC
                </button>
                <button className="p-2 flex-1 bg-emerald-500 text-white rounded-md">
                  FLAT
                </button>
                <button className="p-2 flex-1 bg-emerald-500 text-white rounded-md">
                  FLAT SQUARE
                </button>
                <button className="p-2 flex-1 bg-emerald-500 text-white rounded-md">
                  SQUARE
                </button>
                <button className="p-2 bg-emerald-500 text-white rounded-md">
                  SOCIAL
                </button>
              </div>

              <button className="flex gap-2 items-center py-2 px-4 rounded-md bg-white text-green-500">
                <MarkdownIcon width={20} height={20} />
                Copy as markdown
              </button>

              <button className="flex gap-2 items-center py-2 px-4 rounded-md bg-white text-green-500">
                <HTMLIcon width={20} height={20} />
                Copy as HTML Image
              </button>

              <button className="flex gap-2 items-center py-2 px-4 rounded-md bg-white text-green-500">
                <LinkIcon width={20} height={20} />
                Copy as URL
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
