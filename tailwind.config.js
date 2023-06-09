module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    fontSize: {
      none: ["0", "0"],
      tiny: ["0.89em", "1.4"],
      base: ["1.125em", "1.6"],
      lg: ["1.35em", "1.4"],
      xl: ["1.62em", "1.3"],
      "2xl": ["1.94em", "1.2"],
      "3xl": ["2,33em", "1.1"],
    },
    extend: {
      colors: {
        "text-0": "#FFFFFF",
        "text-0.5": "#FCFCFC",
        "text-0.75": "#F5F5F5",
        "text-1": "#EBECED",
        "text-2": "#E2E3E6",
        "text-3": "#D0D2D8",
        "text-4": "#ACAFBB",
        "text-5": "#646B82",
        "text-6": "#494F68",
        "text-7": "#3D4254",
        "text-8": "#343643",
        "text-9": "#271E2B",

        "primary-0": "#EDF8FD",
        "primary-1": "#DEF2FB",
        "primary-2": "#BCE5F7",
        "primary-3": "#8ED3F1",
        "primary-4": "#3EB4E7",
        "primary-5": "#1787B6",
        "primary-6": "#14749D",
        "primary-7": "#11668A",
        "primary-8": "#0E506D",
        "primary-9": "#0B4259",

        "accent-0": "#FCF5F2",
        "accent-1": "#F9ECE5",
        "accent-2": "#F4DACD",
        "accent-3": "#ECC0AA",
        "accent-4": "#E09772",
        "accent-5": "#D36A35",
        "accent-6": "#AD5326",
        "accent-7": "#984921",
        "accent-8": "#77391A",
        "accent-9": "#622F15",
      },
      boxShadow: {
        "menu-display": "inset 0 3px 3px 0 rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
