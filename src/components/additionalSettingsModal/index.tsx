import { useState } from "react";

import useAppStore, {} from "@/store/useAppStore";
import { type AudioSetting, AudioSettings } from "@/types/settings";

const AudioOptions = [
  {
    value: AudioSettings.Auto,
    label: "Automatic",
    sub: "Read each question aloud.",
  },
  {
    value: AudioSettings.Manual,
    label: "Manual",
    sub: "Only read when I tap the speaker button",
  },
];

interface AdditionalSettingsModalProps {
  onClose: () => void;
}

const AdditionalSettingsModal = ({ onClose }: AdditionalSettingsModalProps) => {
  const audioSetting = useAppStore((state) => state.audioSetting);
  const setAudio = useAppStore((state) => state.setAudio);

  const [selectedAudio, setSelectedAudio] = useState(() => {
    const current = AudioOptions.find((opt) => opt.value === audioSetting);
    return current ? current.value : AudioSettings.Manual;
  });

  const onChange = (newValue: AudioSetting) => setSelectedAudio(newValue);
  const handleCancel = () => onClose();
  const handleSave = () => {
    setAudio(selectedAudio)
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="light-theme bg-(--color-dark-background) text-(--color-cream-text) p-1 min-w-1 md:min-w-2xl min-h-lg border border-slate-300 rounded-xl">
          <div className="p-6 bg-white rounded-xl shadow-md w-full h-full m-auto">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Read questions aloud
              </p>
              {AudioOptions.map((opt) => {
                const selected = selectedAudio === opt.value;
                return (
                  <div
                    key={opt.value}
                    onClick={() => onChange(opt.value)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors
              ${
                selected
                  ? "border-blue-400 bg-blue-50 dark:bg-blue-950 dark:border-blue-500"
                  : "border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              }`}
                  >
                    <div
                      className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0
              ${selected ? "border-blue-500" : "border-gray-300 dark:border-gray-600"}`}
                    >
                      {selected && (
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${selected ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-gray-100"}`}
                      >
                        {opt.label}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {opt.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="my-3 flex gap-2 justify-around">
              <button
                onClick={handleCancel}
                className="w-xs bg-(--color-red-accent) text-white text-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="w-xs bg-(--color-green-accent) text-white text-xl"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalSettingsModal;
