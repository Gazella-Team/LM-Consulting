const categories = {
	all: {
		name: 'All',
		activeClass: 'text-white bg-gradient-to-r from-cyan-500 to-blue-500',
	},
	guides: {
		name: 'Guides',
		activeClass: 'text-white bg-gradient-to-r from-green-500 to-lime-500',
	},
	engineering: {
		name: 'Engineering',
		activeClass:
			'text-white bg-gradient-to-r from-violet-500 to-fuchsia-500',
	},
	news: {
		name: 'Company News',
		activeClass: 'text-white bg-gradient-to-r from-cyan-500 to-blue-500',
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
