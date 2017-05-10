/**
 * Created by chukin on 09.05.17.
 */

function getViewCar(id) {
    var arrayOfCars = LocalStorageModule.getAll();

    arrayOfCars.sort(compare).reverse();



    var resultCar = arrayOfCars.find(function (element, index, array) {
        if (element.key===Number.parseInt(id)){
            return true;
        }
    });

    if ($.isEmptyObject(resultCar)) {
        return "Такой машины нет";
    }
    else{


        return `
    <div class="well well-lg">
    <a href="./car/1">Открыть</a>
    <div class="row">
    <div class="col-sm-4"><image src="${resultCar.value.photoUrl}" width="400px"></image></div>
    <div class="col-sm-4"><div class="well well-sm">Id: ${resultCar.key}</div>
    <div class="well well-sm">Марка: ${resultCar.value.mark}</div>
    <div class="well well-sm">Модель: ${resultCar.value.Model}</div>  
    <div class="well well-sm">Просмотры: ${resultCar.value.watch}</div>
    <div class="well well-sm">Цена Р: ${resultCar.value.cost}</div>
    <div class="well well-sm">Цена $: ${resultCar.value.cost / 2}</div>
    <div class="well well-sm">Цена €: ${resultCar.value.cost / 3}</div>
    </div>
    <div class="col-sm-4"><div class="well well-sm">Пробег: ${resultCar.value.mileage}</div>
    <div class="well well-sm">Тип: ${resultCar.value.type}</div>
    <div class="well well-sm">Объём: ${resultCar.value.amount}</div>
    <div class="well well-sm">Коробка: ${resultCar.value.transmission}</div>
    <div class="well well-sm">Год: ${resultCar.value.year}</div>
    <div class="well well-sm">Состояние: ${resultCar.value.state}</div></div>
    </div>
    </div>
    `;
    }
}