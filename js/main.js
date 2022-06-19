//1-masal
var nums = [1, 0, 2, 0, 0, 6, 7, 8, 9];

function zeroEnd(arr) {
	var str1 = '';
	var str2 = '';

	for (num of arr) {
		if (num == 0) {
			str1 += num.toString();
		} else {
			str2 += num.toString();
		}
	}

	var str = str2 + str1;

	return str;
}

console.log(zeroEnd(nums));

//2-masala

var bool = [true, false, false, false, true, true];

function countTrue(arr) {
	var count = 0;
	for (num of arr) {
		if (num) {
			count++;
		}
	}

	return count;
}

console.log(countTrue(bool));

//3-masala

function numbers(arr) {
	var summ = 0;
	for (num of arr) {
		if (num > 0) {
			summ = summ + num;
		}
	}
	return summ;
}

console.log(numbers([-3, -4, 5, 6, 7, -8, -10]));

//4-masala
function maxPrice(obj) {
	var max = 0;
	var maxName;
	for (item of obj) {
		if (max < item.price) {
			max = item.price;
			maxName = item.name;
		} else {
			maxName = maxName;
		}
	}

	return maxName;
}

var items = [
	{ name: 'Ali', price: 200000 },
	{ name: 'Abbos', price: 10000 },
	{ name: 'Odil', price: 600 },
];

console.log(maxPrice(items));
