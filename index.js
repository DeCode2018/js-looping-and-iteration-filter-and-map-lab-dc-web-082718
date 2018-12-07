// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  let driverArray = []
    drivers.filter(driver =>{

      driver.revenue >revenue? driverArray.push({name: driver.name, revenue: driver.revenue }):null
    })
    return driverArray
}

function driverNamesWithRevenueOver(drivers, revenue){
  let driverArray = []
    drivers.filter(driver =>{

      driver.revenue >revenue? driverArray.push(driver.name):null
    })
    return driverArray
}

function exactMatch(drivers,argument){
  console.log(argument)
  let driversArray = []
  drivers.filter(driver=> {
    (driver.revenue === argument.revenue || driver.name === argument.name?
    driversArray.push({name: driver.name, revenue: driver.revenue}):null
  )})

  return driversArray

}

function exactMatchToList(drivers,argument){
  console.log(argument)
  let driversArray = []
  drivers.filter(driver=> {
    (driver.revenue === argument.revenue || driver.name === argument.name?
    driversArray.push(driver.name):null
  )})

  return driversArray

}
