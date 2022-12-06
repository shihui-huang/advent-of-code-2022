/**
 *
 * @param {string} data
 * @returns number
 */
export function Day01_Calorie_Counting_Part2(data) {
  let Top3TotalCalories = [],
    currentTotalCalories = 0
  let calories = data.split('\n\n')

  for (let i = 0; i < calories.length; i++) {
    let calorieArray = calories[i].split('\n') // calorieArray = [1000,2000,3000]
    for (let j = 0; j < calorieArray.length; j++) {
      currentTotalCalories += Number.parseInt(calorieArray[j])
    }
    Top3TotalCalories.push(currentTotalCalories)
    currentTotalCalories = 0
  }

  Top3TotalCalories.sort((a, b) => b - a)
  return Top3TotalCalories[0] + Top3TotalCalories[1] + Top3TotalCalories[2]
}
