import './style.css'

export type ErrorProps = {
    desc?: string;
}
export function ErrorList(props: ErrorProps) {
    return (
        <div className='error'>
            <p>{props.desc}</p>
        </div>
    )
}