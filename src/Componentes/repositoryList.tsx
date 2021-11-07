import react, { useEffect, useState } from 'react'

import { RepositoryItems } from './repositoryItems'


interface Repository {

  name:string;
  description:string;
  html_url:string;
  id:Number;
  
}

function RepositoryList(){



    const[repositories,setRepositories]=useState<Repository[]>([])


    useEffect(()=>{
      fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response=> response.json())
      .then(data=>setRepositories(data))

      

    },[]
    
    
    )
   
console.log(repositories)
    

    return(

        <>

        <section className="lista">
            <h1>Lista de Repositórios</h1>

            <ul>
                {
                  repositories.map(repositor =>{

                    return(

                        <RepositoryItems key={repositor.name} repository={repositor}></RepositoryItems>
                        
                    )


                  })

                }
                
                
                

            </ul>
        </section>

       

        </>
    )
}export default RepositoryList