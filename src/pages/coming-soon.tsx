import Layout from '@/components/Layout'
import Link from 'next/link'

export default function ComingSoon() {
	return (
		<Layout white={true}>
            <div style={{background: "radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)"}} className='w-[86%] mx-auto max-w-6xl flex items-center min-h-[60vh] text-center justify-center'>
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
