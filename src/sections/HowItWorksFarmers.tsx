import Image from 'next/image'
import {InviteButton} from '@/components/InviteButton'

const steps = [
    {
        number: '1',
        title: 'Создайте свой профиль',
        description: 'Зарегистрируйтесь и расскажите о своей ферме, что вы производите и что хотите продавать.',
        image: '/img/Carrot.png',
        imagePosition: 'center' as const,
    },
    {
        number: '2',
        title: 'Отметьте себя на карте',
        description: 'Так ваши покупатели смогут узнать, где вы и приезжать за своими заказами.',
        image: '/img/egg.png',
        imagePosition: 'right' as const,
    },
    {
        number: '3',
        title: 'Добавьте свою продукцию в каталог',
        description: 'Вы можете вносить в каталог всё, что производите, добавлять и удалять продукты, а также помечать их как сезонные.',
        image: '/img/radish.png',
        imagePosition: 'left' as const,
    },
    {
        number: '4',
        title: 'Получайте и обрабатывайте заказы',
        description: 'Получайте заказы от живых пользователей платформы и развивайте своё дело.',
        image: '/img/blueberry.png',
        imagePosition: 'center' as const,
    },
]

export const HowItWorksFarmers = () => {
    return (
        <div className='flex flex-col gap-8'>
            {/* Header */}
            <div className='flex items-start justify-between gap-4'>
                <div className='flex flex-col gap-2 xl:w-full'>
                    <div className='flex flex-col xl:flex-row xl:items-baseline xl:gap-3'>
                        <h2 className='text-text font-extrabold text-[28px] xl:text-[32px] leading-10 tracking-[0.37px] xl:text-center'>
                            Как это работает
                        </h2>
                        <span className='text-[#030303]/30 font-display font-normal italic text-[18px] xl:text-[32px] leading-7 xl:leading-10 tracking-[0.26px]'>
                            для фермеров
                        </span>
                    </div>
                    <p className='text-text-muted font-normal text-[18px] leading-7 tracking-[-0.44px] max-w-[603px] text-left'>
                        Это то, как работает наш сервис. Присоединяйтесь к листу ожидания и вы сможете воспользоваться им в числе первых
                    </p>
                </div>
                <InviteButton
                    title='Присоединиться сейчас'
                    href='#join'
                    className='hidden xl:flex items-center justify-center shrink-0 px-6 h-12 text-white font-medium text-base leading-6'
                />
            </div>

            {/* Steps */}
            <div className='flex flex-col gap-4'>
                {steps.map((step) => (
                    <div key={step.number} className='flex flex-col xl:flex-row xl:items-stretch gap-3 w-full'>
                        {/* Number + (left image) + title card */}
                        <div className='flex items-stretch gap-3'>
                            <span className='w-12 shrink-0 text-text-number font-display font-normal text-[56px] leading-none flex items-center'>
                                {step.number}
                            </span>
                            {step.imagePosition === 'left' && (
                                <div className='flex items-center shrink-0'>
                                    <Image src={step.image} alt='' width={40} height={40} />
                                </div>
                            )}
                            <div className='flex flex-col items-center justify-center flex-1 xl:flex-none h-full px-8 py-4 gap-2.5 rounded-[20px]'
                                 style={{backgroundColor: 'var(--color-card-bg)'}}>
                                <span className='text-[#383A36] font-display font-medium italic text-[24px] leading-7 tracking-[0.4px] text-left xl:text-center xl:whitespace-nowrap'>
                                    {step.title}
                                </span>
                            </div>
                        </div>

                        {/* Center image — desktop only (between title and description) */}
                        {step.imagePosition === 'center' && (
                            <div className='hidden xl:flex items-center shrink-0'>
                                <Image src={step.image} alt='' width={40} height={40} />
                            </div>
                        )}

                        {/* Description + image for mobile */}
                        <div className='flex xl:contents items-center gap-3'>
                            {/* Center image — mobile only (left of description) */}
                            {step.imagePosition === 'center' && (
                                <div className='flex xl:hidden items-center shrink-0'>
                                    <Image src={step.image} alt='' width={40} height={40} />
                                </div>
                            )}

                            <div className='flex-1 xl:flex-1 px-6 py-4 rounded-2xl'
                                 style={{backgroundColor: 'var(--color-card-bg)'}}>
                                <p className='text-text-muted font-normal text-[18px] leading-7 tracking-[-0.44px]'>
                                    {step.description}
                                </p>
                            </div>

                            {/* Right image — always right of description */}
                            {step.imagePosition === 'right' && (
                                <div className='flex items-center shrink-0'>
                                    <Image src={step.image} alt='' width={40} height={40} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile button */}
            <InviteButton
                title='Присоединиться сейчас'
                href='#join'
                className='xl:hidden w-full h-14 text-white font-medium text-base leading-6 flex items-center justify-center'
            />
        </div>
    )
}
