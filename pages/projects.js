// import Layout from "@/components/Layout";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Projects(){
//     const [projects, setProjects] = useState([]);
//     useEffect(() => {
//     axios.get('/api/projects').then(response =>{
//     console.log(response.data);
            
//         });


//     }, []);
// return (
// <Layout>

// <Link className="bg-blue-900 text-white rounded-md px-2 py-1" href={'/projects/new'}>Add New Project</Link>
// <table className="basic mt-2">
//     <thead>
//         <tr>
//             <td>Project Name</td>
//             <td>
                
//             </td>
//         </tr>
//     </thead>
//     <tbody>

//       {projects.length > 0 ? (
//         projects.map(project => (
//         <tr>
//             <td>{project.Title}</td>
//             <td>
//             <Link href={'/projects/edit/'}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//             <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//             </svg>
//             Edit
//             </Link>
//             </td>
//         </tr>
//          ))) : (
//         <tr>
//           <td colSpan="3"> no project found</td>
//         </tr>
//         )
//     }

//     </tbody>
// </table>


// </Layout>

// );
// }

import Layout from "@/components/Layout";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Products() {
  const [projects,setProjects] = useState([]);
  useEffect(() => {
    axios.get('/api/projects').then(response => {
      setProjects(response.data);
    });
  }, []);
  return (
    <Layout>
      <Link className="btn-primary" href={'/projects/new'}>Add new Project</Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Project name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project._id}>
              <td>{project.Title}</td>
              <td>
                <Link className="btn-default" href={'/projects/edit/'+project._id}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}