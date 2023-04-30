/**
 * @format
 * @type {import('tailwindcss').Config}
 */
module.exports = {
	content: ["./dist/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				mouth: "hsl(172, 67%, 45%)",
				veryDarkCyan: " hsl(183, 100%, 15%)",
				Darkgrayishcyan: "hsl(186, 14%, 43%)",
				Grayishcyan: "hsl(184, 14%, 56%)",
				Lightgrayishcyan: "hsl(185, 41%, 84%)",
				Verylightgrayishcyan: "hsl(189, 41%, 97%)",
				White: "hsl(0, 0%, 100%)",
			},
			height: {
				board: "90vh",
			},
			minWidth: {
				well: "58vw",
			},
		},
	},
	plugins: [],
};
