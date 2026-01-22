const tabNum = [];

function getNumbreTab(min, max)
{
    min = Math.ceil(-10);
    max = Math.floor(40);

    for (let i = 0; i < 20; i++)
    {
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        tabNum.push(number);
    }

    return tabNum;
}

console.log(getNumbreTab(tabNum));