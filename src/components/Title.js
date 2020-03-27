import React from 'react';

const Title = ({message}) => {
    return (
        <>
            <div
            style={{
                width: '100%',
                textAlign: 'center',
                color: '#ffffff',
                fontWeight: 'bolder',
                lineHeight: '150%',
                fontSize: '2em'
            }}
            >
                {message}
            </div>
        </>
    );
}

export default React.memo(Title);