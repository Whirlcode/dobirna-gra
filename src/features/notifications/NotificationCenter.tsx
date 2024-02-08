import { Fragment, useEffect } from 'react'
import Snackbar from '@mui/joy/Snackbar';
import Button from '@mui/joy/Button';

import { pushNotification, popNotification, NotificationEntry } from './notificationSlice'
import { useAppSelector, useAppDispatch, appStore } from '@app/Store';

function errorHandler(event : ErrorEvent) {
    appStore.dispatch(pushNotification({message: `${event.message}`, details: `${event.error.stack}`, durationMs: 4000} as NotificationEntry))
}

export default function NotificationCenter() {

    const dispatch = useAppDispatch()
    const messages = useAppSelector(s => s.notification.messages)

    useEffect(() => {
        addEventListener('error', errorHandler);
    }, [])

    return (
        <Fragment>
            {messages.map((msg, index) => <Snackbar
                variant="outlined"
                color="danger"
                size="lg"
                open={true}
                autoHideDuration={msg.durationMs}
                onClose={(_, r) => {
                    if(r == "timeout"){
                        dispatch(popNotification(msg.id))
                    }
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                endDecorator={
                    <Button
                        onClick={() => dispatch(popNotification(msg.id))}
                        size="sm"
                        variant="soft"
                        color="danger">
                        Dismiss
                    </Button>
                }
                key={msg.id}
                sx={{
                    marginBottom: 10 * index
                }}>
                {msg.message}
                <br/>
                {msg.details && <>{msg.details}</>}
            </Snackbar>)}
        </Fragment>
    );
}