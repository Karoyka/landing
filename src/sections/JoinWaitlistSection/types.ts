export interface WaitlistFormValues {
    name: string
    email: string
    phone: string
    location: string
    category: string[]
    extra: string
}

export type FormErrors = Partial<Record<keyof WaitlistFormValues, string>>

export interface CategoryOption {
    value: string
    label: string
}
