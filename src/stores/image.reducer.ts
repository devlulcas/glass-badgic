import { ImageComponent, ImageState } from "./image";

export const IMAGE_STATE_ACTIONS = {
  UPDATE_LABEL: "updateLabel",
  UPDATE_MESSAGE: "updateMessage",
  UPDATE_TECH: "updateTech",
  UPDATE_FORMAT: "updateFormat",
} as const;

export type ImageStateAction =
  typeof IMAGE_STATE_ACTIONS[keyof typeof IMAGE_STATE_ACTIONS];

export function imageStateReducer(
  state: ImageState,
  action: { type: ImageStateAction; payload: ImageComponent | string }
) {
  if (typeof action.payload === "string") {
    return {
      ...state,
      format: action.payload,
    };
  }

  switch (action.type) {
    case "updateLabel":
      return {
        ...state,
        label: {
          ...state.label,
          text: action.payload.text,
          color: action.payload.color,
        },
      };
    case "updateMessage":
      return {
        ...state,
        message: {
          ...state.message,
          text: action.payload.text,
          color: action.payload.color,
        },
      };
    case "updateTech":
      return {
        ...state,
        tech: {
          ...state.tech,
          text: action.payload.text,
          color: action.payload.color,
        },
      };
    default:
      return state;
  }
}
