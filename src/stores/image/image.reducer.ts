import { useReducer } from "react";
import { defaultImageState, ImageComponent, ImageState } from "./image.context";

export const IMAGE_STATE_ACTIONS = {
  UPDATE_LABEL_COLOR: "updateLabelColor",
  UPDATE_MESSAGE_COLOR: "updateMessageColor",
  UPDATE_TECH_COLOR: "updateTechColor",
  UPDATE_LABEL_TEXT: "updateLabelText",
  UPDATE_MESSAGE_TEXT: "updateMessageText",
  UPDATE_TECH_TEXT: "updateTechText",
  UPDATE_FORMAT: "updateFormat",
} as const;

export type ImageStateActionKey =
  typeof IMAGE_STATE_ACTIONS[keyof typeof IMAGE_STATE_ACTIONS];

type ImageStateAction = { type: ImageStateActionKey; payload: string };

export function imageStateReducer(state: ImageState, action: ImageStateAction) {
  switch (action.type) {
    case "updateFormat":
      return {
        ...state,
        format: action.payload,
      };
    case "updateLabelText":
      return {
        ...state,
        label: {
          ...state.label,
          text: action.payload,
        },
      };
    case "updateMessageText":
      return {
        ...state,
        message: {
          ...state.message,
          text: action.payload,
        },
      };
    case "updateTechText":
      return {
        ...state,
        tech: {
          ...state.tech,
          text: action.payload,
        },
      };
    case "updateLabelColor":
      return {
        ...state,
        label: {
          ...state.label,
          color: action.payload,
        },
      };
    case "updateMessageColor":
      return {
        ...state,
        message: {
          ...state.message,
          color: action.payload,
        },
      };
    case "updateTechColor":
      return {
        ...state,
        tech: {
          ...state.tech,
          color: action.payload,
        },
      };
    default:
      return state;
  }
}

export function useImageReducer() {
  const [state, dispatch] = useReducer(imageStateReducer, defaultImageState);

  return {
    state,
    updateLabelText: (payload: string) => {
      dispatch({
        type: IMAGE_STATE_ACTIONS.UPDATE_LABEL_TEXT,
        payload: payload,
      });
    },
    updateMessageText: (payload: string) => {
      dispatch({
        type: IMAGE_STATE_ACTIONS.UPDATE_MESSAGE_TEXT,
        payload: payload,
      });
    },
    updateTechText: (payload: string) => {
      dispatch({
        type: IMAGE_STATE_ACTIONS.UPDATE_TECH_TEXT,
        payload: payload,
      });
    },
    updateLabelColor: (payload: string) => {
      dispatch({
        type: IMAGE_STATE_ACTIONS.UPDATE_LABEL_COLOR,
        payload: payload,
      });
    },
    updateMessageColor: (payload: string) => {
      dispatch({
        type: IMAGE_STATE_ACTIONS.UPDATE_MESSAGE_COLOR,
        payload: payload,
      });
    },
    updateTechColor: (payload: string) => {
      dispatch({
        type: IMAGE_STATE_ACTIONS.UPDATE_TECH_COLOR,
        payload: payload,
      });
    },
    updateFormat: (payload: string) => {
      dispatch({
        type: IMAGE_STATE_ACTIONS.UPDATE_FORMAT,
        payload: payload,
      });
    },
  };
}

export type ImageReducer = Omit<ReturnType<typeof useImageReducer>, "state">;
