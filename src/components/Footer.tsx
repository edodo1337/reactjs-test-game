import React from 'react';


interface FooterProps {
}

const Footer: React.FC<FooterProps> = (props: any) => {
    return (
        <div className='footer'>
            {props.body}
        </div>
    );
}

export { Footer };