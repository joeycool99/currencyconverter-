bit = document.getElementById("bit")
// var query = "INR";



const form = document.querySelector('#searchForm');
// const divimg = document.getElementById("imgflex")


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var query = form.elements.query.value;
    var amount = form.elements.amount.value;

    const fetchBitcoinPrice = async () => {
        try {
            bit.innerHTML = "";
            const res = await fetch(`http://api.currencylayer.com/live?access_key=e3f47741a06f5c5ceeb402a8784e155e&currencies=${query}`);
            const data = await res.json();
            var currencies = `USD${query}`
            var fin = data.quotes[currencies]
            console.log(typeof (fin))
            bit.append(`The current price of ${amount}$ to ${query} is: ${(Math.round((fin * amount) * 100) / 100)} `)

        } catch (e) {
            return ("SOMETHING WENT WRONG!!!", e)
        }
    }

    fetchBitcoinPrice()


})



// var d = USDINR
// console.log(typeof (d))