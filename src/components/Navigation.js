import React from 'react';
import {
    Sidenav,
    Nav, 
    Dropdown,
    Loader,
} from 'rsuite';

const Navigation = ({response, isAnimating, notesMode, animationMilliseconds, pause}) => {
    return (
        <>
            <div style={{  }}>
                <Sidenav 
                defaultOpenKeys={['3', '4']} 
                activeKey="2" 
                appearance="inverse"
                onSelect={eventKey => {
                    if(eventKey === '6') {
                        response(eventKey);
                    }else{
                        !isAnimating && !notesMode && response(eventKey)
                    }   
                }}
                >
                <Sidenav.Body>
                    <Nav>
                    <Nav.Item eventKey="1" disabled={isAnimating || notesMode || pause !== 0}>
                       {isAnimating ? <Loader inverse={true} content="Sorting..." speed={animationMilliseconds >= 200? `slow`: `fast`} size="md"/> : 'Sort'}
                    </Nav.Item>
                    <Nav.Item eventKey="2" disabled={isAnimating || notesMode || pause !== 0}>
                        New Array
                    </Nav.Item>
                    <Dropdown 
                        eventKey="3" 
                        title="Sorting Order"
                    >
                        <Dropdown.Item eventKey="3-1" disabled={isAnimating || pause !== 0}>Ascending</Dropdown.Item>
                        <Dropdown.Item eventKey="3-2" disabled={isAnimating || pause !== 0}>Descending</Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                        eventKey="4"
                        title="Sorting Algorithm"
                    >
                        <Dropdown.Item eventKey="4-1" disabled={isAnimating || pause !== 0}>Insertion Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-2" disabled={isAnimating || pause !== 0}>Selection Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-3" disabled={isAnimating || pause !== 0}>Bubble Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-4" disabled={isAnimating || pause !== 0}>Quick Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-5" disabled={isAnimating || pause !== 0}>Merge Sort</Dropdown.Item>
                    </Dropdown>
                    <Nav.Item eventKey="5" disabled={isAnimating}>
                        Notes
                    </Nav.Item>
                    </Nav>
                </Sidenav.Body>
                </Sidenav>
            </div>
        </>
    )
}

export default React.memo(Navigation);
