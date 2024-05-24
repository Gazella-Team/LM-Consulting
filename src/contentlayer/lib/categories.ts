const categories = {
	all: {
		name: 'All',
		activeClass: 'text-white bg-gray-800',
	},
	guides: {
		name: 'Guides',
		activeClass: 'text-white bg-gray-800',
	},
	engineering: {
		name: 'Engineering',
		activeClass:
			'text-white bg-gray-800',
	},
	news: {
		name: 'Company News',
		activeClass: 'text-white bg-gray-800',
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
