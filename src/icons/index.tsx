import { Colors } from "@/constants/colors";
interface IconProps {
  size?: number;
  color?: string;
}

export const RightArrow = ({ size = 24, color = "#fff" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${size}px`}
    viewBox="0 -960 960 960"
    width={`${size}px`}
    fill={color}
  >
    <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
  </svg>
);

export const AudioIcon = ({
  size = 24,
  color = Colors.civicsDark,
}: IconProps) => (
  // Material Icon Volume Up
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${size}px`}
    viewBox="0 -960 960 960"
    width={`${size}px`}
    fill={color}
  >
    <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
  </svg>
);
