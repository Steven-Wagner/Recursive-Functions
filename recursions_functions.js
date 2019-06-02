const countSheep = function(numOfSheep) {
    if(numOfSheep === 0){
        console.log('All sheep jumped over the fence');
        return
    }
    console.log('another sheep jumps over the fence');
    numOfSheep -= 1;
    return countSheep(numOfSheep)
};

countSheep(3);

const powerCalculatorRec = function(base, exp) {
  if (exp === 1) {
    return base
  }
  return powerCalculatorRec(base*base, exp-1)
}

powerCalculatorRec(2, 3);

function reverseString (str) {
  if (str === "") {
    return "";
  } 
  return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString('test');

const triangularNumber = function(nSide) {
  if (nSide === 1) {
    return nSide
  }
  return triangularNumber(nSide-1) + nSide;
}

triangularNumber(5);

const stringSplitter = function(string, split) {
  if(string === '') {
    return string;
  }
  if (string[0] === split) {
    return stringSplitter(string.substr(1), split);
  }
  else {
    return string[0] + stringSplitter(string.substr(1), split)
  }
}

stringSplitter('02/20/2020', '/');

const fibonacci = function(fibNumber) {
  if(fibNumber <= 1) {
    return 1
  }
  return fibonacci(fibNumber-1) + fibonacci(fibNumber-2)
}

fibonacci(4);

const factoral = function(num) {
  if(num === 1) {
    return num
  }
  return factoral(num-1) * num
}

factoral(5);

const mazeSolution = function(maze, xCord=0, yCord=0, direction=[]) {
  if(maze[yCord][xCord] === 'e') {
    return direction.join('');
  }
  if(maze[yCord][xCord+1] != undefined) {
    if(maze[yCord][xCord+1] != '*') {
      maze[yCord][xCord] = undefined;
      direction.push('R');
      maze[yCord][xCord+1] = undefined;
      // mazeSolution(maze, xCord, yCord, direction);
      return mazeSolution(maze, xCord+1, yCord, direction)
    }
  }
  if(maze[yCord+1] !== undefined) {
    if(maze[yCord+1][xCord] != undefined) {
      if(maze[yCord+1][xCord] !== '*') {
        maze[yCord][xCord] = undefined
        direction.push('D')
        return mazeSolution(maze, xCord, yCord+1, direction)
      }
    }
  }
  if(maze[xCord-1] !== undefined) {
    if(maze[yCord][xCord-1] != undefined) {
      if(maze[yCord][xCord-1] !== '*') {
        maze[yCord][xCord] = undefined
        direction.push('L')
        return mazeSolution(maze, xCord-1, yCord, direction)
      }
    }
  }
  if(maze[yCord-1] !== undefined) {
    if(maze[yCord-1][xCord] != undefined) {
      if(maze[yCord-1][xCord] !== '*') {
        maze[yCord][xCord] = undefined
        direction.push('U')
        return mazeSolution(maze, xCord, yCord-1, direction)
      }
    }
  }
  // return '';
}

let mySmallMaze =[
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = 
[
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

mazeSolution(maze);

function anagrams(start, string) {

    if ( string.length == 1 ) {
        return [ start + string ];
    } else {

        const returnResult = [];
        for (let i=0; i < string.length; i++) {
            const result = anagrams (string[i], string.substr(0, i) + string.substr(i+1));
            for (let j=0; j<result.length; j++) {
                returnResult.push(start + result[j]);
            }
        }

        return returnResult;
    }
}

anagrams('','east');

const orgObject = 
  {'Zuckerberg':
    {'Schroepfer':
        {'Bosworth':
            {'Steve': '',
            'Kyle': '',
            'Andra': ''
            }
        ,
        'Zhao':
            {'Richie': '',
            'Sofia': '',
            'Jen': ''}
        }
    ,
    'Schrage':
        {'VanDyck':
            {'Sabrina': '',
            'Michelle': '',
            'Josh': ''}
        ,
        'Swain':
            {'Blanch': '',
            'Tom': '',
            'Joe': ''}
        }
    ,
    'Sandberg':
        {'Goler':
            {'Eddie': '',
            'Julie': '',
            'Annie': ''}
        ,
       'Hernandez':
            {'Rowi': '',
            'Inga': '',
            'Morgan': ''}
       ,
       'Moissinac':
            {'Amy': '',
            'Chuck': '',
            'Vinni': ''}
       ,
       'Kelley':
            {'Eric': '',
            'Ana': '',
            'Wes': ''}
       }
    }
  }

const orgChart = function(orgObject, levelsDeep = 0) {
  levelsDeep += 1;
  for (let [key, value] of Object.entries(orgObject)) {
    let tabSpace = '';
    for (let i=1; i<levelsDeep; i++) {
      tabSpace += '   ';
    }
    console.log(tabSpace + key)
    orgChart(value, levelsDeep)
  }
}

orgChart(orgObject);

const numberToBinary = function(num) {
  if (num === 0) {
    return 0
  }
  return (num % 2 + 10 * numberToBinary(Math.floor(num / 2)))
}

numberToBinary(10);