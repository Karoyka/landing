import fs from 'fs'
import path from 'path'

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json')

export function getSubscribers(): number[] {
    try {
        const raw = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8')
        return JSON.parse(raw)
    } catch {
        return []
    }
}

export function addSubscriber(chatId: number): void {
    const subscribers = getSubscribers()
    if (!subscribers.includes(chatId)) {
        subscribers.push(chatId)
        fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
    }
}

export async function broadcastMessage(botToken: string, text: string): Promise<void> {
    const subscribers = getSubscribers()
    await Promise.allSettled(
        subscribers.map((chatId) =>
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({chat_id: chatId, text, parse_mode: 'HTML'}),
            })
        )
    )
}