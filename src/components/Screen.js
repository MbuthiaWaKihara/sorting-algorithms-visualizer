import React from 'react';
import {
    Slider,
} from 'rsuite';
import {notes} from '../data/notes';
import '../styles/screen.css';

const Screen = ({arrayInfo, animationInfo, isAnimating, sorted, notesMode}) => {

    let arrayHeight = (100 - ((arrayInfo.currentArray.length - 1 ) * .28)) / arrayInfo.currentArray.length;
    let displayArray = arrayInfo.currentArray.map(
        (position, positionIndex) => {
            return(
                <div
                className={position.className}
                style={{
                    width: `${position.number / 2 > 100 ? 100 : position.number / 2}%`,
                    height: `${arrayHeight - .25}%`,
                    margin: '0 0 0 auto',
                    marginBottom: '.25%',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                }}
                key={position.indexInArray}
                >
                    {arrayInfo.currentArray.length <= 30 &&
                        <div
                        style={{
                            // border: '2px solid black',
                            color: '#ffffff',
                            fontWeight: 'bolder',
                            textAlign: 'center',
                            width: '50px',
                            height: '100%',
                            margin: '0 0 0 auto',
                        }}
                        >{position.number}</div>
                    }
                </div>
            );
        }
    );

    return (
        <>
            <div
            style={{
                width: '100%',
                height: '100%',
                overflow: 'auto',
            }}
            >
                {
                    !notesMode ? 
                    <>
                        <div
                        style={{
                            width: '100%',
                            height: '10%',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                        >
                            <div
                            style={{
                                width: '50%',
                                height: '100%',
                            }}
                            >
                                <h4 style={{textAlign: 'center', marginBottom: '5px', color: '#397afa'}}>Array Size</h4>
                                <Slider
                                style={{
                                    width: '90%',
                                    margin: 'auto',
                                }}
                                value={arrayInfo.currentArray.length}
                                onChange={value => arrayInfo.setCurrentArray(arrayInfo.createNewArray(value))}
                                min={5}
                                max={120}
                                tooltip={false}
                                barClassName="sliderbar"
                                disabled={isAnimating || sorted}
                                />
                            </div>
                            <div
                            style={{
                                width: '50%',
                                height: '100%',
                            }}
                            >
                                <h4 style={{textAlign: 'center', marginBottom: '5px', color: '#397afa'}}>Animation Speed</h4>
                                <Slider
                                style={{
                                    width: '90%',
                                    margin: 'auto',
                                }}
                                value={0 - animationInfo.animationMilliseconds}
                                onChange={value => animationInfo.setAnimationMilliseconds(0 - value)}
                                min={-400}
                                max={-10}
                                tooltip={false}
                                barClassName="sliderbar"
                                disabled={isAnimating}
                                />
                            </div>
                        </div>
                        <div
                        style={{
                            width: '98%',
                            height: '90%',
                            margin: '0 0 0 auto',
                        }}
                        >
                            {displayArray}
                        </div>
                    </> :
                    <>
                        <div
                        style={{
                            width: '90%',
                            margin: 'auto',
                        }}
                        >
                            {notes}
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default React.memo(Screen);
