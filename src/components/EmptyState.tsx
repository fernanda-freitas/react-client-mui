import {Card, Typography, Stack, CardContent} from '@mui/material';

export interface EmptyInterface {
    message: string;
}

const EmptyState = ({ message }: EmptyInterface) => {
    return (
        <Stack alignItems="center" justifyContent="center">
            <CardContent>
                <Card sx={{ minWidth: 300, minHeight: 200 }}>
                    <Stack alignItems="center" justifyContent="center">
                        <Typography variant="h6">{message}</Typography>
                    </Stack>
                </Card>
            </CardContent>
        </Stack>
    )
}

export default EmptyState;
