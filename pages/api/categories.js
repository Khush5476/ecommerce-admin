import {Category} from "@/models/Category";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    res.json(await Category.find().populate('parent'));
  }

  if (method === 'POST') {
    const {name,parentCategory} = req.body;
    const categoryDoc = await Category.create({
      name,
      parent: parentCategory || undefined,
    });
    res.json(categoryDoc);
  }

  if (method === 'PUT') {
    const {name,parentCategory,_id} = req.body;
    const categoryDoc = await Category.updateOne({_id},{
      name,
      parent: parentCategory || undefined,
    });
    res.json(categoryDoc);
  }

  if (method === 'DELETE') {
    const {_id} = req.query;
    await Category.deleteOne({_id});
    res.json('ok');
  }
}