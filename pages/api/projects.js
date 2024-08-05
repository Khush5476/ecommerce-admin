
import {Project} from "@/models/Project";
import { mongooseConnect } from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]"


export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect();
    await isAdminRequest(req,res);

    if(method === 'GET'){

        if(req.query?.id){
            res.json(await Project.findOne({_id:req.query.id}));
        } else {
            res.json(await Project.find());
        }
    }

    if (method === 'POST') {
        const {Title,Description,Price,Images,category} = req.body;
        const projectDoc = await Project.create({
        Title,Description,Price,Images,category,
        })
        res.json(projectDoc);
      }

      

    if (method === 'PUT'){
    const {Title,Description,Price,Images,category,_id} = req.body;
    await Project.updateOne({_id}, {Title,Description,Price,Images,category});
    res.json(true);
    }

    

    if (method === 'DELETE') {
        if (req.query?.id) {
          await Project.deleteOne({_id:req.query?.id});
          res.json(true);
        }
      }
    }