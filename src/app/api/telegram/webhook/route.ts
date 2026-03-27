import {NextRequest, NextResponse} from 'next/server'
import {addSubscriber} from '@/lib/subscribers'

export async function POST(req: NextRequest) {
    const body = await req.json()

    const message = body?.message
    if (!message) return NextResponse.json({ok: true})

    const chatId: number = message.chat?.id
    const text: string = message.text ?? ''

    if (chatId && text.startsWith('/start')) {
        addSubscriber(chatId)

        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
        if (BOT_TOKEN) {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    chat_id: chatId,
                    text: '🌿 <b>Добро пожаловать в Karoyka!</b>\n\nВы подписались на уведомления. Мы сообщим вам, как только появятся новости о запуске.',
                    parse_mode: 'HTML',
                }),
            })
        }
    }

    return NextResponse.json({ok: true})
}