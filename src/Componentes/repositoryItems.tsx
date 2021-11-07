
interface RepositoryItemProps {
    repository:{

        name:String;
        description: string;
        html_url:string;
        id:Number;
       
    }
}



export function RepositoryItems(props:RepositoryItemProps){

    return(
        <li><strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>

                <a href=""> {props.repository.html_url}</a>
              
               <p>ID {props.repository.id}</p>

                </li>
    )

}