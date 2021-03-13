

//FECTHING API IN USA (RETURN PRoMISE)

async function  getAllCities() {
    let APIUSA = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
    .then(Response =>{
        return Response.json()})
    .catch(error=>{
        return error;
    });
  //console.log(APIUSA);
  return APIUSA;
}

getAllCities()




    async function findOne(){
        let uuu = await getAllCities();
        let html ='';
        uuu.forEach(element => {
           let htmlSegment=''
            if(element.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase()) || element.state.toLowerCase().includes(document.getElementById("search").value.toLowerCase()))
            {
                console.log(element);
                htmlSegment=`<div class="city" >
                <h1 class="city-heading">State:${element.state}</h1><hr>
                <h2 class="content">City:&nbsp&nbsp${element.city} </h2><hr>
                <h2 class="content">Latitude:&nbsp&nbsp${element.latitude} </h2><hr>
                <h2 class="content">Longitude:&nbsp&nbsp${element.longitude} </h2><hr>
                <h2 class="content">Population:&nbsp&nbsp${element.population} </h2><hr>
                <h2 class="content">Rank:&nbsp&nbsp${element.rank} </h2><hr>
                <h2 class="content">Growth:&nbsp&nbsp${element.growth_from_2000_to_2013} </h2><hr>
            </div>`;
            html += htmlSegment;
            }
        });
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }