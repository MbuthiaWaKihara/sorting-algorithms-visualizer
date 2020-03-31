import React from 'react';
import {
    Table,  
    List,
    Icon,
    Tooltip,
    Whisper,
} from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const append = (
    <>
        <div style={{
            width: '10%',
            height: '50%',
            padding: '1px',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div
            style={{
                width: '30%',
                height: '100%',
                borderRadius: '50px',
                backgroundColor: '#f75959',
            }}
            >  
            .
            </div>
            <div
            style={{
                width: '30%',
                height: '50%',
                borderRadius: '50px',
                backgroundColor: '#fff563',
            }}
            >  
            .
            </div>
            <div
            style={{
                width: '30%',
                height: '100%',
                borderRadius: '50px',
                backgroundColor: '#d7fc03',
            }}
            >  
            .
            </div>
        </div>
    </>
);

const data = [{
    visual: `A blue horizontal bar, sometimes with a number at the furthest right`,
    actual: `This represents a single element in the array. The width of the bar relative to the screen can give you an idea of the value it represents. When the array length is small enough, the value the array member represents is actually shown as a number on the furthest right. An element can have a minimum value of 5, and a maximum value of 200`,
},{
    visual: `An orange horizontal bar`, 
    actual: `Sometimes the blue bars turn orange during animation. This generally represents the point where the algorithm is currently considering or comparing. When the bar is orange, it means the algorithm is currently considering that element in the array.`,
},{
    visual: `A red horizontal bar`, 
    actual: `Sometimes the bar turns red during animation. This generally represents an element that is wrongly placed in the array. When the bar turns red, it means that the algorithm thinks that that element is not correctly placed and may change its position in the array. When the bar turns red, you are likely to see its position change immediately, or shortly after it turns.`,
},{
    visual: `A green horizontal bar`, 
    actual: `Sometimes the bar turns green during animation. This generally represents an element that is correctly placed in the sorted array. When the bar turns green, it means that the algorithm is satisfied that that is the final position of that element in the sorted array.`,
},{
    visual: `A collection of horizontal bars placed vertically across the screen`, 
    actual: `This represents the array itself. Each horizontal bar represents a member of the array, with its width representing its value. An array can have a maximum length of 120, and a minimum length of 5 (120 max members, 5 min members)`,
},{
    visual: `A range input field labeled Array Size`, 
    actual: `This represents an input where you as the user can change the array size. Whenever you change the array size, a new array is generated with elements of randomized values.`,
},{
    visual: `A range input field labeled Animation Speed`, 
    actual: `This repesents an input where you as the user can vary the speed at which the sorting animation executes. You may want to use slow speeds with smaller arrays and larger speeds with larger arrays.`,
}];

const listData = [
    `Blue ->  The color represents the initial state of the members of an array.`,
    `Orange ->  The color represents a member being considered or compared by the algorithm`,
    `Red ->  The color represents a member the algorithm thinks is in the wrong position and should likely be shifted`,
    `Green ->  The color represents a member the algorithm is confident is in the right place in the sorted version of the array`,
];


const tipMessage = (
    <Tooltip>
      Link to github repo
    </Tooltip>
  );

export const notes = (
    <>
    <h1 className="title">Sorting Algorithms Visualizer</h1>
    <h4 className="caption">Data is beautiful</h4>
    <h2 className="subtopic">{append} What is this page about?</h2>
    <p className="content">Hi there! First of all big thanks for your interest! This page intends to help you develop that interest in this web app even further!
    Here, we are going to discuss exactly what this web app hopes to achieve, and exactly how it does that. This page is also going to point out some practices
    that will help you get maximum benefit from using this web app. Okay, let's jump right in then!</p>
    <h2 className="subtopic">{append} What is this app about?</h2>
    <p className="content">Sorting brings order to the world. This web app assumes that the user has some knowledge about
    arrays as used in computer programming. In statically typed programming languages like Java, arrays hold the same data type.
    Considering an array of integers n, there are a number of sorting algorithms out there that when programmed into a computer, are
    able to sort this array n from the smallest element in n to the largest, or vise versa. This app helps you visualize exactly how some of the 
    common algorithms achieve this sorting of any input array n. We'll look more closely and more visually how insertion sort, selection sort, bubble sort,
     merge sort and quick sort do there thing.</p>
    <p className="content"> Of course you could just check out how the algs work without reading this page, but if you're ever
     confused about what all those flashing colors and jumping bars are all about, this is the page that holds those answers!</p>
     <h2 className="subtopic">{append} How does the app visualize arrays and sorting?</h2>
     <p className="content">If you went ahead and clicked that big X on the top left, this screen would turn into a bunch of blue bars with two small range
     inputs at the top, one saying array size and the other saying animation speed. All these things are how the app visualizes an array instance. This 
     table summarizes all visual elements the app uses and what they represent.</p>
     <div>
        <Table wordWrap height={400} data={data}>
          <Column width={500} resizable>
            <HeaderCell>Visual Element</HeaderCell>
            <Cell dataKey="visual" />
          </Column>

          <Column width={700} resizable>
            <HeaderCell>Actual Element</HeaderCell>
            <Cell dataKey="actual" />
          </Column>
        </Table>
      </div>
      <p className="content">Wow that was easy right? Now that it has become a bit more clear what's going on, let's dive into the individual algorithms, discuss how they work very briefly and how the animation illustrates their execution.</p>
      <h2 className="subtopic">{append} Wait so what's with the colors?</h2>
      <p className="content">Just before we discuss the algorithms, let's just list out what the different colors in animation generally represent. Now, this may seem redundant since we already mentioned the colors
      earlier when discussing the visual vs actual elements, but it's good that we have a separate reference for what a color generally represents for when we start discussing the algs. It would be really annoying to have to read through the table again 
      whenever we don't recall exactly what we said. Alright here we go:</p>
      <List>
        {listData.map((item,index)=>
        <List.Item key={index} index={index}>
            {item} 
        </List.Item>
        )}
    </List>
    <p className="content">Ok with that said, let's start of with our first algorithm, selection sort...</p>
    <p className="content">With each alg, we will discuss very briefly how the alg works, and what exactly each color represents, specific to the alg. We'll assume that sorting is always done in ascending order. When you understand ascending order, it is very easy to mirror the logic to the descending manner.</p>
    <h4 className="caption">Hey, here's a thought, you can jot your pseudo code down for every alg we discuss, and then later compare the pseudo code with the animation, after reading how the colors work. That would be fun!</h4>
    <h2 className="subtopic">{append} Selection Sort</h2>
    <p className="content">Selection sort uses a comparison strategy. The algorithm loops through every single member trying to find the largest (this is assuming you are sorting ascending), and then when it does, it swaps the largest
    with the element at the furthest index of the array which is unsorted. Finally, it marks that largest as sorted and repeats. Eventually, all the members will be marked as sorted, and the array will be sorted!</p>
    <p className="content">So how does the animation show this? The recommendation is that you start the sort animation with a small array, and with very small animation speed. That way you will see very clearly what the animation is doing.
    If you did that, for selection sort, ascending, you would see that each element first turns orange, showing that the selection algorithm is checking whether the element is indeed the largest.
    Of course at first, the largest element is the first element to be considered, but after that, for an element to be the largest, it has to be larger than the previous largest.
    When the animation choses an element as the largest, it turns the horizontal bar red, showing that this element might need to be swapped, and then continues considering the other members.
    When the animation reaches the last sorted (at the first iteration, since none of the members is marked as sorted, index of the last sorted is the length of the array), it swaps the member at position - 1, with the member
    that was marked as largest. Before the swap, you'll notice that the last unsorted member is also turned red, showing that it will be swapped. After the swap, 
    the previous largest is turned green, showing that it is now sorted. Phew, that was a lot of explanation! All these are better explained visually, try it out now!</p>
    <h2 className="subtopic">{append} Insertion Sort</h2>
    <p className="content">Insertion Sort also uses a comparison strategy, but it's a more intuitive way of sorting an array. It is probably
    how you would sort your deck of cards in a game of poker. The algorithm considers every member in turn, and places each of the members in their correct position before moving
     to the next member. So how does the alg know where a member belongs? Easy, for every member, it checks from the position of that member to the position of the first member. If the member at the
     position currently being considered is larger than the member being considered, then it swaps them.</p>
    <p className="content">So how does the animation show this? Whenever the algorithm considers a member, the animation turns the member's bar orange. It also turns the bar of the member at the previous position orange and compares them. 
    If the former member is less than the later, it turns both their bars red and swaps them, and then turns the bars back blue. The algorithm then repeats this process until it reaches the two top most members. When the alg does this for every member in the array, the array will be sorted. 
    Check insertion sort out now and see the alg in action!</p> 
    <h2 className="subtopic">{append} Bubble Sort</h2>
    <p className="content">Bubble sort is the last algorithm that we'll discuss that uses the comparison strategy. Bubble sort is probably the easiest alg to 
    understand. Its approach usually seems natural for the average mind. The algorithm simply starts from the first member and compares it to the next member. If the next member is smaller, it swaps them. It then goes on to the second member and repeats. Easy huh! The algorithm iterates through
    the array performing the same process until the array is eventually sorted</p>
    <p className="content">So how does the animation show this? The animation always turns two bars at a time orange. This shows that the algorithm is currently 
    comparing the two members represented by those bars. If the members need to be swapped, the animation will first turn their bars red, swap them, then turn them back blue. Else, the animation just turns them back blue.</p>
    <h2 className="subtopic">{append} Quick Sort</h2>
    <p className="content">Quick sort is very interesting. It is harder to wrap your mind around but it's worth the try. Quick sort is the most practical option
    for an efficient sorting algorithm, and is in fact, used in most of the sorting APIs that come with programming languages. Quick sort, unlike the algs we've discussed till now, uses a divide and conquer strategy.
    For a given array, it chooses one of the array's members as a pivot. In the quick sort implementation used in this app, it always choses the last member. It then places this chosen pivot in its correct position (if the array was sorted).
    So how does it know this pivot's correct position? Easy, it considers every other member apart from the pivot, and puts members smaller than the pivot above the pivot(or to the left of the pivot in the traditional vertical array visualization) and members larger than the pivot below it(or to the right of it).
    It then splits the array into two arrays, separated by the pivot, and repeats that process for both arrays.</p> 
    <p className="content">So how does the animation show this? The animation marks the pivot by turning its bar red(showing that it will potentially be shifted to its correct position in a sorted version of the array).
    The animation then considers every other member but the pivot, it turns each member's bar orange as it considers it, and back blue when it's done considering it. During this process, you can be able
    to see the algorithm pushing all members smaller than the pivot upwards. The animation then eventually swaps the pivot with whichever member is at the pivot's correct position, and marks the pivot green. Lastly, the animation considers the members separated by the green pivot as separate arrays and repeats the process. 
    Wow! How efficient! Try out the quick sort and watch how the alg works!</p>
    <h2 className="subtopic">{append} Merge Sort</h2>
    <p className="content">The last algorithm we'll discuss is the merge sort. Just like the quick sort, the merge sort also uses a divide and conquer strategy. For this app, 
    the merge sort is probably the most visually rich of the algorithms, you can almost completely explain how it works simply by seeing it working on an array of large length and at a high animation speed.
    Try run the algorithm before reading the rest of this section and see if you agree!</p>
    <p className="content">The merge sort simply splits whichever array was inputed into arrays, with at most two members each. It then sorts these arrays. Then, it merges two two membered array into one four membered array. It then sorts this newly merged array.
    And the process continues until eventually, it has only two arrays to merge, into a sorted version of the original array.</p>
    <p className="content">So how does the animation show this? As the animation splits the array into many two membered arrays and sorts them, the animation will look a lot like bubble sort. 
    It will always highlight the two members of the subarrays orange, and if they need swapping, it will highlight them red, swap them and highlight them back blue. But when the animation now needs to merge the two membered arrays into four membered arrays,
    you will notice that the highlighted bars are now not adjacent to each other, but the sorting process (turning orange, if needs swapping turning red, turning back blue) remains the same. The algorithm repeats this until eventually, it has just two arrays to merge into one sorted array. Run the algorithm and see it do just that!</p>
    <h4 className="caption">The entirety of the purpose of this web app is to help you relate more closely and more visually to sorting algorithms. Quit memorizing pseudo code, vividly see the algorithm working in your mind!</h4>
    <h2 className="subtopic">{append} Parting Shot</h2>
    <p className="content">This web app can still be improved vastly. That is why it is provided as an open source project. Anyone willing to improve the app in any way, from UI design, to animation, to adding extra algs, feel free to do so. The web app is written in javascript, under 
    the ReactJS Library. For more info about how exactly to contribute, visit the github page where the repo for the app lives. See you soon!</p>
    <div style={{
        
    }}>
        <Whisper trigger="hover" speaker={tipMessage} placement="top">
        <a 
        style={{
            marginLeft: '50%',
        }}
        href="https://github.com/MbuthiaWaKihara/sorting-algorithms-visualizer"
        >
            <Icon
            icon="github"
            size="3x"
            style={{cursor: 'pointer',}}
            />
        </a>
        </Whisper>
    </div>
    </>
);