interface LinkProps {
    value: string
    onClick: () => void
}

export function Link({ value, onClick }: LinkProps) {
    return (
        <a className="text-sm font-medium cursor-pointer transition-colors hover:text-primary" onClick={() => onClick}>
            {value}
        </a>
    )
}