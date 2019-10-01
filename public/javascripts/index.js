const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher,Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter',
    'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk',
    'Blair, Robert', 'Blair, Tony', 'Blake, William'];
//filtering born in 1500
filteredByBornDate = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log('filtering born in 1500', filteredByBornDate);

//array of the inventors first and last name
firstAndLastNames = inventors.map(inventor => inventor.first +' '+ inventor.last);
console.log('inventors first and last name', firstAndLastNames);

//Sort the inventors by birthdate, oldest to youngest

sortedInventorsByBirthDate = inventors.sort((x,y)=> {return x.year - y.year});

console.log('sorted inventors by birthdate', sortedInventorsByBirthDate);

//Return the sum of the years lived by all the inventors together
let initialValue = 0;
sumOfYears = inventors.reduce((acc, y)=>{return  acc + (y.passed - y.year)}, initialValue);
console.log('sumOfTheYears', sumOfYears);

//Sort the inventors by years lived

sortedByYearsLived = inventors.sort((x,y)=> {return (x.passed - x.year)-(y.passed - y.year)});
console.log('sortedByyearsLived',sortedByYearsLived);

//Sort the ​ people​ alphabetically by last name

sortedPeople = people.sort((x,y)=> {return x-y} );

console.log('Sort the ​ people​ alphabetically by last name', sortedPeople);
