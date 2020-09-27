const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        colors: {
            transparent: "transparent",
            black: "#000",
            "grey-darkest": "#3d4852",
            "grey-darker": "#606f7b",
            "grey-dark": "#8795a1",
            grey: "#b8c2cc",
            "grey-light": "#dae1e7",
            "grey-lighter": "#f1f5f8",
            "grey-lightest": "#faf8f8",
            white: "#ffffff",

            "sano-pink-light": "#FFF5F3", // 255, 245, 243
            "sano-pink": "#F7D2D2", // 247, 210, 210
            "sano-red-orange": "#F75338", // 247, 83, 56
            "sano-burgundy": "#54223B", // 84, 35, 59
            "sano-blue": "#433EA5", // 67, 62, 165
            "sano-blue-light": "#F1F5F8", // 241, 245, 248
            "sano-blue-faded": "#5651AE", // 86, 81, 174
            "sano-green": "#3DA498", // 61, 164, 152
            "sano-yellow": "#FFD708", // 255, 215, 8
        },
        screens: {
            xs: "450px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1280px",
        },
        fontSize: {
            // xs = 12px, sm = 14px, base = 16px, lg = 18px, xl = 20px
            // 2xl = 24px, 3xl = 30px, 4xl = 36px, 5xl = 48px, 6xl = 64px
            ...defaultTheme.fontSize,
            "sano-sm": ".9375rem", // 15px
            "sano-xs": ".8125rem", // 13px
            xxs: ".6rem",
        },
        lineHeight: {
            // 'none' = 1, 'tight' = 1.25, 'normal' = 1.5, 'loose' = 2,
            ...defaultTheme.lineHeight,

            "proper-none": 0, // To remove excess space which may appear in divs containing no text
        },
        letterSpacing: {
            tight: "-0.05em",
            normal: "0",
            wide: "0.05em",
            "extra-wide": "0.1em",
        },
        borderRadius: {
            default: "2px",
            none: "0",
            sm: ".125rem",
            lg: ".5rem",
            full: "9999px",

            "sano-diagram": "2rem",
        },
        minWidth: {
            // '0' = '0', 'full' = '100%',
            ...defaultTheme.minWidth,

            "1/4": "25%",
            "1/3": "33.33%",
            "1/2": "50%",
            "2/3": "66.66%",
        },
        minHeight: {
            // '0' = '0', 'full' = '100%', 'screen' = '100vh',
            ...defaultTheme.minHeight,

            "3-line-para": "4.05rem",
        },
        maxWidth: {
            xxs: "18rem",
            xs: "20rem",
            sm: "30rem",
            md: "40rem",
            lg: "50rem",
            xl: "60rem",
            "2xl": "70rem",
            "3xl": "80rem",
            "4xl": "90rem",
            "5xl": "100rem",
            full: "100%",
            "1/4": "25%",
            "1/2": "50%",
            "1/3": "33.33%",
        },
        opacity: {
            // '0' = '0', '25': '.25', '50': '.5', '75': '.75', '100': '1',
            ...defaultTheme.opacity,

            "90": "0.9",
        },
        boxShadow: {
            default: "none",
            none: "none",
            "sano-pink": "0 12px 14px 0 rgba(247,210,210,0.58)",
            "sano-pink-tight": "0 0 10px 0 rgba(247,210,210,0.58)",
            "sano-standard": "0 12px 14px 0 rgba(138,56,97,0.1)",
            "sano-tight": "0 0 10px 0 rgba(138,56,97,0.1)",
            "sano-light": "0 12px 14px 0 rgba(138,56,97,0.025)",
            "sano-dark-tab-bottom": "0 -4px 14px 0 rgba(247,210,210,1)",
            "sano-light-tab-bottom": "0 -4px 14px 0 rgba(247,210,210,0.4)",
            "sano-tab-left": "-4px 0 14px 0 rgba(247,210,210,0.4)",
            "sano-tab-right": "8px 0 14px 0 rgba(247,210,210,0.4)",
        },
        height: (theme) => ({
            auto: "auto",
            ...theme("spacing"),
            full: "100%",
            screen: "100vh",

            "7": "1.75rem",
            "128": "24rem",
        }),
        width: (theme) => ({
            auto: "auto",
            ...theme("spacing"),
            full: "100%",
            screen: "100vh",
            "1/2": "50%",
            "1/3": "33.33333%",
            "2/3": "66.66667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.66667%",
            "2/6": "33.33333%",
            "3/6": "50%",
            "4/6": "66.66667%",
            "5/6": "83.33333%",
            "1/12": "8.33333%",
            "2/12": "16.66667%",
            "3/12": "25%",
            "4/12": "33.33333%",
            "5/12": "41.66667%",
            "6/12": "50%",
            "7/12": "58.33333%",
            "8/12": "66.66667%",
            "9/12": "75%",
            "10/12": "83.33333%",
            "11/12": "91.66667%",

            "7": "1.75rem",
            "76": "19rem",
        }),
        zIndex: {
            ...defaultTheme.zIndex, // 0, 10, 20, 30, 40, 50

            "-100": -100,
            "100": 100,
        },
    },
    variants: {
        appearance: ["responsive"],
        backgroundAttachment: ["responsive"],
        backgroundColor: ["responsive", "hover", "focus"],
        backgroundPosition: ["responsive"],
        backgroundRepeat: ["responsive"],
        backgroundSize: ["responsive"],
        borderCollapse: [],
        borderColor: ["responsive", "hover", "focus"],
        borderRadius: ["responsive"],
        borderStyle: ["responsive"],
        borderWidth: ["responsive"],
        cursor: ["responsive", "hover"],
        display: ["responsive", "group-hover"],
        flexbox: ["responsive"],
        float: ["responsive"],
        fontFamily: ["responsive"],
        fontWeight: ["responsive", "hover", "focus"],
        height: ["responsive"],
        lineHeight: ["responsive"],
        lists: ["responsive"],
        margin: ["responsive"],
        maxHeight: ["responsive"],
        maxWidth: ["responsive"],
        minHeight: ["responsive"],
        minWidth: ["responsive"],
        negativeMargin: ["responsive"],
        opacity: ["responsive", "hover"],
        outline: ["focus"],
        overflow: ["responsive"],
        padding: ["responsive"],
        pointerEvents: ["responsive"],
        position: ["responsive"],
        resize: ["responsive"],
        boxShadow: ["responsive", "hover", "focus"],
        svgFill: [],
        svgStroke: [],
        tableLayout: ["responsive"],
        textAlign: ["responsive"],
        textColor: ["responsive", "hover", "focus"],
        fontSize: ["responsive"],
        textStyle: ["responsive", "hover", "focus"],
        letterSpacing: ["responsive"],
        userSelect: ["responsive", "focus"],
        verticalAlign: ["responsive"],
        visibility: ["responsive"],
        whitespace: ["responsive"],
        width: ["responsive"],
        zIndex: ["responsive"],
    },
    corePlugins: {
        objectFit: false,
        objectPosition: false,
    },
    plugins: [],
};
