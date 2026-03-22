import reactLogo from '../assets/work_images/logos/React.png';
import vite from '../assets/work_images/logos/vite.png';
import tailwind from '../assets/work_images/logos/tailwind.png';

export default function Footer() {

    return (
        <footer>
            <div className='bg-[#0a0a0a] text-gray-500 w-full h-16 px-8 flex items-center justify-between border-t border-white/10 text-sm'>
                <div className='flex flex-row space-x-3 items-center opacity-50 hover:opacity-100 transition-opacity duration-300'>
                    <img src={reactLogo} alt='react logo' className='h-5 w-5 grayscale'/>
                    <img src={vite} alt='vite logo' className='h-5 w-5 grayscale'/>
                    <img src={tailwind} alt='tailwind logo' className='h-3 w-5 grayscale'/>
                </div>
                <p className="tracking-wide"> © 2026 Jonathan Oh </p>
            </div>
        </footer>
    )
}