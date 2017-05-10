/**
 * Created by chukin on 09.05.17.
 */



function compare(a,b) {
    return a.value.watch-b.value.watch;
}



function getViewCars(data) {



    var arrayOfCars = LocalStorageModule.getAll();

    arrayOfCars.sort(compare).reverse();
    console.log(arrayOfCars[0]);

    var ul = document.createElement('ul');
    ul.setAttribute('id','sortable');
    $(ul).css({ 'list-style-type': 'none', 'margin': '0', 'padding': '0', 'width': '1980px' });

    var count =0;
    if(arrayOfCars.length>=25){
        count=25
    }
    else
    {
        count=arrayOfCars.length;
    }
    for(var i=0;i<count;i++){
        var li = document.createElement('li');
        li.setAttribute('value',arrayOfCars[i].key);
        li.classList.add('ui-state-default');

        var div  = document.createElement('div');
        div.innerHTML=`
<image src="${arrayOfCars[i].value.photoUrl}" width="200px" ></image>

<div class="panel panel-default">
    <div class="panel-body">Марка: ${arrayOfCars[i].value.mark} Модель: ${arrayOfCars[i].value.Model} Цена: ${arrayOfCars[i].value.cost} Пробег: ${arrayOfCars[i].value.mileage}</div>
  </div>
`;

        $(li).bind('click',function (event) {

            page("./car/"+$(this)[0].value);

        });

        li.appendChild(div);
        $(li).css({ 'margin': '3px 3px 3px 0', 'padding': '1px', 'float': 'left', 'width': '370px', 'height': '170px', 'font-size': '1em', 'text-align': 'center' });
        ul.appendChild(li);
    }
    return ul;
}

