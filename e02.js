

funciton swap(arr, first_Index, second_Index){
    let temp = arr[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = temp;



const insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
  }
  console.log(bubble_Sort([8, 0, 3, 7, -1, 6, 2])); // -1, 0, 2, 3, 6, 7, 8) // 
