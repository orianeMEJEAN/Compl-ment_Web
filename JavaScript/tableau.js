const tabNum = [];
const delay = 2000;
let i;

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

const zone = document.getElementById("zoneVal");
function showTab()
{
    getNumbreTab(tabNum);
    
    if (i < tabNum.length)
    {
        zone.textContent = tabNum[i];
        i++;
        setInterval(showTab, delay);
    }
    else
    {
        clearInterval(this.delay);
    }
}
const intervalID = setInterval(showTab, delay);