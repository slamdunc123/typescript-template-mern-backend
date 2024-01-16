import mongoose from 'mongoose';

type UserType = {
  first_name: string
}

const UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
});

export const User: mongoose.Model<UserType> = mongoose.model('User', UserSchema);
