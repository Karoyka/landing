import {StatusBadge} from "@/components/StatusBadge";
import {InviteButton} from "@/components/InviteButton";

export const HeroSection = () => {
    return (
        <div className='flex flex-col gap-[40px] pt-4 xl:w-[605px]'>

            <StatusBadge/>

            <div className='flex flex-col flex-1 gap-[12px]'>
                <h1 className='text-text font-extrabold text-[42px] leading-[46px] tracking-[0.37px] xl:text-[64px] xl:leading-[64px] xl:text-text'>
                    Все фермеры Беларуси здесь
                </h1>
                <p className='text-text-muted font-normal text-[18px] leading-7 tracking-[-0.44px]'>
                    Первая площадка для фермеров и их покупателей. Никаких посредников, лучшие цены, сильное сообщество.
                </p>
            </div>

            <div className='flex gap-[32px] xl:w-[400px]'>
                <div className='flex flex-col flex-1'>
                    <span
                        className='text-text-number font-display font-medium  text-[30px] leading-9 tracking-[0.4px]'>1000+</span>
                    <span className='text-text-muted font-normal text-sm leading-5 tracking-[-0.15px]'>Покупателей в ожидании</span>
                </div>
                <div className='flex flex-col flex-1'>
                    <span
                        className='text-text-number font-display font-medium  text-[30px] leading-9 tracking-[0.4px]'>500+</span>
                    <span className='text-text-muted font-normal text-sm leading-5 tracking-[-0.15px]'>Заинтересованных фермеров</span>
                </div>
                <div className='flex flex-col flex-1'>
                    <span
                        className='text-text-number font-display font-medium  text-[30px] leading-9 tracking-[0.4px]'>50+</span>
                    <span
                        className='text-text-muted font-normal text-sm leading-5 tracking-[-0.15px]'>Районов Беларуси</span>
                </div>
            </div>

            <div className='flex flex-col flex-1 gap-[12px] xl:w-[400px]'>
                <InviteButton title='Присоединиться сейчас'
                              href='#join'
                              className='w-full h-14 text-surface font-medium text-base leading-6 rounded-2xl flex items-center justify-center'/>
                <p className='text-text-muted font-normal text-sm leading-5 tracking-[-0.15px] text-left'>
                    ...к списку ожидания. Как только мы будем готовы добавлять новых пользователей в платформу — мы
                    расскажем вам об этом
                </p>
            </div>
        </div>
    )
}