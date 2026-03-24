interface InviteButtonProps {
    title: string
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    href?: string
}

export const InviteButton = ({title, className, type = 'button', disabled, href}: InviteButtonProps) => {
    if (href) {
        return (
            <a href={href} className={`bg-primary rounded-[16px] ${className}`}>
                {title}
            </a>
        )
    }
    return (
        <button type={type} disabled={disabled} className={`bg-primary rounded-[16px] ${className}`}>
            {title}
        </button>
    )
}
