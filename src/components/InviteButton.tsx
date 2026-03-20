interface InviteButtonProps {
    title: string
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

export const InviteButton = ({title, className, type = 'button', disabled}: InviteButtonProps) => (
    <button type={type} disabled={disabled} className={`bg-primary rounded-[16px] ${className}`}>
        {title}
    </button>
)