export const shuffle = function (string) {
	const output = string
		.split("")
		.sort(function () {
			return 0.5 - Math.random();
		})
		.join("");

	return output;
};
