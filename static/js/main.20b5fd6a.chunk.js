(this["webpackJsonpsorting-algorithms-visualizer"]=this["webpackJsonpsorting-algorithms-visualizer"]||[]).push([[0],{267:function(e,t,a){e.exports=a(505)},504:function(e,t,a){},505:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(20),i=a.n(s),o=(a(272),a(44)),l=a(27),h=a(519),m=a(513),c=a(520),u=a(523),g=a(521),d={height:"100%",backgroundColor:"#f5f5f5"},p={backgroundColor:"#397afa"},y={},b={backgroundColor:"#397afa",height:"6.4%"},f={height:"93.6%"},w=a(111),N=a(248),v=a(22),S=n.a.createElement(w.a,null,"Exit Notes Mode"),O=n.a.createElement(w.a,null,"Link to github repo"),E=n.a.memo((function(e){var t=e.message,a=e.notesMode,r=e.closeNotesMode;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row"}},a&&n.a.createElement(N.a,{trigger:"hover",speaker:S},n.a.createElement("div",{style:{height:"100%",width:"3.5%"},onClick:r},n.a.createElement(v.a,{icon:"close-circle",size:"3x",style:{cursor:"pointer"},inverse:!0}))),n.a.createElement("h3",{style:{width:"96.5%",height:"100%",textAlign:"center",color:"#ffffff",fontWeight:"bolder",lineHeight:"150%",fontSize:"2em"}},t),n.a.createElement(N.a,{trigger:"hover",speaker:O,placement:"left"},n.a.createElement("a",{style:{width:"5%"},href:"https://github.com/MbuthiaWaKihara/sorting-algorithms-visualizer"},n.a.createElement(v.a,{icon:"github",size:"3x",style:{cursor:"pointer"},inverse:!0})))))})),J=a(509),k=a(518),A=a(522),x=a(517),I=n.a.memo((function(e){var t=e.response,a=e.isAnimating,r=e.notesMode,s=e.animationMilliseconds,i=e.pause;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{}},n.a.createElement(J.a,{defaultOpenKeys:["3","4"],activeKey:"2",appearance:"inverse",onSelect:function(e){("6"===e||!a&&!r)&&t(e)}},n.a.createElement(J.a.Body,null,n.a.createElement(k.a,null,n.a.createElement(k.a.Item,{eventKey:"1",disabled:a||r||0!==i},a?n.a.createElement(A.a,{inverse:!0,content:"Sorting...",speed:s>=200?"slow":"fast",size:"md"}):"Sort"),n.a.createElement(k.a.Item,{eventKey:"2",disabled:a||r||0!==i},"New Array"),n.a.createElement(x.a,{eventKey:"3",title:"Sorting Order"},n.a.createElement(x.a.Item,{eventKey:"3-1",disabled:a||0!==i},"Ascending"),n.a.createElement(x.a.Item,{eventKey:"3-2",disabled:a||0!==i},"Descending")),n.a.createElement(x.a,{eventKey:"4",title:"Sorting Algorithm"},n.a.createElement(x.a.Item,{eventKey:"4-1",disabled:a||0!==i},"Insertion Sort"),n.a.createElement(x.a.Item,{eventKey:"4-2",disabled:a||0!==i},"Selection Sort"),n.a.createElement(x.a.Item,{eventKey:"4-3",disabled:a||0!==i},"Bubble Sort"),n.a.createElement(x.a.Item,{eventKey:"4-4",disabled:a||0!==i},"Quick Sort"),n.a.createElement(x.a.Item,{eventKey:"4-5",disabled:a||0!==i},"Merge Sort")),n.a.createElement(k.a.Item,{eventKey:"5",disabled:a},"Notes"))))))})),z=a(516),T=a(514),j=a(515),M=T.a.Column,C=T.a.HeaderCell,W=T.a.Cell,K=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{width:"10%",height:"50%",padding:"1px",display:"flex",flexDirection:"row"}},n.a.createElement("div",{style:{width:"30%",height:"100%",borderRadius:"50px",backgroundColor:"#f75959"}},"."),n.a.createElement("div",{style:{width:"30%",height:"50%",borderRadius:"50px",backgroundColor:"#fff563"}},"."),n.a.createElement("div",{style:{width:"30%",height:"100%",borderRadius:"50px",backgroundColor:"#d7fc03"}},"."))),B=n.a.createElement(w.a,null,"Link to github repo"),F=n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"title"},"Sorting Algorithms Visualizer"),n.a.createElement("h4",{className:"caption"},"Data is beautiful"),n.a.createElement("h2",{className:"subtopic"},K," What is this page about?"),n.a.createElement("p",{className:"content"},"Hi there! First of all big thanks for your interest! This page intends to help you develop that interest in this web app even further! Here, we are going to discuss exactly what this web app hopes to achieve, and exactly how it does that. This page is also going to point out some practices that will help you get maximum benefit from using this web app. Okay, let's jump right in then!"),n.a.createElement("h2",{className:"subtopic"},K," What is this app about?"),n.a.createElement("p",{className:"content"},"Sorting brings order to the world. This web app assumes that the user has some knowledge about arrays as used in computer programming. In statically typed programming languages like Java, arrays hold the same data type. Considering an array of integers n, there are a number of sorting algorithms out there that when programmed into a computer, are able to sort this array n from the smallest element in n to the largest, or vise versa. This app helps you visualize exactly how some of the common algorithms achieve this sorting of any input array n. We'll look more closely and more visually how insertion sort, selection sort, bubble sort, merge sort and quick sort do there thing."),n.a.createElement("p",{className:"content"}," Of course you could just check out how the algs work without reading this page, but if you're ever confused about what all those flashing colors and jumping bars are all about, this is the page that holds those answers!"),n.a.createElement("h2",{className:"subtopic"},K," How does the app visualize arrays and sorting?"),n.a.createElement("p",{className:"content"},"If you went ahead and clicked that big X on the top left, this screen would turn into a bunch of blue bars with two small range inputs at the top, one saying array size and the other saying animation speed. All these things are how the app visualizes an array instance. This table summarizes all visual elements the app uses and what they represent."),n.a.createElement("div",null,n.a.createElement(T.a,{wordWrap:!0,height:400,data:[{visual:"A blue horizontal bar, sometimes with a number at the furthest right",actual:"This represents a single element in the array. The width of the bar relative to the screen can give you an idea of the value it represents. When the array length is small enough, the value the array member represents is actually shown as a number on the furthest right. An element can have a minimum value of 5, and a maximum value of 200"},{visual:"An orange horizontal bar",actual:"Sometimes the blue bars turn orange during animation. This generally represents the point where the algorithm is currently considering or comparing. When the bar is orange, it means the algorithm is currently considering that element in the array."},{visual:"A red horizontal bar",actual:"Sometimes the bar turns red during animation. This generally represents an element that is wrongly placed in the array. When the bar turns red, it means that the algorithm thinks that that element is not correctly placed and may change its position in the array. When the bar turns red, you are likely to see its position change immediately, or shortly after it turns."},{visual:"A green horizontal bar",actual:"Sometimes the bar turns green during animation. This generally represents an element that is correctly placed in the sorted array. When the bar turns green, it means that the algorithm is satisfied that that is the final position of that element in the sorted array."},{visual:"A collection of horizontal bars placed vertically across the screen",actual:"This represents the array itself. Each horizontal bar represents a member of the array, with its width representing its value. An array can have a maximum length of 120, and a minimum length of 5 (120 max members, 5 min members)"},{visual:"A range input field labeled Array Size",actual:"This represents an input where you as the user can change the array size. Whenever you change the array size, a new array is generated with elements of randomized values."},{visual:"A range input field labeled Animation Speed",actual:"This repesents an input where you as the user can vary the speed at which the sorting animation executes. You may want to use slow speeds with smaller arrays and larger speeds with larger arrays."}]},n.a.createElement(M,{width:500,resizable:!0},n.a.createElement(C,null,"Visual Element"),n.a.createElement(W,{dataKey:"visual"})),n.a.createElement(M,{width:700,resizable:!0},n.a.createElement(C,null,"Actual Element"),n.a.createElement(W,{dataKey:"actual"})))),n.a.createElement("p",{className:"content"},"Wow that was easy right? Now that it has become a bit more clear what's going on, let's dive into the individual algorithms, discuss how they work very briefly and how the animation illustrates their execution."),n.a.createElement("h2",{className:"subtopic"},K," Wait so what's with the colors?"),n.a.createElement("p",{className:"content"},"Just before we discuss the algorithms, let's just list out what the different colors in animation generally represent. Now, this may seem redundant since we already mentioned the colors earlier when discussing the visual vs actual elements, but it's good that we have a separate reference for what a color generally represents for when we start discussing the algs. It would be really annoying to have to read through the table again whenever we don't recall exactly what we said. Alright here we go:"),n.a.createElement(j.a,null,["Blue ->  The color represents the initial state of the members of an array.","Orange ->  The color represents a member being considered or compared by the algorithm","Red ->  The color represents a member the algorithm thinks is in the wrong position and should likely be shifted","Green ->  The color represents a member the algorithm is confident is in the right place in the sorted version of the array"].map((function(e,t){return n.a.createElement(j.a.Item,{key:t,index:t},e)}))),n.a.createElement("p",{className:"content"},"Ok with that said, let's start of with our first algorithm, selection sort..."),n.a.createElement("p",{className:"content"},"With each alg, we will discuss very briefly how the alg works, and what exactly each color represents, specific to the alg. We'll assume that sorting is always done in ascending order. When you understand ascending order, it is very easy to mirror the logic to the descending manner."),n.a.createElement("h4",{className:"caption"},"Hey, here's a thought, you can jot your pseudo code down for every alg we discuss, and then later compare the pseudo code with the animation, after reading how the colors work. That would be fun!"),n.a.createElement("h2",{className:"subtopic"},K," Selection Sort"),n.a.createElement("p",{className:"content"},"Selection sort uses a comparison strategy. The algorithm loops through every single member trying to find the largest (this is assuming you are sorting ascending), and then when it does, it swaps the largest with the element at the furthest index of the array which is unsorted. Finally, it marks that largest as sorted and repeats. Eventually, all the members will be marked as sorted, and the array will be sorted!"),n.a.createElement("p",{className:"content"},"So how does the animation show this? The recommendation is that you start the sort animation with a small array, and with very small animation speed. That way you will see very clearly what the animation is doing. If you did that, for selection sort, ascending, you would see that each element first turns orange, showing that the selection algorithm is checking whether the element is indeed the largest. Of course at first, the largest element is the first element to be considered, but after that, for an element to be the largest, it has to be larger than the previous largest. When the animation choses an element as the largest, it turns the horizontal bar red, showing that this element might need to be swapped, and then continues considering the other members. When the animation reaches the last sorted (at the first iteration, since none of the members is marked as sorted, index of the last sorted is the length of the array), it swaps the member at position - 1, with the member that was marked as largest. Before the swap, you'll notice that the last unsorted member is also turned red, showing that it will be swapped. After the swap, the previous largest is turned green, showing that it is now sorted. Phew, that was a lot of explanation! All these are better explained visually, try it out now!"),n.a.createElement("h2",{className:"subtopic"},K," Insertion Sort"),n.a.createElement("p",{className:"content"},"Insertion Sort also uses a comparison strategy, but it's a more intuitive way of sorting an array. It is probably how you would sort your deck of cards in a game of poker. The algorithm considers every member in turn, and places each of the members in their correct position before moving to the next member. So how does the alg know where a member belongs? Easy, for every member, it checks from the position of that member to the position of the first member. If the member at the position currently being considered is larger than the member being considered, then it swaps them."),n.a.createElement("p",{className:"content"},"So how does the animation show this? Whenever the algorithm considers a member, the animation turns the member's bar orange. It also turns the bar of the member at the previous position orange and compares them. If the former member is less than the later, it turns both their bars red and swaps them, and then turns the bars back blue. The algorithm then repeats this process until it reaches the two top most members. When the alg does this for every member in the array, the array will be sorted. Check insertion sort out now and see the alg in action!"),n.a.createElement("h2",{className:"subtopic"},K," Bubble Sort"),n.a.createElement("p",{className:"content"},"Bubble sort is the last algorithm that we'll discuss that uses the comparison strategy. Bubble sort is probably the easiest alg to understand. Its approach usually seems natural for the average mind. The algorithm simply starts from the first member and compares it to the next member. If the next member is smaller, it swaps them. It then goes on to the second member and repeats. Easy huh! The algorithm iterates through the array performing the same process until the array is eventually sorted"),n.a.createElement("p",{className:"content"},"So how does the animation show this? The animation always turns two bars at a time orange. This shows that the algorithm is currently comparing the two members represented by those bars. If the members need to be swapped, the animation will first turn their bars red, swap them, then turn them back blue. Else, the animation just turns them back blue."),n.a.createElement("h2",{className:"subtopic"},K," Quick Sort"),n.a.createElement("p",{className:"content"},"Quick sort is very interesting. It is harder to wrap your mind around but it's worth the try. Quick sort is the most practical option for an efficient sorting algorithm, and is in fact, used in most of the sorting APIs that come with programming languages. Quick sort, unlike the algs we've discussed till now, uses a divide and conquer strategy. For a given array, it chooses one of the array's members as a pivot. In the quick sort implementation used in this app, it always choses the last member. It then places this chosen pivot in its correct position (if the array was sorted). So how does it know this pivot's correct position? Easy, it considers every other member apart from the pivot, and puts members smaller than the pivot above the pivot(or to the left of the pivot in the traditional vertical array visualization) and members larger than the pivot below it(or to the right of it). It then splits the array into two arrays, separated by the pivot, and repeats that process for both arrays."),n.a.createElement("p",{className:"content"},"So how does the animation show this? The animation marks the pivot by turning its bar red(showing that it will potentially be shifted to its correct position in a sorted version of the array). The animation then considers every other member but the pivot, it turns each member's bar orange as it considers it, and back blue when it's done considering it. During this process, you can be able to see the algorithm pushing all members smaller than the pivot upwards. The animation then eventually swaps the pivot with whichever member is at the pivot's correct position, and marks the pivot green. Lastly, the animation considers the members separated by the green pivot as separate arrays and repeats the process. Wow! How efficient! Try out the quick sort and watch how the alg works!"),n.a.createElement("h2",{className:"subtopic"},K," Merge Sort"),n.a.createElement("p",{className:"content"},"The last algorithm we'll discuss is the merge sort. Just like the quick sort, the merge sort also uses a divide and conquer strategy. For this app, the merge sort is probably the most visually rich of the algorithms, you can almost completely explain how it works simply by seeing it working on an array of large length and at a high animation speed. Try run the algorithm before reading the rest of this section and see if you agree!"),n.a.createElement("p",{className:"content"},"The merge sort simply splits whichever array was inputed into arrays, with at most two members each. It then sorts these arrays. Then, it merges two two membered array into one four membered array. It then sorts this newly merged array. And the process continues until eventually, it has only two arrays to merge, into a sorted version of the original array."),n.a.createElement("p",{className:"content"},"So how does the animation show this? As the animation splits the array into many two membered arrays and sorts them, the animation will look a lot like bubble sort. It will always highlight the two members of the subarrays orange, and if they need swapping, it will highlight them red, swap them and highlight them back blue. But when the animation now needs to merge the two membered arrays into four membered arrays, you will notice that the highlighted bars are now not adjacent to each other, but the sorting process (turning orange, if needs swapping turning red, turning back blue) remains the same. The algorithm repeats this until eventually, it has just two arrays to merge into one sorted array. Run the algorithm and see it do just that!"),n.a.createElement("h4",{className:"caption"},"The entirety of the purpose of this web app is to help you relate more closely and more visually to sorting algorithms. Quit memorizing pseudo code, vividly see the algorithm working in your mind!"),n.a.createElement("h2",{className:"subtopic"},K," Parting Shot"),n.a.createElement("p",{className:"content"},"This web app can still be improved vastly. That is why it is provided as an open source project. Anyone willing to improve the app in any way, from UI design, to animation, to adding extra algs, feel free to do so. The web app is written in javascript, under the ReactJS Library. For more info about how exactly to contribute, visit the github page where the repo for the app lives. See you soon!"),n.a.createElement("div",{style:{}},n.a.createElement(N.a,{trigger:"hover",speaker:B,placement:"top"},n.a.createElement("a",{style:{marginLeft:"50%"},href:"https://github.com/MbuthiaWaKihara/sorting-algorithms-visualizer"},n.a.createElement(v.a,{icon:"github",size:"3x",style:{cursor:"pointer"}}))))),R=(a(504),n.a.createElement(w.a,null,"Pause the current animation")),V=n.a.createElement(w.a,null,"Resume animation"),Q=n.a.memo((function(e){var t=e.arrayInfo,a=e.animationInfo,r=e.isAnimating,s=e.notesMode,i=e.isPaused,o=e.pause,l=e.setPause,h=e.play,m=(100-.28*(t.currentArray.length-1))/t.currentArray.length,c=t.currentArray.map((function(e,a){return n.a.createElement("div",{className:e.className,style:{width:"".concat(e.number/2>100?100:e.number/2,"%"),height:"".concat(m-.25,"%"),margin:"0 0 0 auto",marginBottom:".25%",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},key:e.indexInArray},t.currentArray.length<=30&&n.a.createElement("div",{style:{color:"#ffffff",fontWeight:"bolder",textAlign:"center",width:"50px",height:"100%",margin:"0 0 0 auto"}},e.number))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{width:"100%",height:"100%",overflow:"auto"}},s?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{width:"90%",margin:"auto"}},F)):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{width:"100%",height:"10%",display:"flex",flexDirection:"row"}},n.a.createElement("div",{style:{width:"47.5%",height:"100%"}},n.a.createElement("h4",{style:{textAlign:"center",marginBottom:"5px",color:"#397afa"}},"Array Size"),n.a.createElement(z.a,{style:{width:"90%",margin:"auto"},value:t.currentArray.length,onChange:function(e){t.setCurrentArray(t.createNewArray(e)),2!==i&&1!==i||l(0)},min:5,max:120,tooltip:!1,barClassName:"sliderbar",disabled:r})),n.a.createElement("div",{style:{width:"5%",height:"100%"}},n.a.createElement(n.a.Fragment,null,2===i&&n.a.createElement("div",{onClick:h},n.a.createElement(N.a,{trigger:"hover",speaker:V,placement:"top"},n.a.createElement(v.a,{icon:"play",size:"4x",style:{cursor:"pointer"}}))),1===i&&n.a.createElement("div",{onClick:o},n.a.createElement(N.a,{trigger:"hover",speaker:R,placement:"top"},n.a.createElement(v.a,{icon:"pause",size:"4x",style:{cursor:"pointer"}}))))),n.a.createElement("div",{style:{width:"47.5%",height:"100%"}},n.a.createElement("h4",{style:{textAlign:"center",marginBottom:"5px",color:"#397afa"}},"Animation Speed"),n.a.createElement(z.a,{style:{width:"90%",margin:"auto"},value:0-a.animationMilliseconds,onChange:function(e){return a.setAnimationMilliseconds(0-e)},min:-400,max:-10,tooltip:!1,barClassName:"sliderbar",disabled:r}))),n.a.createElement("div",{style:{width:"98%",height:"90%",margin:"0 0 0 auto"}},c))))})),D=function(e){for(var t=[],a=0;a<e;a++)t[a]={number:Math.floor(196*Math.random()+5),indexInArray:a,className:"initial"};return t},P=function(){var e,t=Math.floor(5*Math.random()+1);1===t&&(e="Insertion Sort"),2===t&&(e="Selection Sort"),3===t&&(e="Bubble Sort"),4===t&&(e="Merge Sort"),5===t&&(e="Quick Sort");var a,r=Math.floor(2*Math.random()+1);return 1===r&&(a="Ascending"),2===r&&(a="Descending"),{algorithm:e,order:a}},q=n.a.memo((function(){var e=Object(r.useRef)(),t=Object(r.useRef)(0),a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],w=s[1],N=Object(r.useState)((function(){return D(Math.floor(115*Math.random()+5))})),v=Object(l.a)(N,2),S=v[0],O=v[1],J=Object(r.useState)(100),k=Object(l.a)(J,2),A=k[0],x=k[1],z=Object(r.useState)(P),T=Object(l.a)(z,2),j=T[0],M=T[1],C=Object(r.useState)("Visualizing ".concat(j.algorithm," | ").concat(j.order)),W=Object(l.a)(C,2),K=W[0],B=W[1],F=Object(r.useState)(0),R=Object(l.a)(F,2),V=R[0],q=R[1],H=Object(r.useState)(!1),L=Object(l.a)(H,2),G=L[0],U=L[1],X=Object(r.useState)([]),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],_=Object(r.useState)(0),ee=Object(l.a)(_,2),te=ee[0],ae=ee[1],re=function(){var e,t="Ascending"!==j.order;"Insertion Sort"===j.algorithm&&(e=function(e,t){for(var a,r=t,n=[],s=0;s<r.length;s++)for(var i=s;i>0;i--)r[i].className="inComparison",r[i-1].className="inComparison",n.push(JSON.parse(JSON.stringify(r))),e?r[i].number>r[i-1].number&&(r[i].className="wronglyOrdered",r[i-1].className="wronglyOrdered",n.push(JSON.parse(JSON.stringify(r))),a=r[i],r[i]=r[i-1],r[i-1]=a,n.push(JSON.parse(JSON.stringify(r)))):r[i].number<r[i-1].number&&(r[i].className="wronglyOrdered",r[i-1].className="wronglyOrdered",n.push(JSON.parse(JSON.stringify(r))),a=r[i],r[i]=r[i-1],r[i-1]=a,n.push(JSON.parse(JSON.stringify(r)))),r[i].className="initial",r[i-1].className="initial",n.push(JSON.parse(JSON.stringify(r)));return n}(t,JSON.parse(JSON.stringify(S)))),"Selection Sort"===j.algorithm&&(e=function(e,t){for(var a,r,n=t.length-1,s=t,i=[],o=null;n>0;){r=e?1/0:-1/0;for(var l=0;l<=n;l++)s[l].className="inComparison",i.push(JSON.parse(JSON.stringify(s))),e?s[l].number<=r&&(!o&&0!==o||o===n+1||(s[o].className="initial",i.push(JSON.parse(JSON.stringify(s)))),o=l,r=s[l].number,s[l].className="wronglyOrdered",i.push(JSON.parse(JSON.stringify(s)))):s[l].number>=r&&(!o&&0!==o||o===n+1||(s[o].className="initial",i.push(JSON.parse(JSON.stringify(s)))),o=l,r=s[l].number,s[l].className="wronglyOrdered",i.push(JSON.parse(JSON.stringify(s)))),"wronglyOrdered"!==s[l].className&&(s[l].className="initial",i.push(JSON.parse(JSON.stringify(s))));o!==n&&(s[n].className="wronglyOrdered",i.push(JSON.parse(JSON.stringify(s)))),a=s[n].number,s[n].number=s[o].number,s[o].number=a,i.push(JSON.parse(JSON.stringify(s))),s[n].className="sorted",i.push(JSON.parse(JSON.stringify(s))),n--}return i}(t,JSON.parse(JSON.stringify(S)))),"Bubble Sort"===j.algorithm&&(e=function(e,t){for(var a,r,n=t,s=[];;){a=!1;for(var i=0;i<t.length-1;i++)n[i].className="inComparison",n[i+1].className="inComparison",s.push(JSON.parse(JSON.stringify(n))),e?t[i].number<t[i+1].number&&(n[i].className="wronglyOrdered",n[i+1].className="wronglyOrdered",s.push(JSON.parse(JSON.stringify(n))),r=n[i].number,n[i].number=n[i+1].number,n[i+1].number=r,a=!0,s.push(JSON.parse(JSON.stringify(n)))):t[i].number>t[i+1].number&&(n[i].className="wronglyOrdered",n[i+1].className="wronglyOrdered",s.push(JSON.parse(JSON.stringify(n))),r=n[i].number,n[i].number=n[i+1].number,n[i+1].number=r,a=!0,s.push(JSON.parse(JSON.stringify(n)))),"initial"!==n[i].className&&(n[i].className="initial",n[i+1].className="initial",s.push(JSON.parse(JSON.stringify(n))));if(!a)break}return s}(t,JSON.parse(JSON.stringify(S)))),"Quick Sort"===j.algorithm&&(e=function(e,t,a,r){var n=function(t,a,r){var n=[],s=t[r].number;t[r].className="wronglyOrdered",n.push(JSON.parse(JSON.stringify(t)));for(var i,o=a-1,l=a;l<=r-1;l++)t[l].className="inComparison",n.push(JSON.parse(JSON.stringify(t))),e?t[l].number>=s&&(i=t[++o],t[o]=t[l],t[l]=i,n.push(JSON.parse(JSON.stringify(t))),t[o].className="initial",t[l].className="initial",n.push(JSON.parse(JSON.stringify(t)))):t[l].number<=s&&(i=t[++o],t[o]=t[l],t[l]=i,n.push(JSON.parse(JSON.stringify(t))),t[o].className="initial",t[l].className="initial",n.push(JSON.parse(JSON.stringify(t)))),t[l].className="initial",n.push(JSON.parse(JSON.stringify(t)));return t[o+1].className="wronglyOrdered",n.push(JSON.parse(JSON.stringify(t))),i=t[o+1],t[o+1]=t[r],t[r]=i,n.push(JSON.parse(JSON.stringify(t))),t[r].className="initial",t[o+1].className="sorted",n.push(JSON.parse(JSON.stringify(t))),[o+1,n]},s=[],i=[],o=-1;for(i[++o]=a,i[++o]=r;o>=0;){r=i[o--];var h=n(t,a=i[o--],r),m=Object(l.a)(h,2),c=m[0],u=m[1];s=s.concat(u),c-1>a&&(i[++o]=a,i[++o]=c-1),c+1<r&&(i[++o]=c+1,i[++o]=r)}return s}(t,JSON.parse(JSON.stringify(S)),0,S.length-1)),"Merge Sort"===j.algorithm&&(e=function(e,t,a){var r,n,s=function(t,a,r,n){var s,i,o,l,h=r-a+1,m=n-r,c=[],u=[],g=[];for(s=0;s<h;s++)u[s]=t[a+s];for(i=0;i<m;i++)g[i]=t[r+1+i];for(s=0,i=0,o=a;s<h&&i<m;){for(var d=void 0,p=void 0,y=u[s].indexInArray,b=g[i].indexInArray,f=0;f<t.length;f++)y===t[f].indexInArray&&(d=f);for(var w=0;w<t.length;w++)b===t[w].indexInArray&&(p=w);t[d].className="inComparison",t[p].className="inComparison",c.push(JSON.parse(JSON.stringify(t))),e?u[s].number>=g[i].number?(t[d].className="wronglyOrdered",t[o].className="wronglyOrdered",c.push(JSON.parse(JSON.stringify(t))),l=t[o],t[o]=t[d],t[d]=l,s++,c.push(JSON.parse(JSON.stringify(t))),t[d].className="initial",t[o].className="initial",c.push(JSON.parse(JSON.stringify(t)))):(t[p].className="wronglyOrdered",t[o].className="wronglyOrdered",c.push(JSON.parse(JSON.stringify(t))),l=t[o],t[o]=t[p],t[p]=l,i++,c.push(JSON.parse(JSON.stringify(t))),t[p].className="initial",t[o].className="initial",c.push(JSON.parse(JSON.stringify(t)))):u[s].number<=g[i].number?(t[d].className="wronglyOrdered",t[o].className="wronglyOrdered",c.push(JSON.parse(JSON.stringify(t))),l=t[o],t[o]=t[d],t[d]=l,s++,c.push(JSON.parse(JSON.stringify(t))),t[d].className="initial",t[o].className="initial",c.push(JSON.parse(JSON.stringify(t)))):(t[p].className="wronglyOrdered",t[o].className="wronglyOrdered",c.push(JSON.parse(JSON.stringify(t))),l=t[o],t[o]=t[p],t[p]=l,i++,c.push(JSON.parse(JSON.stringify(t))),t[p].className="initial",t[o].className="initial",c.push(JSON.parse(JSON.stringify(t)))),o++,t[d].className="initial",t[o].className="initial",t[p].className="initial",c.push(JSON.parse(JSON.stringify(t)))}for(var N=0;N<t.length;N++)"initial"!==t[N].className&&(t[N].className="initial");for(;s<h;)t[o]=u[s],s++,o++;for(;i<m;)t[o]=g[i],i++,o++;return c.push(JSON.parse(JSON.stringify(t))),c},i=[];for(r=1;r<=a-1;r*=2)for(n=0;n<a-1;n+=2*r){var o=s(t,n,Math.min(n+r-1,a-1),Math.min(n+2*r-1,a-1));i=i.concat(o)}return i}(t,JSON.parse(JSON.stringify(S)),S.length));for(var a=e[e.length-1],r=0;r<a.length;r++)a[r].className="sorted";e.push(JSON.parse(JSON.stringify(a))),$(e),q(e.length),ae(1)};return Object(r.useEffect)((function(){i&&Z.length>0&&2!==te&&(e.current=setInterval((function(){O((function(e){return Z[t.current]})),t.current+=1}),A))}),[Z,te]),Object(r.useEffect)((function(){i&&t.current===V&&(t.current=0,clearInterval(e.current),q(0),w(!1),$([]),ae(0),h.a.success("That's ".concat(j.algorithm," for you!"),2e3))})),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{style:d},n.a.createElement(c.a,{style:p},n.a.createElement(I,{response:function(e){"2"===e&&O(D(S.length)),"3-1"===e&&(M((function(e){return Object(o.a)({},e,{order:"Ascending"})})),B("Visualizing ".concat(j.algorithm," | Ascending"))),"3-2"===e&&(M((function(e){return Object(o.a)({},e,{order:"Descending"})})),B("Visualizing ".concat(j.algorithm," | Descending"))),"4-1"===e&&(M((function(e){return Object(o.a)({},e,{algorithm:"Insertion Sort"})})),B("Visualizing Insertion Sort | ".concat(j.order," "))),"4-2"===e&&(M((function(e){return Object(o.a)({},e,{algorithm:"Selection Sort"})})),B("Visualizing Selection Sort | ".concat(j.order," "))),"4-3"===e&&(M((function(e){return Object(o.a)({},e,{algorithm:"Bubble Sort"})})),B("Visualizing Bubble Sort | ".concat(j.order," "))),"4-4"===e&&(M((function(e){return Object(o.a)({},e,{algorithm:"Quick Sort"})})),B("Visualizing Quick Sort | ".concat(j.order," "))),"4-5"===e&&(M((function(e){return Object(o.a)({},e,{algorithm:"Merge Sort"})})),B("Visualizing Merge Sort | ".concat(j.order," "))),"5"===e&&(U(!0),B("Notes")),"1"===e&&(h.a.info("Alright let's do this!",2e3),w(!0),re())},isAnimating:i,notesMode:G,animationMilliseconds:A,pause:te})),n.a.createElement(m.a,{style:y},n.a.createElement(u.a,{style:b},n.a.createElement(E,{message:K,notesMode:G,closeNotesMode:function(){U(!1),B("Visualizing ".concat(j.algorithm," | ").concat(j.order))}})),n.a.createElement(g.a,{style:f},n.a.createElement(Q,{arrayInfo:{currentArray:S,setCurrentArray:O,createNewArray:D},animationInfo:{animationMilliseconds:A,setAnimationMilliseconds:x},isAnimating:i,notesMode:G,isPaused:te,pause:function(){clearInterval(e.current),w(!1),ae(2)},setPause:ae,play:function(){ae(1),w(!0)}})))))})),H=document.querySelector("#root");i.a.render(n.a.createElement(q,null),H)}},[[267,1,2]]]);
//# sourceMappingURL=main.20b5fd6a.chunk.js.map