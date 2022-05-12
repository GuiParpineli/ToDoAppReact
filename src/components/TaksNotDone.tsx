import './../components/error/style.css'

export type NotDone = {
    nameTask: string;
    date: string;
}
export function TaskNotDone(props: NotDone) {
    return (
        <div className='notDone'>
            <p>{props.nameTask}</p>
            <small>{props.date}</small>      
        </div>
    )
}