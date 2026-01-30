const A_tabNum = [];
const delay = 2000;
let I_i = 0;

function getNumbreTab(min, max)
{
    min = Math.ceil(-10);
    max = Math.floor(40);

    for (let I_i = 0; I_i < 20; I_i++)
    {
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        A_tabNum.push(number);
    }

    return A_tabNum;
}

console.log(getNumbreTab(A_tabNum));

const zone = document.getElementById("zoneVal");

// function showTab()
// {
//     if (I_i < tabNum.length)
//     {
//         const I_val = A_tabNum[I_i];
//         zone.textContent = I_val;
//         changeStyle(I_val);
//         I_i++;
//         setInterval(showTab, delay);
//     }
//     else
//     {
//         clearInterval(intervalID);
//     }
// }

setInterval(function ()
{
    const I_val = A_tabNum[I_i];
    zone.textContent = A_tabNum[I_i];
    changeStyle(I_val);
    I_i++;
}, delay);

function changeStyle(value)
{
    /* Sans un remove de classList le style gardé sera celui du chiffre le + grand*/
    zone.classList.remove(
        "styleBlue", "styleGreen", "styleOrange","styleRed"
    )

    if (value >= -10 && value < 0)
    {
        zone.classList.add("styleBlue");
    }
    else if (value >= 0 && value < 20)
    {
        zone.classList.add("styleGreen");
    }
    else if (value >= 20 && value < 30)
    {
        zone.classList.add("styleOrange");
    }
    else if (value >= 30 && value <= 40)
    {
        zone.classList.add("styleRed");
    }
}