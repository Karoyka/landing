import type {WaitlistFormValues} from './types'

export type SubmitResult = 'success' | 'error'

export const submitWaitlistForm = async (data: WaitlistFormValues): Promise<SubmitResult> => {
    try {
        const res = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        return res.ok ? 'success' : 'error'
    } catch {
        return 'error'
    }
}
