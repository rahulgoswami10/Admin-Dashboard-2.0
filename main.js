const chart = document.querySelector("#chart").getContext('2d');

// Create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537,  49631, 59095, 57828, 36684, 33572, 39970, 48890, 48110, 61050, 54000],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 84000, 26000, 45000, 32698, 55500, 34000, 19656, 24832, 36844, 29050],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

//==== Show or Hide Sidebar ====//
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
    menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
    menuBtn.style.display = 'block';
})



//==== THEME SWITCHING ====//
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');

    themeBtn.querySelector('span:last-child').classList.toggle('active');
})