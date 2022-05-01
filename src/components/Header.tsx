
interface HeaderProps {
}

const Header: React.FC<HeaderProps> = (props: any) => {
    return (
        <div className='header'>
            {props.body}
        </div>
    );
}

export { Header };