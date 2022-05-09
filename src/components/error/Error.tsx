import './style.css'

export type ErrorProps = {
    name?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
}
export function ErrorList(props: ErrorProps) {
    return (
        <div className='error'>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.password}</p>
            <p>{props.passwordConfirm}</p>
        </div>
    )
}