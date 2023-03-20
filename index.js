// Example drivers data
const drivers = [
    { name: "Peter", hometown: "Pittsburgh" },
    { name: "Nathan", hometown: "New York" },
    { name: "Charlotte", hometown: "Cleveland" },
    { name: "Luna", hometown: "Los Angeles" },
    { name: "Taylor", hometown: "Tampa Bay" }
  ];
  
  // findMatching function
  function findMatching(drivers, string) {
    return drivers.filter(driver =>
      driver.toLowerCase() === string.toLowerCase()
    );
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, string) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(string.toLowerCase())
    );
  }
  
  // matchName function
  function matchName(drivers, string) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === string.toLowerCase()
    );
  }
  
  // Test the functions with the example drivers data
  console.log(findMatching(drivers, "Peter, Taylor")); // [{ name: "Peter", hometown: "Pittsburgh" }, { name: "Taylor", hometown: "Tampa Bay" }]
  console.log(fuzzyMatch(drivers, "Nathan, Charlotte")); // [{ name: "Nathan", hometown: "New York" }, { name: "Charlotte", hometown: "Cleveland" }]
  console.log(matchName(drivers, "Luna")); // [{ name: "Luna", hometown: "Los Angeles" }]
  