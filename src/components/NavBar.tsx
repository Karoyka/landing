import {InviteButton} from "@/components/InviteButton";

export const NavBar = () => {
    return (
        <div className='flex w-full items-center justify-center p-4.5 '>
            <p className='xl:hidden text-text font-extrabold text-[20px] leading-7 tracking-[-0.45px]'>karoўka</p>
            <div className='hidden xl:flex justify-between items-center w-full'>
                <p className='text-text font-extrabold text-[20px] leading-7 tracking-[-0.45px]'>karoўka</p>
                <div className='flex h-9 gap-8'>
                    <a href="#how-it-works" className='flex items-center text-text-muted font-normal text-base leading-6 tracking-[-0.31px] whitespace-nowrap'>О проекте</a>
                    <a href="#how-it-works-farmers" className='flex items-center text-text-muted font-normal text-base leading-6 tracking-[-0.31px] whitespace-nowrap'>Как это работает</a>
                    <a href="#reviews" className='flex items-center text-text-muted font-normal text-base leading-6 tracking-[-0.31px] whitespace-nowrap'>Отзывы</a>
                    <a href="#join" className='h-9 px-4 py-2 text-surface font-medium text-sm leading-5 tracking-[-0.15px] whitespace-nowrap bg-primary rounded-lg flex items-center'>Присоединиться</a>
                </div>
            </div>
        </div>
    )
}