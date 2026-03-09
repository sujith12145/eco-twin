
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'node:fs';

if (fs.existsSync('.env')) {
    const envText = fs.readFileSync('.env', 'utf8');
    const match = envText.match(/^GEMINI_API_KEY=(.*)$/m);
    if (match?.[1]) process.env.GEMINI_API_KEY = match[1].trim();
}

async function test() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('No API key found in .env');
        return;
    }
    console.log('Testing key:', apiKey.substring(0, 10) + '...');
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent('Hello');
        console.log('SUCCESS:', result.response.text());
    } catch (err) {
        console.error('FAILED:', err.message);
    }
}

test();
