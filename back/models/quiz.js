import mongoose from "mongoose";

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    quizIndex: {
        type: Number,
        reqired: true
    },
    question: {
		type: String,
		required: true
	},
	answer0: {
		type: String,
		required: true
	},
	answer1: {
		type: String,
		required: true
	},
    answer2: {
		type: String,
		required: true
	},
    answer3: {
		type: String,
		required: true
	},
    correct: {
        type: Number,
        reqired: true
    },
    wrong: {
        type: Number,
        reqired: true
    }

})

export default mongoose.model('Quiz', quizSchema)