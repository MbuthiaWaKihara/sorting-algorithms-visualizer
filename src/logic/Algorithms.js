export const bubbleSort = (decreasing, rawArray) => {
    let swapped;
    let holder;
    let copyArray = rawArray;
    let frames = []; // this will hold all frames from the sorting process
    while(true){
        swapped = false;
        for(let counter = 0; counter < rawArray.length - 1; counter++){ 
            copyArray[counter].className = "inComparison";
            copyArray[counter + 1].className = "inComparison";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
            if(decreasing){
                if(rawArray[counter].number < rawArray[counter + 1].number){
                    copyArray[counter].className = "wronglyOrdered";
                    copyArray[counter + 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[counter].number;
                    copyArray[counter].number = copyArray[counter + 1].number;
                    copyArray[counter + 1].number = holder;
                    swapped = true;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }

            }else{
                if(rawArray[counter].number > rawArray[counter + 1].number){
                    copyArray[counter].className = "wronglyOrdered";
                    copyArray[counter + 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[counter].number;
                    copyArray[counter].number = copyArray[counter + 1].number;
                    copyArray[counter + 1].number = holder;
                    swapped = true;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }
            }

            if(copyArray[counter].className !== "initial"){
                copyArray[counter].className = "initial";
                copyArray[counter + 1].className = "initial";
                frames.push(JSON.parse(JSON.stringify(copyArray)));
            }
        }

        if(!swapped) break;
    }

    return frames;
}

export const selectionSort = (decreasing, rawArray) => {
    let selectionLimit = rawArray.length - 1;
    let holder;
    let copyArray = rawArray;
    let frames = [];
    let criteria;
    let indexOfCriteria = null;

    while(selectionLimit > 0) {
        criteria  = decreasing ? Infinity : -Infinity;
        
        //find the largest number;
        for(let counter = 0; counter <= selectionLimit; counter++) {
            copyArray[counter].className = "inComparison";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
            if(decreasing){
                if(copyArray[counter].number <= criteria) {
                    //remove previous smallest
                    if((indexOfCriteria || indexOfCriteria === 0) && indexOfCriteria !== selectionLimit + 1){
                       copyArray[indexOfCriteria].className = "initial";
                       frames.push(JSON.parse(JSON.stringify(copyArray)));
                   }
   
                   indexOfCriteria = counter;
                   criteria = copyArray[counter].number;
                   //target this one as smallest
                   copyArray[counter].className = "wronglyOrdered";
                   frames.push(JSON.parse(JSON.stringify(copyArray)));  
               }
            }else{
                
                if(copyArray[counter].number >= criteria) {
                    //remove previous largest
                    if((indexOfCriteria || indexOfCriteria === 0) && indexOfCriteria !== selectionLimit + 1){
                       copyArray[indexOfCriteria].className = "initial";
                       frames.push(JSON.parse(JSON.stringify(copyArray)));
                   }
   
                   indexOfCriteria = counter;
                   criteria = copyArray[counter].number;
                   //target this one as largest
                   copyArray[counter].className = "wronglyOrdered";
                   frames.push(JSON.parse(JSON.stringify(copyArray)));  
               }
            }

            if(copyArray[counter].className !== "wronglyOrdered"){
                copyArray[counter].className = "initial";
                frames.push(JSON.parse(JSON.stringify(copyArray)));
            }

        }
        
        if(indexOfCriteria !== selectionLimit){
            copyArray[selectionLimit].className = "wronglyOrdered";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
        }

        //swap the criteria to the index of current limit
        holder = copyArray[selectionLimit].number;
        copyArray[selectionLimit].number = copyArray[indexOfCriteria].number;
        copyArray[indexOfCriteria].number = holder;
        frames.push(JSON.parse(JSON.stringify(copyArray)));

        copyArray[selectionLimit].className = "sorted";
        frames.push(JSON.parse(JSON.stringify(copyArray)));
        
        selectionLimit--;
    }

    return frames;
}

export const insertionSort = (decreasing, rawArray) => {
    let holder;
    let copyArray = rawArray;
    let frames = [];
    
    for(let counter = 0; counter < copyArray.length; counter++) {
        for(let compare = counter; compare > 0; compare--) {
            copyArray[compare].className = "inComparison";
            copyArray[compare - 1].className = "inComparison";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
            
            if(decreasing){
                if(copyArray[compare].number > copyArray[compare - 1].number) {
                    copyArray[compare].className = "wronglyOrdered";
                    copyArray[compare - 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[compare];
                    copyArray[compare] = copyArray[compare - 1];
                    copyArray[compare - 1] = holder;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }

            }else{
                if(copyArray[compare].number < copyArray[compare - 1].number) {
                    copyArray[compare].className = "wronglyOrdered";
                    copyArray[compare - 1].className = "wronglyOrdered";
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
    
                    holder = copyArray[compare];
                    copyArray[compare] = copyArray[compare - 1];
                    copyArray[compare - 1] = holder;
                    frames.push(JSON.parse(JSON.stringify(copyArray)));
                }
            }

            copyArray[compare].className = "initial";
            copyArray[compare - 1].className = "initial";
            frames.push(JSON.parse(JSON.stringify(copyArray)));
        }
    }
    
    return frames;
    
}

export const quickSort = (decreasing, rawArray, start, end) => {
    const partition = (rawArray, start, end) => {
        
        let subframes = [];
        let pivot = rawArray[end].number;
    
        rawArray[end].className = "wronglyOrdered";
        subframes.push(JSON.parse(JSON.stringify(rawArray)));

        let pivotIndex = start - 1; // this value will be used to determine the sorted position of the pivot
        let holder;
        
        for(let counter = start; counter <= end - 1; counter++){
            rawArray[counter].className = "inComparison";
            subframes.push(JSON.parse(JSON.stringify(rawArray)));
            //if the current element is smaller than or equal to the pivot, 
            if(decreasing){
                if(rawArray[counter].number >= pivot){
                    pivotIndex++;
    
                    //swap the position of the pivot index with that of the counter
                    holder = rawArray[pivotIndex];
                    rawArray[pivotIndex] = rawArray[counter];
                    rawArray[counter] = holder;
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                    rawArray[pivotIndex].className = "initial";
                    rawArray[counter].className = "initial";
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                }

            }else{
                if(rawArray[counter].number <= pivot){
                    pivotIndex++;
    
                    //swap the position of the pivot index with that of the counter
                    holder = rawArray[pivotIndex];
                    rawArray[pivotIndex] = rawArray[counter];
                    rawArray[counter] = holder;
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                    rawArray[pivotIndex].className = "initial";
                    rawArray[counter].className = "initial";
                    subframes.push(JSON.parse(JSON.stringify(rawArray)));
    
                }
            }

            rawArray[counter].className = "initial";
            subframes.push(JSON.parse(JSON.stringify(rawArray)));

        }

        rawArray[pivotIndex + 1].className = "wronglyOrdered";
        subframes.push(JSON.parse(JSON.stringify(rawArray)));
        
        //swap the end of the array with whatever is on the pivot index
        holder = rawArray[pivotIndex + 1];
        rawArray[pivotIndex + 1] = rawArray[end];
        rawArray[end] = holder;
        subframes.push(JSON.parse(JSON.stringify(rawArray)));


        rawArray[end].className = "initial";
        rawArray[pivotIndex + 1].className = "sorted";
        subframes.push(JSON.parse(JSON.stringify(rawArray)));


        return [pivotIndex + 1, subframes];
    }
    
    let frames = [];
    let stack = [];
    let top = - 1;
    stack[++top] = start;
    stack[++top] = end;

    while(top >= 0){
        end = stack[top--];
        start = stack[top--];

        let [positionOfNextPivot, subframes] = partition(rawArray, start, end);
        frames = frames.concat(subframes);

        if(positionOfNextPivot - 1 > start){
            stack[++top] = start;
            stack[++top] = positionOfNextPivot - 1;
        }

        if(positionOfNextPivot + 1 < end){
            stack[++top] = positionOfNextPivot + 1;
            stack[++top] = end;
        }
    }
    
    return frames;
}

export const mergeSort = (decreasing, arr,  n) =>
    { 
          
        const  merge = (arr, l, m, r) => 
            { 
                let i, j, k; 
                let n1 = m - l + 1; 
                let n2 = r - m; 
                let subframes = [];
                
                /* create temp arrays */
                let L = []; 
                let R = []; 
                
                /* Copy data to temp arrays L[] 
                and R[] */
                for (i = 0; i < n1; i++) 
                    L[i] = arr[l + i]; 

                for (j = 0; j < n2; j++) 
                    R[j] = arr[m + 1+ j]; 
                
                /* Merge the temp arrays back into 
                arr[l..r]*/
                i = 0; 
                j = 0; 
                k = l; 
                let holder;
                while (i < n1 && j < n2) 
                { 

                    //find index of L[i] and index of R[j] in raw
                    let positionL;
                    let positionR;
                    let indexInRawL = L[i].indexInArray;
                    let indexInRawR = R[j].indexInArray;

                    //find L[i] position in the raw array;
                    for(let counter = 0; counter < arr.length; counter++){
                        if(indexInRawL === arr[counter].indexInArray) positionL = counter;
                    }
                    //find L[i] position in the raw array;
                    for(let counter = 0; counter < arr.length; counter++){
                        if(indexInRawR === arr[counter].indexInArray) positionR = counter;
                    }

                    arr[positionL].className = "inComparison";
                    arr[positionR].className = "inComparison";
                    subframes.push(JSON.parse(JSON.stringify(arr)));

                    if(decreasing){

                        if (L[i].number >= R[j].number) 
                        { 
                            arr[positionL].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                            
                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionL];
                            arr[positionL] = holder; 
                            i++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionL].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                        } 
                        else
                        { 
                            arr[positionR].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionR];
                            arr[positionR] = holder; 
                            j++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionR].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr))); 
                        }

                    }else{
                        if (L[i].number <= R[j].number) 
                        { 
                            arr[positionL].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                            
                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionL];
                            arr[positionL] = holder; 
                            i++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionL].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                        } 
                        else
                        { 
                            arr[positionR].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionR];
                            arr[positionR] = holder; 
                            j++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionR].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr))); 
                        } 
                    }


                    k++;
                    arr[positionL].className = "initial";
                    arr[k].className = "initial";
                    arr[positionR].className = "initial";
                    subframes.push(JSON.parse(JSON.stringify(arr)));  
                } 

                for(let counter = 0; counter < arr.length; counter++){
                    if(arr[counter].className !== "initial") arr[counter].className = "initial";
                }
                
                /* Copy the remaining elements of  
                L[], if there are any */
                while (i < n1) 
                { 
                    arr[k] = L[i]; 
                    i++; 
                    k++; 
                } 
                
                /* Copy the remaining elements of 
                R[], if there are any */
                while (j < n2) 
                { 
                    arr[k] = R[j];
                    
                    j++; 
                    k++; 
                } 
                subframes.push(JSON.parse(JSON.stringify(arr))); 

                return subframes;
            }
        let frames = []; 
        // For current size of subarrays to 
        // be merged curr_size varies from  
        // 1 to n/2 
        let curr_size;  
                      
        // For picking starting index of  
        // left subarray to be merged 
        let left_start; 
                          
          
        // Merge subarrays in bottom up  
        // manner. First merge subarrays  
        // of size 1 to create sorted  
        // subarrays of size 2, then merge 
        // subarrays of size 2 to create  
        // sorted subarrays of size 4, and 
        // so on. 
        for (curr_size = 1; curr_size <= n-1;  
                      curr_size = 2*curr_size) 
        { 
              
            // Pick starting point of different 
            // subarrays of current size 
            for (left_start = 0; left_start < n-1; 
                        left_start += 2*curr_size) 
            { 
                // Find ending point of left  
                // subarray. mid+1 is starting  
                // point of right 
                let mid = Math.min(left_start + curr_size - 1, n-1); 
          
                let right_end = Math.min(left_start  
                             + 2*curr_size - 1, n-1); 
          
                // Merge Subarrays arr[left_start...mid] 
                // & arr[mid+1...right_end] 
                let subframes = merge(arr, left_start, mid, right_end); 
                frames = frames.concat(subframes);
            } 
        } 

        return frames;
} 
