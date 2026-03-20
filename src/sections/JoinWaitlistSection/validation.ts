import type {WaitlistFormValues, FormErrors} from './types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d][\d\s()\-]{6,}$/

export const sanitizers: Partial<Record<keyof WaitlistFormValues, (v: string) => string>> = {
    name:  v => v.replace(/\d/g, ''),
    phone: v => v.replace(/[^\d+\s()\-]/g, ''),
}

export const validators: Partial<Record<keyof WaitlistFormValues, (v: string | string[]) => string>> = {
    email:    v => (v && !EMAIL_RE.test(v as string)) ? 'Введите корректный email' : '',
    phone:    v => (v && !PHONE_RE.test(v as string)) ? 'Введите корректный номер телефона' : '',
    category: v => !(v as string[]).length ? 'Выберите категорию' : '',
}

export const validateAll = (values: WaitlistFormValues): FormErrors =>
    Object.fromEntries(
        (Object.keys(validators) as (keyof WaitlistFormValues)[])
            .map(field => [field, validators[field]!(values[field])])
            .filter(([, err]) => Boolean(err))
    )
