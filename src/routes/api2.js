/**
 * @param {string} method
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 */
export function api(method, resource, data) {
	console.log(`api() called for method=${method}, resource=${resource}, data=${data}`);
	var r = [
	{ x: 1979, y: 7.19 },
	{ x: 1980, y: 7.83 },
	{ x: 1981, y: 7.24 },
	{ x: 1982, y: 7.44 },
	{ x: 1983, y: 7.51 },
	{ x: 1984, y: 7.10 },
	];
	return r;
}
