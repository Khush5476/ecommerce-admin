
import {Project} from "@/models/Project";
import { mongooseConnect } from "@/lib/mongoose";


export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect();

    if(method === 'GET'){
        // this was the issue
        if(req.query?.id){
            res.json(await Project.findOne({_id:req.query.id}));
        } else {
            res.json(await Project.find());
        }


    }
    if (method === 'POST') {
        const {Title,Description,Price} = req.body;
        const projectDoc = await Project.create({
            Title,Description,Price
        })
        res.json(projectDoc);

    }

    if (method === 'PUT'){
    const {Title,Description,Price,_id} = req.body;
    await Project.updateOne({_id}, {Title,Description,Price});
    res.json(true);
    }

}