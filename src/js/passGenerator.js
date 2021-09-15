import choice from "./choice.js";

export const passwordGenerator = function () {
	// chars
	const lowerCase = [..."abcdefghijklmnopqrstuxwvyz"];
	const upperCase = lowerCase.join().toUpperCase().split(",");
	const nums = [..."1234567890"];
	const sign = [..."-_.#$&()"];

	// lowercase
	const list_1 = [choice(lowerCase), choice(lowerCase), choice(lowerCase)];
	// uppercase
	const list_2 = [choice(upperCase), choice(upperCase)];
	// nums
	const list_3 = [choice(nums), choice(nums), choice(nums)];
	// sign
	const list_4 = [choice(sign)];

	const output = [list_1, list_2, list_3, list_4].flat().join("");
	return output;
};
