import { useImageStateContext } from "../stores/image";
import { ColorPicker } from "./color-picker";

export function BadgeColorInputGroup() {
  const {
    label,
    message,
    tech,
    updateLabelColor,
    updateMessageColor,
    updateTechColor,
  } = useImageStateContext();

  return (
    <>
      <ColorPicker
        color={label.color}
        onChange={updateLabelColor}
        label="Label"
        id="label-color"
        name="label-color"
      />

      <ColorPicker
        color={message.color}
        onChange={updateMessageColor}
        label="Logo"
        id="logo-color"
        name="logo-color"
      />

      <ColorPicker
        color={tech.color}
        onChange={updateTechColor}
        label="Message"
        id="message-color"
        name="message-color"
      />
    </>
  );
}
