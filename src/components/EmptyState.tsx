export interface EmptyInterface {
    message: string;
}

const EmptyState = ({ message }: EmptyInterface) => {
    return (
        <p>{message}</p>
    )
}

export default EmptyState;
