import { useImageStateContext } from "../stores/image";
import { FormField } from "./form-field";

export function BadgeTextInputGroup() {
  const {
    label,
    message,
    tech,
    updateLabelText,
    updateMessageText,
    updateTechText,
  } = useImageStateContext();

  return (
    <>
      <FormField
        onChange={(text) => updateLabelText(text)}
        label="Label"
        id="label"
        type="text"
        value={label.text}
      />

      <FormField
        onChange={(text) => updateMessageText(text)}
        label="Message"
        id="message"
        type="text"
        value={message.text}
      />

      <FormField
        onChange={(text) => updateTechText(text)}
        label="Tech"
        id="tech"
        type="text"
        value={tech.text}
      />
    </>
  );
}
