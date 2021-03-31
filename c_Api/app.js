fetch("https://coronavirus-19-api.herokuapp.com/countries?fbclid=IwAR2Z89-dXt5kkh-ClGo7qGE_DY1u9T9u6LeYW1D5KRmCuilXBILgj-PHIG0")
.then(response=>response.json())
.then(data=>{

  data.forEach((value,index) => {

    var table=`
        <tr>
            <td>${index}</td>
            <td>${value.country}</td>
            <td>${value.cases}</td>
            <td>${value.todayCases}</td>
            <td class="deaths">${value.deaths}</td>
            <td>${value.todayDeaths}</td>
            <td class="recovered">${value.recovered}</td>
            <td class="active">${value.active}</td>
            <td>${value.critical}</td>
            <td>${value.casesPerOneMillion}</td>
            <td>${value.deathsPerOneMillion}</td>
            <td>${value.totalTests}</td>
            <td>${value.testsPerOneMillion}</td>
        </tr>`;
    const hh=document.querySelector('.tbody');
    hh.insertAdjacentHTML("beforeend",table)
  });
})


