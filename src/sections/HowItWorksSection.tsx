'use client'

import {useState, ReactNode} from 'react'

type Tab = 'farmers' | 'buyers'

const farmersCards: {icon: ReactNode, title: string, description: string}[] = [
    {
        icon: <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 12.083C15 16.237 12.034 18.823 8 19C3.8 19.006 1 16.237 1 12.083C1 6.54501 4.5 0.993007 8 1.00001C11.5 1.00701 15 6.54501 15 12.083Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Создавайте каталог своих продуктов',
        description: 'Размещайте продукцию собственного производства в удобном интерфейсе. Расскажите о себе и покажите товар лицом. Вы можете легко добавлять новые, редактировать существующие, удалять неактуальные позиции.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Отмечайте себя на карте Беларуси',
        description: 'Отметьте себя на карте и станьте ближе к покупателям. Вас будет легко найти и добраться к вам.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Расширяйте свою сеть покупателей',
        description: 'Добавляйте новые точки сбыта и продаж, а также при необходимости переносите. Становитесь гибкими и мобильными.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g clipPath="url(#clip0_8121_109)">
                <path d="M19.5693 15.9843C19.5693 12.9859 16.9355 10.5554 13.6864 10.5554H9.15874V5.00538H17.4871V2.9541H7.07771V14.9475H4.4292V17.0029H7.07771V21.4156H9.15706L13.6868 21.4127C16.9338 21.4127 19.5677 18.9822 19.5677 15.9843H19.5693ZM9.15999 14.9462V12.6038C10.6664 12.6038 12.1968 12.6067 13.6876 12.6067C15.7863 12.6067 17.4887 14.1191 17.4887 15.9843C17.4887 17.8495 15.7871 19.3619 13.6876 19.3631H9.15999V17.0017H13.8904V14.9462H9.15999Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_8121_109">
                    <rect width="15.1385" height="18.4615" fill="white" transform="translate(4.43066 2.9541)"/>
                </clipPath>
            </defs>
        </svg>,
        title: 'Экономьте деньги на рекламу',
        description: 'Разместите себя и свою продукцию в нашем сервисе и станьте заметным для множества покупателей. Поднимайте в топ свою продукцию и получайте большое количество заказов',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6.16797 18.849C6.41548 18.0252 6.92194 17.3032 7.61222 16.79C8.30249 16.2768 9.13982 15.9997 9.99997 16H14C14.8612 15.9997 15.6996 16.2774 16.3904 16.7918C17.0811 17.3062 17.5874 18.0298 17.834 18.855M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Рассказывайте о себе',
        description: 'Рассказывайте о себе, своем хозяйстве, продукции. Создавайте инфоповоды и делитесь ими. Получайте обратную связь и становитесь лучше.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7 20H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 20C15.5 17.5 10.8 13.6 13 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.5 9.3996C10.6 10.1996 11.3 11.5996 11.8 13.0996C9.8 13.4996 8.3 13.4996 7 12.7996C5.8 12.1996 4.7 10.8996 4 8.59961C6.8 8.09961 8.4 8.5996 9.5 9.3996Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0998 6C13.3374 7.19156 12.9539 8.58615 12.9998 10C14.8998 9.9 16.2998 9.4 17.2998 8.6C18.2998 7.6 18.8998 6.3 18.9998 4C16.2998 4.1 14.9998 5 14.0998 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Станьте частью фермерского сообщества',
        description: 'Делитесь своим и получайте полезный опыт от ваших коллег по ремеслу. Расширяйте свои возможности в рамках здоровой и честной конкуренции.',
    },
]

const buyersCards = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4555 10.4497C18.2474 9.12485 17.6314 7.89787 16.6934 6.93945C15.7553 5.98103 14.5419 5.33882 13.2219 5.10219C11.9018 4.86555 10.5409 5.04626 9.32832 5.61916C8.11578 6.19206 7.11197 7.12866 6.45654 8.29866C5.82088 8.35125 5.2018 8.52853 4.63464 8.82038C4.06749 9.11222 3.56338 9.51292 3.15108 9.99959C2.73879 10.4863 2.42639 11.0494 2.23173 11.6568C2.03706 12.2642 1.96394 12.904 2.01654 13.5397C2.06853 14.1753 2.2452 14.7944 2.53647 15.3617C2.82774 15.9291 3.2279 16.4335 3.71411 16.8461C4.20033 17.2588 4.76306 17.5716 5.37019 17.7668C5.97732 17.962 6.61694 18.0357 7.25254 17.9837H18.0035C18.498 18.0133 18.9934 17.9452 19.4616 17.7834C19.9297 17.6215 20.3614 17.369 20.7319 17.0402C21.1024 16.7115 21.4046 16.313 21.621 15.8675C21.8375 15.4219 21.9641 14.9381 21.9935 14.4437C22.0537 13.4451 21.7148 12.4636 21.0513 11.715C20.3878 10.9663 19.4541 10.5119 18.4555 10.4517V10.4497Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Находите легко',
        description: 'С нашим приложением вы сможете быстро находить фермерские продукты на карте и в каталоге, не тратя время на долгие поиски.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Покупайте рядом и поддерживайте локальный бизнес',
        description: 'Покупая у местных фермеров, вы не только получаете свежие и качественные продукты, но и поддерживаете развитие локального бизнеса.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4993 12.5717L11.9993 19.9997L4.49932 12.5717C4.00463 12.0903 3.61497 11.5117 3.35487 10.8723C3.09478 10.2329 2.96989 9.54664 2.98806 8.85662C3.00624 8.1666 3.16709 7.48782 3.46048 6.86303C3.75388 6.23823 4.17346 5.68094 4.69281 5.22627C5.21216 4.77159 5.82003 4.42938 6.47814 4.22117C7.13624 4.01296 7.83033 3.94327 8.51669 4.01649C9.20306 4.08971 9.86682 4.30425 10.4662 4.64659C11.0656 4.98894 11.5876 5.45169 11.9993 6.00569C12.4129 5.45571 12.9355 4.99701 13.5344 4.65829C14.1334 4.31958 14.7958 4.10814 15.4803 4.03721C16.1647 3.96628 16.8564 4.03739 17.5121 4.24608C18.1678 4.45477 18.7734 4.79656 19.2909 5.25005C19.8084 5.70354 20.2268 6.25897 20.5197 6.88158C20.8127 7.50419 20.9741 8.18057 20.9936 8.8684C21.0132 9.55622 20.8906 10.2407 20.6335 10.8789C20.3763 11.5172 19.9902 12.0955 19.4993 12.5777" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Сохраняйте любимое',
        description: 'Добавляйте в избранное ваши любимые продукты и фермеров, чтобы всегда иметь к ним быстрый доступ.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L5 19M9 6.5C9 7.88071 7.88071 9 6.5 9C5.11929 9 4 7.88071 4 6.5C4 5.11929 5.11929 4 6.5 4C7.88071 4 9 5.11929 9 6.5ZM20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Участвуйте в акциях',
        description: 'Следите за специальными предложениями и акциями от фермеров, чтобы получать лучшие предложения на свежие продукты.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7957 3 18V17H13V19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21ZM15 21C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V5C17 4.60444 17.1173 4.21776 17.3371 3.88886C17.5568 3.55996 17.8692 3.30362 18.2346 3.15224C18.6001 3.00087 19.0022 2.96126 19.3902 3.03843C19.7781 3.1156 20.1345 3.30608 20.4142 3.58579C20.6939 3.86549 20.8844 4.22186 20.9616 4.60982C21.0387 4.99778 20.9991 5.39992 20.8478 5.76537C20.6964 6.13082 20.44 6.44318 20.1111 6.66294C19.7822 6.8827 19.3956 7 19 7H17M19 3H8C7.20435 3 6.44129 3.31607 5.87868 3.87868C5.31607 4.44129 5 5.20435 5 6V17M9 7H13M9 11H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Получайте новости',
        description: 'Будьте в курсе последних новостей и обновлений из мира фермерских продуктов, чтобы никогда не пропустить важную информацию.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4993 12.5717L11.9993 19.9997L4.49932 12.5717C4.00463 12.0903 3.61497 11.5117 3.35487 10.8723C3.09478 10.2329 2.96989 9.54664 2.98806 8.85662C3.00624 8.1666 3.16709 7.48782 3.46048 6.86303C3.75388 6.23823 4.17346 5.68094 4.69281 5.22627C5.21216 4.77159 5.82003 4.42938 6.47814 4.22117C7.13624 4.01296 7.83033 3.94327 8.51669 4.01649C9.20306 4.08971 9.86682 4.30425 10.4662 4.64659C11.0656 4.98894 11.5876 5.45169 11.9993 6.00569C12.4129 5.45571 12.9355 4.99701 13.5344 4.65829C14.1334 4.31958 14.7958 4.10814 15.4803 4.03721C16.1647 3.96628 16.8564 4.03739 17.5121 4.24608C18.1678 4.45477 18.7734 4.79656 19.2909 5.25005C19.8084 5.70354 20.2268 6.25897 20.5197 6.88158C20.8127 7.50419 20.9741 8.18057 20.9936 8.8684C21.0132 9.55622 20.8906 10.2407 20.6335 10.8789C20.3763 11.5172 19.9902 12.0955 19.4993 12.5777M11.9992 5.99976L8.70624 9.29276C8.51877 9.48028 8.41345 9.73459 8.41345 9.99976C8.41345 10.2649 8.51877 10.5192 8.70624 10.7068L9.24924 11.2498C9.93924 11.9398 11.0592 11.9398 11.7492 11.2498L12.7492 10.2498C13.346 9.65302 14.1553 9.31778 14.9992 9.31778C15.8432 9.31778 16.6525 9.65302 17.2492 10.2498L19.4992 12.4998M12.4993 15.4998L14.4993 17.4998M14.9993 12.9998L16.9993 14.9998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: 'Общайтесь без посредников',
        description: 'Связывайтесь напрямую с фермерами, задавайте вопросы и уточняйте детали без лишних посредников.',
    },
]

export const HowItWorksSection = () => {
    const [active, setActive] = useState<Tab>('farmers')
    const [visible, setVisible] = useState(true)

    const switchTab = (tab: Tab) => {
        if (tab === active) return
        setVisible(false)
        setTimeout(() => {
            setActive(tab)
            setVisible(true)
        }, 200)
    }

    const cards = active === 'farmers' ? farmersCards : buyersCards

    return (
        <section className='flex flex-col gap-8 text-center items-center justify-center'>
            <div className='flex flex-col text-center items-center justify-center xl:w-[642]'>
                <h2 className='text-text font-extrabold text-[32px] leading-10 tracking-[0.37px]'>
                    Что такое «Кароўка»?
                </h2>
                <p className='text-text-muted font-display font-normal text-[20px] leading-8 tracking-[0.26px]'>
                    — это платформа, созданная для фермеров и всех, кто ценит<br/>
                    и любит качественные натуральные продукты
                </p>
            </div>

            <div
                role="tablist"
                aria-label="Выберите роль"
                className='flex gap-6 rounded-[14px] p-2'
                style={{backgroundColor: 'rgba(255,255,255,0.10)', boxShadow: '0 0 10px 0 #A2A89C'}}>
                <button
                    role="tab"
                    aria-selected={active === 'farmers'}
                    onClick={() => switchTab('farmers')}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        active === 'farmers' ? 'bg-cookie-bg text-white' : 'text-text-muted'
                    }`}>
                    Фермерам
                </button>
                <button
                    role="tab"
                    aria-selected={active === 'buyers'}
                    onClick={() => switchTab('buyers')}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        active === 'buyers' ? 'bg-cookie-bg text-white' : 'text-text-muted'
                    }`}>
                    Покупателям
                </button>
            </div>

            <div
                role="tabpanel"
                className={`grid grid-cols-1 gap-4 xl:grid-cols-3 transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {cards.map((card, i) => (
                    <div key={i} className='flex flex-col gap-6 text-left rounded-[20px] p-5 border-[#39403114]'
                         style={{backgroundColor: 'rgba(57,64,49,0.08)'}}>
                        <div className='w-[48] h-[48] flex items-center justify-center bg-cookie-bg rounded-xl text-lg'>
                            {card.icon}
                        </div>
                        <p className='text-text font-semibold text-[20px] leading-7 tracking-[-0.45px]'>{card.title}</p>
                        <p className='text-text-muted font-normal text-base leading-6 tracking-[-0.31px]'>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
