export interface EmptyInterface {
    message: string;
}

const EmptyState = ({ message }: EmptyInterface) => {
    return (
        <h2>{message}</h2>
    )
}

export default EmptyState;
