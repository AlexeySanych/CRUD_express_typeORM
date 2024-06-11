const data = require('./sql3-data.js');

module.exports = {
    async listUsers(req, res) {
        return res.json(await data.getUsers());
    },

    async createUser(req, res) {
        if(req.body.name && req.body.age) {
            return res.json(await data.addUser(req.body));
        } else {
            return res.status(400).json({message: 'Name and age required'});
        } 
    },

    async getUser(req, res) {
        const user = await data.getUserById(req.params.id);
        if(user) {
            return res.json(user);
        } else {
            return  res.status(404).json({message: 'User not found'});
        }
    },

    async updateUser(req, res) {
        const updatedUser = await data.updateUser(req.params.id, req.body);
        if(updatedUser) {
            return res.json(updatedUser);
        } else {
            return  res.status(404).json({message: 'User not found'});
        } 
    },

    async deleteUser(req, res) {
        const success = await data.deleteUser(req.params.id);
        if(success) {
            return  res.json({message: 'deleted'});
        } else {
            return  res.status(404).json({message: 'User not found'});
        }
    }
}