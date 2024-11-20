import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(201).send({ msg: 'Hellos' });
});

app.get('/api/users', (req, res) => {
    res.send([
        { id: 1, username: 'Golfer1', displayName: 'Golf_addict' },
        { id: 2, username: 'Golfer2', displayName: 'Golf_addict2' },
        { id: 3, username: 'Golfer3', displayName: 'Golf_addict3' },
    ]);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
