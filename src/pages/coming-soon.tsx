import Layout from '@/components/Layout'
import Link from 'next/link'

export default function ComingSoon() {
	return (
		<Layout white={true}>
            <div style={{background: "linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)"}} className='w-[86%] lg:rounded-[100px] backdrop:blur-3xl border-y mb-24 border-gray-600/10 mx-auto max-w-7xl flex items-center min-h-[60vh] text-center justify-center'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-gray-800 text-5xl'>Coming Soon</h2>
                    <p className='text-gray-600 text-xl paragraph mx-auto max-w-[400px]'>This tool is under development. We&apos;re working fast to get it running</p>
                    <div className="flex items-center mt-4 justify-center">
                        <Link
                            href="/"
                                className="bg-gray-800 border-[3px] border-gray-800 font-normal paragraph text-xs flex text-white px-6 py-1 rounded-full"
                            >
                                Back to home
                        </Link>
                    </div>
                </div>
            </div>
		</Layout>
	)
}
