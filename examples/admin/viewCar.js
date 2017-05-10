/**
 * Created by chukin on 09.05.17.
 */

function compare(a,b) {
    return a.value.watch-b.value.watch;
}

function getViewCar(id) {
    var arrayOfCars = LocalStorageModule.getAll();

    arrayOfCars.sort(compare).reverse();



    var resultCar = arrayOfCars.find(function (element, index, array) {
        if (element.key===Number.parseInt(id)){
            return true;
        }
    });


    return `

    <div class="well well-lg">
    <a href="./car/1">Открыть</a>
    <div class="row">
    <div class="col-sm-4"><image src="${resultCar.value.photoUrl}" width="400px"></image></div>
    <div class="col-sm-4"><div class="well well-sm">Id: ${resultCar.key}</div>
    <div class="well well-sm">Марка: ${resultCar.value.mark}</div>
    <div class="well well-sm">Модель: ${resultCar.value.Model}</div>  
    <div class="well well-sm">Просмотры: ${resultCar.value.watch}</div>
    <div class="well well-sm">Цена: ${resultCar.value.cost}</div>
    <div class="well well-sm">Состояние: ${resultCar.value.state}</div></div>
    <div class="col-sm-4"><div class="well well-sm">Пробег: ${resultCar.value.mileage}</div>
    <div class="well well-sm">Тип: ${resultCar.value.type}</div>
    <div class="well well-sm">Объём: ${resultCar.value.amount}</div>
    <div class="well well-sm">Коробка: ${resultCar.value.transmission}</div>
    <div class="well well-sm">Год: ${resultCar.value.year}</div></div>
    </div>
    </div>

    
    
    
    `;
}

function getViewCarsTable() {
        var resultHtml = `
        <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Марка</th>
        <th>Модель</th>
        <th>Год</th>
        <th>Цена</th>
        <th>Состояние</th>
        <th>Пробег</th>
        <th>Тип</th>
        <th>Объём</th>
        <th>Коробка</th>
        <th>Фото</th>
        <th>Просмотры</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      `;


        var arrayOfCars = LocalStorageModule.getAll();
        for(var i=0;i<arrayOfCars.length;i++){
            resultHtml+=`
            <tr id=${i} onclick="showButton()" >
            <td >${arrayOfCars[i].key}</td>
            <td>${arrayOfCars[i].value.mark}</td>
            <td>${arrayOfCars[i].value.Model}</td>
            <td>${arrayOfCars[i].value.year}</td>
            <td>${arrayOfCars[i].value.cost}</td>
            <td>${arrayOfCars[i].value.state}</td>
            <td>${arrayOfCars[i].value.mileage}</td>
            <td>${arrayOfCars[i].value.type}</td>
            <td>${arrayOfCars[i].value.amount}</td>
            <td>${arrayOfCars[i].value.transmission}</td>
            <td><image src="${arrayOfCars[i].value.photoUrl}" width="150px"></image></td>
            <td>${arrayOfCars[i].value.watch}</td>
            <td><button hidden id="${arrayOfCars[i].key}change">Изменить</button><button hidden id="${arrayOfCars[i].key}delete">Удалить</button></td>
</tr>       
            `;
        }



        resultHtml+=`
    </tbody>
  </table>
        `;


        return resultHtml;
}

function showButton(event) {
    console.log(event);
}

function getTable() {
    var table = document.createElement('table');
    table.classList.add("table");
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    td.innerHTML="Id";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Марка";
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerHTML="Модель";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Год";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Цена";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Состояние";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Пробег";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Тип";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Объём";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Коробка";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Фото";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML="Просмотры";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML=" ";
    tr.appendChild(td);
    thead.appendChild(tr);
    table.appendChild(thead);



    var tbody=document.createElement('tbody');

    var arrayOfCars = LocalStorageModule.getAll();
    arrayOfCars.sort(compare).reverse();
    for(var i =0;i<arrayOfCars.length;i++){
        var tr = document.createElement('tr');
        tr.setAttribute('id',arrayOfCars[i].key);
        tr.addEventListener('mouseover',function (event) {
            var but = document.getElementById($(this).attr('id')+"but1");
            but.removeAttribute('hidden');
            var but = document.getElementById($(this).attr('id')+"but2");
            but.removeAttribute('hidden');
        });
        tr.addEventListener('mouseout',function (event) {
            var but = document.getElementById($(this).attr('id')+"but1");
            but.setAttribute('hidden',"");
            var but = document.getElementById($(this).attr('id')+"but2");
            but.setAttribute('hidden',"");
        });
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].key;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.mark;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML=arrayOfCars[i].value.Model;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.year;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.cost;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.state;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.mileage;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.type;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.amount;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.transmission;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=`<image src="${arrayOfCars[i].value.photoUrl}" width='150'"></image>`;
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML=arrayOfCars[i].value.watch;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.innerHTML=`<a href="./change/${arrayOfCars[i].key}" hidden id="${arrayOfCars[i].key}but1">Изменить</a> <a href="./delete/${arrayOfCars[i].key}" hidden id="${arrayOfCars[i].key}but2">Удалить</a>`;
        tr.appendChild(td);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    return table;
}