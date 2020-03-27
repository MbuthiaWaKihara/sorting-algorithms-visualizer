import React from 'react';
import {
    Sidenav,
    Nav, 
    Dropdown, 
} from 'rsuite';

const Navigation = ({response, isAnimating}) => {
    return (
        <>
            <div style={{  }}>
                <Sidenav 
                defaultOpenKeys={['3', '4']} 
                activeKey="1" 
                appearance="inverse"
                onSelect={eventKey => {!isAnimating && response(eventKey)}}
                >
                <Sidenav.Body>
                    <Nav>
                    <Nav.Item eventKey="1" >
                        Sort!
                    </Nav.Item>
                    <Nav.Item eventKey="2" >
                        Generate New Array
                    </Nav.Item>
                    <Dropdown 
                        eventKey="3" 
                        title="Sorting Order"
                    >
                        <Dropdown.Item eventKey="3-1">Ascending</Dropdown.Item>
                        <Dropdown.Item eventKey="3-2">Descending</Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                        eventKey="4"
                        title="Sorting Algorithm"
                    >
                        <Dropdown.Item eventKey="4-1">Insertion Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-2">Selection Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-3">Bubble Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-4">Quick Sort</Dropdown.Item>
                        <Dropdown.Item eventKey="4-5">Merge Sort</Dropdown.Item>
                    </Dropdown>
                    <Nav.Item eventKey="5" >
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
