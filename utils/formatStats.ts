export function formatStats(stat:number, games:number):number {
  //the stat in API free trial comes Scrambled then can not be exact
  return Number((stat/ games).toFixed(1)) || 0
}
export function formatPercentages(made:number, attempted:number):number{
  return Number(((made * 100) / attempted).toFixed(1)) || 0
}