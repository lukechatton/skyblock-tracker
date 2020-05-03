import axios from 'axios';
import cheerio from 'cheerio';

export async function fetchPlayerCount() {
    const url = "https://www.roblox.com/games/4872321990/Sky-Block-BETA";
    const html = await getHTML(url);
    const $ = cheerio.load(html);

    const text = $('ul.border-top>li:nth-child(1)>p:nth-child(2)').text();
    console.log(`player count: ${text}`);
    return text;
}

async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
}