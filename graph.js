const graph = document.querySelector('#graph-base');
const graphPercent = document.querySelector('#graph-percent');

const setGraphBar = (percent) => {

    const deg = 90 + (percent * 3.6);

    const direction = percent < 51 ? 'to right' : 'to left';
    const color = percent < 51 ? '#000' : '#00D93D';

    graph.style.background = `linear-gradient(${direction}, ${color} 50%, transparent 50%),linear-gradient(${deg}deg, #00D93D 50%, #000 50%)`
    graphPercent.innerText = `${percent}%`
}

let currentPercentage = 0;
let graphBarInterval = setInterval(() => null, 0);

const checkInterval = (currentPercentage, percent) => {
    console.log(checkInterval(graphBarInterval));
    
}

const setGraphPercentage = (percent) => {
    

    graphBarInterval = setInterval(() => {
        if(currentPercentage === percent) clearInterval(graphBarInterval)
        if(currentPercentage === percent) return null;

        

        if(currentPercentage > percent) currentPercentage--;
        else if (currentPercentage < percent) currentPercentage++;

        setGraphBar(currentPercentage)
    }, 20)
}
setGraphBar(0);