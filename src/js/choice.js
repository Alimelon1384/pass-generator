export default function (iterable) {
	const random_num = Math.floor(Math.random() * iterable.length);
	const item = iterable[random_num];
	iterable.splice(random_num, 1);
	return item;
}
