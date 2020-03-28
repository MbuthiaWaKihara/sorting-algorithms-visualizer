/**App, general wrapper and top level state management component */

import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import {
    Container,
    Sidebar,
    Header,
    Content,
    Alert,
} from 'rsuite';

import {
    headerStyles,
    containerStyles,
    innerContainer,
    contentStyles,
    sideBarStyles,
} from '../styles/layout';
import Title from './Title';
import Navigation from './Navigation';
import Screen from './Screen';
import {
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort,
    mergeSort,
} from '../logic/Algorithms';


//state independent callbacks:
//callback to generate a new array:
const createNewArray = size => {
    let newArray = [];
    for(let counter = 0; counter < size; counter++){
        newArray[counter] = {
            number: Math.floor(Math.random() * (201 - 5) + 5),
            indexInArray: counter,
            className: 'initial',
        }
    }
    return newArray;
}
//callback to randomize alg info:
const randomizeAlgInfo = () => {
    //prepare random alg
    let algNumber = Math.floor(Math.random() * (6 - 1) + 1);
    let algName;
    if(algNumber === 1) algName = 'Insertion Sort';
    if(algNumber === 2) algName = 'Selection Sort';
    if(algNumber === 3) algName = 'Bubble Sort';
    if(algNumber === 4) algName = 'Merge Sort';
    if(algNumber === 5) algName = 'Quick Sort';

    //prepare random order
    let orderNumber = Math.floor(Math.random() * (3 - 1) + 1);
    let orderName;
    if(orderNumber === 1) orderName = 'Ascending';
    if(orderNumber === 2) orderName ='Descending';

    return ({
        algorithm: algName,
        order: orderName,
    });
}


const App = () => {
    //reference variables:
    //ref variable to hold the interval window subscription
    let animationInterval = useRef();
    //ref variable to hold the position of the animating frame in the frames array
    let animationPosition = useRef(0);
    

    //state variables
    //state variable to track whether an animation is running
    const [isAnimating, setIsAnimating] = useState(false);
    //state variable that holds the current array being displayed
    const [currentArray, setCurrentArray] = useState(() => createNewArray(Math.floor(Math.random() * (120 - 5) + 5)));
    //state variable that tracks how many milliseconds animation should take
    const [animationMilliseconds, setAnimationMilliseconds] = useState(100);
    //state variable that holds the information that an alg needs to sort correctly
    const [algsInfo, setAlgsInfo] = useState(randomizeAlgInfo);
    //state variable to store the title message
    const [titleMessage, setTitleMessage] = useState(`Visualizing ${algsInfo.algorithm} | ${algsInfo.order}`);
    //state variable that stores the length of the frames array
    const [frameLength, setFrameLength] = useState(0);
    //state variable to tell the app when an array has already been sorted
    const [sorted, setSorted] = useState(false);
    //state variable to track whether user is in notes mode or not
    const [notesMode, setNotesMode] = useState(false);


    //state dependent callbacks
    //callback to sort current array:
    const sort = () => {
        let frames;
        let descending = algsInfo.order === 'Ascending' ? false : true;
        if(algsInfo.algorithm === 'Insertion Sort') frames = insertionSort(descending, JSON.parse(JSON.stringify(currentArray)));
        if(algsInfo.algorithm === 'Selection Sort') frames = selectionSort(descending, JSON.parse(JSON.stringify(currentArray)));
        if(algsInfo.algorithm === 'Bubble Sort') frames = bubbleSort(descending, JSON.parse(JSON.stringify(currentArray)));
        if(algsInfo.algorithm === 'Quick Sort') frames = quickSort(descending, JSON.parse(JSON.stringify(currentArray)), 0, currentArray.length - 1);
        if(algsInfo.algorithm === 'Merge Sort') frames = mergeSort(descending, JSON.parse(JSON.stringify(currentArray)), currentArray.length);
        

        let sortedArray = frames[frames.length - 1];
        for(let counter = 0; counter < sortedArray.length; counter++){
            sortedArray[counter].className = "sorted";
        }
        frames.push(JSON.parse(JSON.stringify(sortedArray)));

        setFrameLength(frames.length);
        animationInterval.current = setInterval(() => {
            // console.log("animation position: ", position.current);
            setCurrentArray(previousArray => {
                //if(JSON.parse(JSON.stringify(previousArray)) === JSON.parse(JSON.stringify(allFrames.current[animationPosition.current]))) return previousArray;
                return frames[animationPosition.current];
            });
            animationPosition.current += 1;
        }, animationMilliseconds);
    }
    //callback to respond to user click on side nav
    const respondToNavClick = eventKey => {

        //for generating new array
        if(eventKey === '2') {
            window.location.reload();
        }
        //for making order ascending
        if(eventKey === '3-1'){
            setAlgsInfo(previousInfo => {return{...previousInfo, order: 'Ascending'}});
            setTitleMessage(`Visualizing ${algsInfo.algorithm} | Ascending`);
        }
        //for making order descending
        if(eventKey === '3-2'){
            setAlgsInfo(previousInfo => {return{...previousInfo, order: 'Descending'}});
            setTitleMessage(`Visualizing ${algsInfo.algorithm} | Descending`);
        }
        
        //for making alg insertion
        if(eventKey === '4-1'){
            setAlgsInfo(previousInfo => {return{...previousInfo, algorithm: 'Insertion Sort'}});
            setTitleMessage(`Visualizing Insertion Sort | ${algsInfo.order} `);
        }
        //for making alg selection
        if(eventKey === '4-2'){
            setAlgsInfo(previousInfo => {return{...previousInfo, algorithm: 'Selection Sort'}});
            setTitleMessage(`Visualizing Selection Sort | ${algsInfo.order} `);
        }
        //for making alg bubble
        if(eventKey === '4-3'){
            setAlgsInfo(previousInfo => {return{...previousInfo, algorithm: 'Bubble Sort'}});
            setTitleMessage(`Visualizing Bubble Sort | ${algsInfo.order} `);
        }
        //for making alg quick
        if(eventKey === '4-4'){
            setAlgsInfo(previousInfo => {return{...previousInfo, algorithm: 'Quick Sort'}});
            setTitleMessage(`Visualizing Quick Sort | ${algsInfo.order} `);
        }
        //for making alg merge
        if(eventKey === '4-5'){
            setAlgsInfo(previousInfo => {return{...previousInfo, algorithm: 'Merge Sort'}});
            setTitleMessage(`Visualizing Merge Sort | ${algsInfo.order} `);
        }

        //for activating notes mode
        if(eventKey === '5'){
            setNotesMode(true);
            setTitleMessage(`Notes`);
        }

        //for sorting
        if(eventKey === '1'){
            if(sorted){
                Alert.info(`Hmmm. Looks like this array is already sorted. Try refreshing to visualize again...`, 5000);
                return;
            }

            Alert.info(`Alright let's do this!`, 2000);
            setIsAnimating(true);
            sort();
        }
    }
    //callback for closing the notes mode
    const closeNotesMode = () => {
        setNotesMode(false);
        setTitleMessage(`Visualizing ${algsInfo.algorithm} | ${algsInfo.order}`)
    }

    //side effects
    //side effect that tracks when an animation is done
    useEffect(() => {  
        if(isAnimating && animationPosition.current === frameLength){
            // console.log("current array:", currentArray);
            clearInterval(animationInterval.current);
            setFrameLength(0);
            setIsAnimating(false);
            setSorted(true);
            Alert.success(`That's ${algsInfo.algorithm} for you!`, 2000);
        }
    }, [animationPosition.current]);

    return (
        <>
        <Container style={containerStyles}>
        <Sidebar style={sideBarStyles}>
            <Navigation
            response={respondToNavClick}
            isAnimating={isAnimating}
            notesMode={notesMode}
            />
        </Sidebar>
        <Container style={innerContainer}>
            <Header style={headerStyles}>
                <Title
                message={titleMessage}
                notesMode={notesMode}
                closeNotesMode={closeNotesMode}
                />
            </Header>
            <Content style={contentStyles}>
                <Screen
                arrayInfo={{currentArray, setCurrentArray, createNewArray}}
                animationInfo={{animationMilliseconds, setAnimationMilliseconds}}
                isAnimating={isAnimating}
                sorted={sorted}
                notesMode={notesMode}
                />
            </Content>
        </Container >
        </Container>
        </>
    );
}

export default React.memo(App);
