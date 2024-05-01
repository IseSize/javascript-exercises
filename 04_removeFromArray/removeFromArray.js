const removeFromArray = function(arrayToUpdate, ...toRemove) {  
    let updatedArray = arrayToUpdate.filter((elem) => {
        for(const elemToRemove of toRemove) {
            if(elem === elemToRemove) {
                return false;
            }
        }
        return true;
    });
    return updatedArray;
};


// Do not edit below this line
module.exports = removeFromArray;

    

// First idea, but increase complexity 
    // const removeFromArray = function(arrayToUpdate, ...toRemove) { 
    //     for (const elemToRemove of toRemove) {
    //         let arrayLength = arrayToUpdate.length;
    //         for(let i = 0; i < arrayLength; i++ ){
    //             if(arrayToUpdate[i] === elemToRemove) {
    //                 arrayToUpdate.splice(i, 1);
    //                  arrayLength = arrayToUpdate.length; //to not iterate over the new length
    //                  i--; //neutralize index offset due to remove
    //             }
    //         }
    //     }
    //     return arrayToUpdate;
    // };