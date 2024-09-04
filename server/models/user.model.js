import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema(
    {
        "firstName": {
            "type": String,
            "required": [true, "First Name is required"],
            "minlength": [2, "First Name must be at least 2 characters long"]
        },
        "lastName": {
            "type": String,
            "required": [true, "Last Name is required"],
            "minlength": [2, "Last Name must be at least 2 characters long"]
        },
        "email": {
            "type": String,
            "required": [true, "Email is required"],
            "validate": {
                "validator": (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                "message": "Please enter a valid email"
            },
            "unique": [true, "Email is already in use"]
        },
        "password": {
            "type": String,
            "required": [true, "Password is required"],
            "minlength": [8, "Password must be at least 8 characters long"]
        },
        "image": {
            "type": String,
            "required": false,
            "default": "https://dndgroupproject.s3.us-east-2.amazonaws.com/default_profile.jpg"
        },
    },
    { "timestamps": true }
)

UserSchema.virtual('confirmPassword')
    .get(function () { return this._confirmPassword; })
    .set(function (value) { this._confirmPassword = value; });

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password and Confirm Password must match');
    }
    next();
})

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        })
})

const UserModel = model('User', UserSchema);
export default UserModel;