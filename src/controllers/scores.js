exports.getScores = (req, res, next) => {
    res.json({
        scores: [
            { courseName: 'Clearview', totalScore: 17 },
            { courseName: 'Douglaston', totalScore: 12 },
        ],
    });
};

exports.createScore = (req, res, next) => {
    const courseName = req.body.courseName;
    const score = req.body.score;
    //Create Scores In DB
    res.status(201).json({
        message: 'Score submitted successfully',
        post: { courseName: courseName, score: score },
    });
};
