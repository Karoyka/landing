'use client'

import {useState, useCallback, ChangeEvent} from 'react'
import Select from 'react-select'
import type {MultiValue} from 'react-select'
import {InviteButton} from '@/components/InviteButton'
import {Field} from './Field'
import {CATEGORY_OPTIONS, INITIAL_VALUES, INPUT_BASE, INPUT_BG, SELECT_STYLES} from './constants'
import {sanitizers, validators, validateAll} from './validation'
import {submitWaitlistForm} from './api'
import type {WaitlistFormValues, CategoryOption, FormErrors} from './types'

export const JoinWaitlistSection = () => {
    const [values, setValues] = useState<WaitlistFormValues>(INITIAL_VALUES)
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = useCallback(
        (field: keyof WaitlistFormValues) =>
            (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const value = sanitizers[field]?.(e.target.value) ?? e.target.value
                setValues(prev => ({...prev, [field]: value}))
                setErrors(prev => ({...prev, [field]: validators[field]?.(value) ?? ''}))
            },
        []
    )

    const handleCategoryChange = useCallback((opts: MultiValue<CategoryOption> | null) => {
        setValues(prev => ({...prev, category: (opts ?? []).map(o => o.value)}))
    }, [])

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formErrors = validateAll(values)
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }
        setStatus('loading')
        const result = await submitWaitlistForm(values)
        setStatus(result)
    }, [values])

    return (
        <div className='flex flex-col gap-6 items-center text-center w-full max-w-260 mx-auto bg-white rounded-3xl p-5 border border-[#E5E7EB] xl:bg-transparent xl:rounded-none xl:p-0 xl:border-none'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-text font-extrabold text-[32px] leading-10 tracking-[0.37px] text-center'>
                    Присоединяйтесь к списку ожидания
                </h2>
                <p className='text-text-muted font-display font-normal italic text-[20px] leading-8 tracking-[0.26px] text-center'>
                    ... и окажитесь в числе наших первых клиентов с эксклюзивными привилегиями на платформе.
                </p>
            </div>

            {status === 'success' && (
                <div className='w-full rounded-2xl px-8 py-6 text-center' style={{backgroundColor: 'var(--color-card-bg)'}}>
                    <p className='text-text font-semibold text-[20px] leading-7'>Заявка отправлена!</p>
                    <p className='text-text-muted text-base mt-1'>Мы свяжемся с вами в ближайшее время.</p>
                </div>
            )}

            {status !== 'success' && (
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-8 text-left'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6 xl:items-stretch'>

                    <div className='flex flex-col gap-6'>
                        <Field label='Полное имя *'>
                            <input
                                type='text'
                                required
                                placeholder='Алесь Титович'
                                value={values.name}
                                onChange={handleChange('name')}
                                className={INPUT_BASE}
                                style={{backgroundColor: INPUT_BG}}
                            />
                        </Field>
                        <Field label='Электронная почта *' error={errors.email}>
                            <input
                                type='text'
                                required
                                placeholder='ivan@example.com'
                                value={values.email}
                                onChange={handleChange('email')}
                                className={`${INPUT_BASE} ${errors.email ? 'border-red-400' : ''}`}
                                style={{backgroundColor: INPUT_BG}}
                            />
                        </Field>
                        <Field label='Номер телефона' error={errors.phone}>
                            <input
                                type='text'
                                placeholder='+375 (12) 345-67-89'
                                value={values.phone}
                                onChange={handleChange('phone')}
                                className={`${INPUT_BASE} ${errors.phone ? 'border-red-400' : ''}`}
                                style={{backgroundColor: INPUT_BG}}
                            />
                        </Field>
                        <Field label='Местоположение фермы (Город/Область)'>
                            <input
                                type='text'
                                placeholder='например, Минская область'
                                value={values.location}
                                onChange={handleChange('location')}
                                className={INPUT_BASE}
                                style={{backgroundColor: INPUT_BG}}
                            />
                        </Field>
                    </div>

                    <div className='flex flex-col gap-6 h-full'>
                        <Field label='Что вы производите/выращиваете? *' error={errors.category}>
                            <Select
                                isMulti
                                instanceId="waitlist-category"
                                options={CATEGORY_OPTIONS}
                                placeholder='Выберите категории'
                                styles={SELECT_STYLES}
                                noOptionsMessage={() => 'Ничего не найдено'}
                                onChange={handleCategoryChange}
                            />
                        </Field>
                        <Field label='Дополнительная информация' className='flex-1 min-h-0'>
                            <textarea
                                placeholder='Расскажите больше или задайте вопросы'
                                value={values.extra}
                                onChange={handleChange('extra')}
                                className={`${INPUT_BASE} resize-none w-full h-full`}
                                style={{backgroundColor: INPUT_BG}}
                            />
                        </Field>
                    </div>

                </div>

                <div className='flex flex-col items-center gap-4'>
                    <InviteButton
                        title={status === 'loading' ? 'Отправка...' : 'Присоединиться'}
                        type='submit'
                        disabled={status === 'loading'}
                        className='w-full xl:w-auto px-12 h-14 text-white font-medium text-base leading-6 disabled:opacity-60 disabled:cursor-not-allowed'
                    />
                    {status === 'error' && (
                        <p className='text-red-500 text-sm'>Что-то пошло не так. Попробуйте ещё раз.</p>
                    )}
                    <p className='text-[#9CA3AF] font-normal text-sm leading-5 text-center max-w-[520px]'>
                        Мы уважаем вашу конфиденциальность. Ваша информация будет использована только для связи с вами о нашей платформе.
                    </p>
                </div>
            </form>
            )}
        </div>
    )
}
