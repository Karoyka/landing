import {NextRequest, NextResponse} from 'next/server'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function POST(req: NextRequest) {
    if (!BOT_TOKEN || !CHAT_ID) {
        return NextResponse.json({error: 'Telegram не настроен'}, {status: 500})
    }

    const body = await req.json()
    const {name, email, phone, location, category, extra} = body

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

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: lines,
            parse_mode: 'HTML',
        }),
    })

    if (!res.ok) {
        const err = await res.text()
        console.error('[Telegram] error:', err)
        return NextResponse.json({error: 'Ошибка отправки'}, {status: 502})
    }

    return NextResponse.json({ok: true})
}
