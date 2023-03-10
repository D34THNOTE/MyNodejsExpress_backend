const UserRepository = require('../repository/sequelize/UserRepository');

exports.getUsers = (req, res, next) => {
    UserRepository.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getUserByID = (req, res, next) => {
    const IDuser = req.params.IDuser;
    UserRepository.getUserByID(IDuser)
        .then(user => {
            if(!user) {
                res.status(404).json({
                    message: 'User with id: '+IDuser+' not found'
                })
            } else {
                res.status(202).json(user);
            }
        });
};

exports.createUser = (req, res, next) => {
    UserRepository.createUser(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateUser = (req, res, next) => {
    const IDuser = req.params.IDuser;
    UserRepository.updateUser(IDuser, req.body)
        .then(result => {
            res.status(200).json({message: 'User updated!', user: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteUser = (req, res, next) => {
    const IDuser = req.params.IDuser;
    UserRepository.deleteUser(IDuser)
        .then(result => {
            res.status(200).json({message: 'Removed user ID: '+IDuser, user: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};