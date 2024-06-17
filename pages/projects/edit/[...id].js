import Layout from "@/components/Layout";
import ProjectForm from "@/components/ProjectForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProjectPage(){
   const [ProjectInfo, setProjectInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
      if (!id){
         return;
      }

      axios.get('/api/projects?id='+id).then(response =>  {
        setProjectInfo(response.data);

      });

    }, [id]);
   return(
    <Layout>
      <h1>Edit Project</h1>
      {ProjectInfo && (
      <ProjectForm {...ProjectInfo} />
   )}
    </Layout>
   );
}