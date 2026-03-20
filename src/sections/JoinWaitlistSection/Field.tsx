interface FieldProps {
    label: string
    error?: string
    className?: string
    children: React.ReactNode
}

export const Field = ({label, error, className, children}: FieldProps) => (
    <div className={['flex flex-col gap-2', className].filter(Boolean).join(' ')}>
        <label className='text-text font-medium text-sm leading-5'>{label}</label>
        {children}
        {error && <span className='text-red-500 text-xs'>{error}</span>}
    </div>
)
