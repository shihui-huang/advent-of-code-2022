/**
 *
 * @param {string} data
 * @returns number
 */
export function Day01_Calorie_Counting_Part1(data) {
  let maxTotalCalories = 0,
    currentTotalCalories = 0
  let calories = data.split('\n\n')

  for (let i = 0; i < calories.length; i++) {
    let calorieArray = calories[i].split('\n') // calorieArray = [1000,2000,3000]
    for (let j = 0; j < calorieArray.length; j++) {
      currentTotalCalories += Number.parseInt(calorieArray[j])
    }

    maxTotalCalories = Math.max(maxTotalCalories, currentTotalCalories)
    currentTotalCalories = 0
  }
  return maxTotalCalories
}
