/**
 * @description Normalizes a value from one range, to another.
 * @param {Number} value to normalize
 * @param {Number} originalMin range
 * @param {Number} originalMax range
 * @param {Number} newMin range
 * @param {Number} newMax range
 * @returns {Number} value normalized to new range
 */
module.exports = function normalizeRange(value, originalMin, originalMax, newMin, newMax) {
	var originalRange = originalMax - originalMin;
	var newRange = newMax - newMin;
	return (((value - originalMin) * newRange) / originalRange) + newMin;
};
