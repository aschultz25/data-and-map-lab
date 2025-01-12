let cities = []
let maxPopulation = 0
let minPopulation = -Infinity
let avgPopulation = 0

function setup() {
  createCanvas(600, 600);
  let fakeCityNames = [
    "Lyonesse", "Troicinet", "Dascinet", "North Ulfland", "South Ulfland", "Skaghane", "Pomperol", "Ys", "Godelia", "Oaldes"
  ]
  
  for (let i = 0; i < fakeCityNames.length; i++) {
    let population = int(randomGaussian(5000,2000))
    population = max(1000, population)
    cities.push({ name: fakeCityNames[i], population })
 
  if (population > maxPopulation) maxPopulation = population
  if (population < minPopulation) minPopulation = population
  avgPopulation += population
}

avgPopulation
    
    
    let h = randomGaussian(39.5, 4)
    let l = randomGaussian(21.7, 6.2)
    
    // it is possible for the low to be greater than
    //   the high. This flips it.
    if( h < l ) {
      let temp = h
      h = l
      l = temp
    }
    
    if( h > highestTemp ) {
      highestTemp = h
    }
    
    if( l < lowestTemp ) {
      lowestTemp = l
    }
    
    avgHighTemp += h
    avgLowTemp += l
    
    temps.push({h,l})
  }
  avgHighTemp /= temps.length
  avgLowTemp /= temps.length
}

function draw() {
  let dx = width/(temps.length+2)
  // line(0,height/2,width,height/2)
  for( let i = 0; i < temps.length; i++ ) {
    
    stroke("red")
    const yAvgHigh = map(avgHighTemp,lowestTemp,highestTemp,0.8*height,0.2*height)
    line(0,yAvgHigh, width,yAvgHigh)
    const yAvgLow = map(avgLowTemp,lowestTemp,highestTemp,0.8*height,0.2*height)
    stroke("blue")
    line(0,yAvgLow, width,yAvgLow)
    const x = (i+1)*dx
    const yHigh = map(temps[i].h,lowestTemp,highestTemp,0.8*height,0.2*height)
    const yLow = map(temps[i].l,lowestTemp,highestTemp,0.8*height,0.2*height)
    stroke("black")
    line(x,yHigh,x,yLow)
    noStroke()
    fill("black")
    if( temps[i].h === highestTemp ) {
      text(int(temps[i].h),x,yHigh-10)
    }
    fill("red")
    circle(x,yHigh,10)
    fill("black")
    if( temps[i].l === lowestTemp ) {
      text(int(temps[i].l),x,yLow+15)
    }    
    fill("blue")
    circle(x,yLow,10)
  }
}