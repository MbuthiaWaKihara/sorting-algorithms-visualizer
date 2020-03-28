import React from 'react';
import {
    Icon,
    Tooltip,
    Whisper,
} from 'rsuite';


const tipMessage = (
    <Tooltip>
      Exit Notes Mode
    </Tooltip>
  );
const Title = ({message, notesMode, closeNotesMode}) => {
    return (
        <>
            <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
            }}
            >
                {notesMode &&
                <Whisper trigger="hover" speaker={tipMessage}>
                <div
                style={{
                    height: '100%',
                    width: '3.5%',
                }}
                onClick={closeNotesMode}
                >
                    
                    <Icon
                     icon="close-circle"
                     size="3x"
                     style={{cursor: 'pointer'}}
                     inverse={true}
                     />
                    
                </div>
                </Whisper>
                }
                <h3
                style={{
                    width: '96.5%',
                    height: '100%',
                    textAlign: 'center',
                    color: '#ffffff',
                    fontWeight: 'bolder',
                    lineHeight: '150%',
                    fontSize: '2em',
                }}
                >{message}</h3>
            </div>
        </>
    );
}

export default React.memo(Title);