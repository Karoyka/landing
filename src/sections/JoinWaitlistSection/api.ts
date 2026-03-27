import type {WaitlistFormValues} from './types'

export type SubmitResult = 'success' | 'error'

export const submitWaitlistForm = async (data: WaitlistFormValues): Promise<SubmitResult> => {
    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) return 'error'

    const {name, email, phone, location, category, extra} = data

    const lines = [
        '🌿 <b>Новая заявка в лист ожидания</b>',
        '',
        `👤 <b>Имя:</b> ${name}`,
        `📧 <b>Email:</b> ${email}`,
        phone ? `📞 <b>Телефон:</b> ${phone}` : null,
        location ? `📍 <b>Локация:</b> ${location}` : null,
        category ? `🧺 <b>Категория:</b> ${category}` : null,
        extra ? `💬 <b>Доп. инфо:</b> ${extra}` : null,
    ].filter(Boolean).join('\n')

    try {
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({chat_id: CHAT_ID, text: lines, parse_mode: 'HTML'}),
        })
        return res.ok ? 'success' : 'error'
    } catch {
        return 'error'
    }
}
