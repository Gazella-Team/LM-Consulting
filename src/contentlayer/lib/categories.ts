const categories = {
	all: {
		name: 'All',
		activeClass: 'text-white bg-gradient-to-r from-gray-800 to-gray-700',
	},
	guides: {
		name: 'Guides',
		activeClass: 'text-white bg-gradient-to-r from-gray-800 to-gray-700',
	},
	engineering: {
		name: 'Engineering',
		activeClass: 'text-white bg-gradient-to-r from-gray-800 to-gray-700',
	},
	news: {
		name: 'Company News',
		activeClass: 'text-white bg-gradient-to-r from-gray-800 to-gray-700',
	},
}

export function getCategoriesList() {
	const list = []
	for (const key in categories) {
		const typedKed = key as keyof typeof categories
		list.push({
			tag: key,
			name: categories[typedKed].name,
			activeClass: categories[typedKed].activeClass,
		})
	}
	return list
}

export default categories
