import Image from 'next/image'

const steps = [
    'Создайте аккаунт в приложении, чтобы получить доступ к каталогу фермерских продуктов.',
    'Используйте карту или каталог для поиска свежих продуктов от местных фермеров.',
    'Выбирайте понравившиеся товары и добавляйте их в корзину.',
    'Заказывайте продукты напрямую у фермеров и получайте удовольствие :)',
]

export const HowItWorksBuyers = () => {
    return (
        <div className='flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12'>

            <div className='flex flex-col gap-8 flex-1'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col items-center xl:items-start xl:flex-row xl:items-baseline xl:gap-3'>
                        <h2 className='text-text font-extrabold text-[28px] xl:text-[32px] leading-10 tracking-[0.37px]'>
                            Как это работает
                        </h2>
                        <span className='text-[#030303]/30 font-display font-normal italic text-[18px] xl:text-[32px] leading-7 xl:leading-10 tracking-[0.26px]'>
                            для покупателей
                        </span>
                    </div>
                    <p className='text-text-muted font-normal text-[18px] leading-7 tracking-[-0.44px] text-center xl:text-left'>
                        Наш сервис позволяет вам легко и удобно приобретать свежие
                        продукты от местных фермеров
                    </p>
                </div>

                <div className='rounded-2xl overflow-hidden' style={{backgroundColor: 'var(--color-card-bg)'}}>
                    {steps.map((text, i) => (
                        <div key={i} className='flex items-start gap-5 px-6 py-5'>
                            <span className='font-display font-medium italic text-[36px] leading-[36px] tracking-[0.26px] w-8 shrink-0 text-center select-none' style={{color: '#5D6257'}}>
                                {i + 1}
                            </span>
                            <p className='font-normal text-[18px] leading-7 tracking-[-0.44px]' style={{color: '#4A5565'}}>
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right — map */}
            <div className='hidden xl:flex flex-1 items-center justify-center shrink-0'>
                <Image
                    src='/image/map.webp'
                    alt='Карта фермеров'
                    width={700}
                    height={580}
                    className='w-full h-auto'
                />
            </div>

        </div>
    )
}
