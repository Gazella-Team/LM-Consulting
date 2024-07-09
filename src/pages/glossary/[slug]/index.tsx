import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import GlossaryData from '../../../components/seo-components/glossary/glossary-data.json'
import slugify from 'slugify'
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'

export type Glose = {
	glose: string
	explanation: string
	'meta-title': string
	'meta-description': string
}

export default function GloseList({
	glose,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout noCta={true}>
			<Meta
				title={`${glose['meta-title']} | Toolbird`}
				description={glose['meta-description']}
			/>
			<div
				style={{
					background:
						'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 40%)',
				}}
				className="z-10 relative"
			>
				<div className="max-w-6xl py-24 text-center w-[86%] mx-auto">
					<h1 className="text-5xl font-bold  mb-4 text-gray-800">
						{glose.glose}
					</h1>
				</div>
				<div
					style={{
						background:
							'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
					}}
					className="py-12 sm:py-24 flex items-center justify-center border-y border-gray-600/10"
				>
					<p className="text-gray-600 paragraph w-[84%] max-w-2xl">
						{glose.explanation}
					</p>
				</div>
			</div>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = GlossaryData.map((glossary) => ({
		params: {
			slug: slugify(glossary.glose, {
				lower: true,
			}),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<{
	glose: Glose
}> = async (context: GetStaticPropsContext) => {
	const slug = context.params?.slug as string
	const glose = GlossaryData.find(
		(glossary) =>
			slugify(glossary.glose, {
				lower: true,
			}) === slug
	)

	if (!glose) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			glose: glose,
		},
	}
}
