import express from 'express';
import cors from 'cors';
import { fetchPlayerCount } from './lib/scrape';

const app = express();
app.use(cors());

let playerCount = "???";

async function scrape() {
    try {
        playerCount = await fetchPlayerCount();
    } catch (err) {
        console.error(err);
    }
}

app.get(`/data`, async (req, res, next) => {
    res.json({
        playerCount: playerCount
    });
});

app.listen(3000, () => {
    console.log(`Example App running on port http://localhost:3000`);
});

setInterval(async () => {
    await scrape();
}, 5000);
scrape();