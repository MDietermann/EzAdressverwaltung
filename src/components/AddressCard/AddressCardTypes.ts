export type addressDataType = {
    firstName: String,
    lastName: String,
    birthday: Date,
    address: {
        private: [{ street: String, number: String, city: String, postal: Number }],
        work: [{ street: String, number: String, city: String, postal: Number }],
        other: [{ street: String, number: String, city: String, postal: Number }]
    },
    phoneNumber: {
        private: [{ prefix: Number, number: Number }],
        work: [{ prefix: Number, number: Number }],
        other: [{ prefix: Number, number: Number }]
    }
}
