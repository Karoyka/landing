import type {CategoryOption, WaitlistFormValues} from './types'
import type {StylesConfig} from 'react-select'

export const CATEGORY_OPTIONS: CategoryOption[] = [
    'Молочные продукты',
    'Мясо',
    'Птица',
    'Рыба',
    'Овощи',
    'Фрукты',
    'Ягоды',
    'Яйца',
    'Продукты пчеловодства',
    'Выпечка',
    'Бакалея и заготовки',
    'Цветы',
    'Растения',
    'Ремесленнические изделия',
    'Другое',
].map(label => ({value: label, label}))

export const INITIAL_VALUES: WaitlistFormValues = {
    name: '',
    email: '',
    phone: '',
    location: '',
    category: [],
    extra: '',
}

export const INPUT_BASE = [
    'w-full px-4 py-3 rounded-2xl',
    'border border-transparent focus:border-primary',
    'text-text text-sm leading-5',
    'placeholder:text-text-muted',
    'outline-none transition-colors',
].join(' ')

export const INPUT_BG = 'var(--color-card-bg)'

export const SELECT_STYLES: StylesConfig<CategoryOption> = {
    control: (base, {isFocused}) => ({
        ...base,
        borderRadius: '1rem',
        border: `1px solid ${isFocused ? 'var(--color-primary)' : 'transparent'}`,
        boxShadow: 'none',
        padding: '2px 4px',
        backgroundColor: 'var(--color-card-bg)',
        cursor: 'pointer',
        '&:hover': {borderColor: 'var(--color-primary)'},
    }),
    placeholder: base => ({...base, color: 'var(--color-text-muted)', fontSize: '0.875rem'}),
    multiValue: base => ({...base, backgroundColor: 'rgba(94,165,0,0.12)', borderRadius: '0.5rem'}),
    multiValueLabel: base => ({...base, color: 'var(--color-text)', fontSize: '0.875rem'}),
    multiValueRemove: base => ({...base, color: 'var(--color-text-muted)', '&:hover': {backgroundColor: 'rgba(94,165,0,0.2)', color: 'var(--color-text)'}}),
    option: (base, {isSelected, isFocused}) => ({
        ...base,
        backgroundColor: isSelected
            ? 'var(--color-primary)'
            : isFocused ? 'rgba(94,165,0,0.08)' : 'white',
        color: isSelected ? 'white' : 'var(--color-text)',
        fontSize: '0.875rem',
        cursor: 'pointer',
    }),
    menu: base => ({
        ...base,
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    }),
    indicatorSeparator: () => ({display: 'none'}),
}