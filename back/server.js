import express  from 'express';
import mongoose  from 'mongoose';
import dotenv  from 'dotenv';
import bodyParser  from 'body-parser';
import cors from 'cors';
import Quiz from './models/quiz.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/auth/signup', async (req, res, next) => {
    
    const question = req.body.question;
    const answer0 = req.body.answer0;
    const answer1 = req.body.answer1;
    const answer2 = req.body.answer2;
    const answer3 = req.body.answer3;
    const correct = req.body.correct;
    const wrong = req.body.wrong;

            
    const quiz = new Quiz({
            question,
            answer0,
            answer1,
            answer2,
            answer3,
            correct,
            wrong
    });

    const result = await quiz.save();
        
    
});


mongoose.connect(process.env.MONGO_DB).then(()=>{
    app.listen(3000, ()=> console.log(`lisetening to port 3000`))
}).catch(err=>console.log(err))


