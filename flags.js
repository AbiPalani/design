function createflag()
{
const imgarray=new Array();
imgarray[0]="https://restcountries.eu/data/ind.svg";
imgarray[1]="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png";
imgarray[2]="https://restcountries.eu/data/bgd.svg";
imgarray[3]="https://restcountries.eu/data/bra.svg";
imgarray[4]="https://restcountries.eu/data/afg.svg";
  
const countryname=["India","Germany","Bangladesh","Brazil","Afghanistan"];
const population=[1295210000,81770900,161006790,206135893,27657145];
const region=["Asia","Europe","Asia","Americas","Asia"];
const capital=["New Delhi","Berlin","Dhaka","Brasilia","Kabul"];

const flag=document.createElement('img');
flag.src=imgarray[i];
flag.className="flag";

const info=document.createElement('div');
info.setAttribute('class','info');
info.innerHTML=`<h2>${countryname[i]}</h2>
<p><b>Population:</b>${population[i]}</p>
<p><b>Region:</b>${region[i]}</p>
<p><b>Capital:</b>${capital[i]}</p>`;

const container = document.createElement('div');
container.setAttribute('class','container');
container.append(flag,info);
document.body.append(container);
}


for(var i=0;i<5;i++)
  {
    document.write("&nbsp");
    createflag();
  }
