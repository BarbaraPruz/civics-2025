export const AudioSettings = {
  Manual: "manual",
  Auto: "auto",
} as const;

export type AudioSetting = (typeof AudioSettings)[keyof typeof AudioSettings];
