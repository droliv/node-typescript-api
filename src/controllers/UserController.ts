import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
    public async index (req: Request, res: Response): Promise<Response>{
        const data = await User.find()
        .then(users => {
            res.status(200)
            return users
        })
        .catch(err => {
            res.status(400)
            return {message: "unable to list users"}
        })
        return res.json(data)
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const data = await User.create(req.body)
        .then(user => {
            res.status(201)
            return user
        })
        .catch(err => {
            res.status(400)
            return {message: "Is not possible store user"}
        })
        return res.json(data)
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const data = await User.findOneAndUpdate({_id:id}, req.body, {
            new: true
        })
        .then(user => {
            res.status(200)
            return user
        })
        .catch(err => {
            res.status(400)
            return {message: "Is not possible update user"}
        })
        return res.json(data)
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const data = await User.findOne({_id:id})
        .then(user => {
            res.status(200)
            return user
        })
        .catch(err => {
            res.status(400)
            return {message: "Is not possible localize user"}
        })
        return res.json(data)
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const data = await User.findOneAndDelete({_id:id})
        .then(user => {
            res.status(200)
            return user
        })
        .catch(err => {
            res.status(400)
            return {message: "Is not possible remove user"}
        })
        return res.json(data)
    }

}


export default new UserController()