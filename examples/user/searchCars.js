/**
 * Created by chukin on 09.05.17.
 */

function getSearchCars(params){

    var arrayOfCars = LocalStorageModule.getAll();
    arrayOfCars.sort(compare).reverse();
    var resultText ='';
    resultText+=`<div class="row">
        <div class="col-sm-8">`;



    if ($.isEmptyObject(params)) {
        for(var i=0;i<arrayOfCars.length;i++){
            resultText+=getViewCar(arrayOfCars[i].key);
        }
    }
    else{

        for(var i=0;i<arrayOfCars.length;i++){

            var searchBool = true;

            if (searchBool&&(params.searchText===""||params.searchText===arrayOfCars[i].value.Model||params.searchText===arrayOfCars[i].value.mark)||params.searchText==arrayOfCars[i].value.year||params.searchText===arrayOfCars[i].value.state||params.searchText==arrayOfCars[i].value.cost||params.searchText==arrayOfCars[i].value.mileage||params.searchText==arrayOfCars[i].value.amount||params.searchText===arrayOfCars[i].value.type){
            }
            else{
                searchBool=false;
            }


            if (searchBool&&(params.Model===""||params.Model===arrayOfCars[i].value.Model)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.mark===""||params.mark===arrayOfCars[i].value.mark)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.yearFrom===""||params.yearFrom<=arrayOfCars[i].value.year)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.yearTo===""||params.yearTo>=arrayOfCars[i].value.year)){
            }
            else{
                searchBool=false;
            }


            if (searchBool&&(params.costFrom===""||params.costFrom<=arrayOfCars[i].value.cost)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.costTo===""||params.costTo>=arrayOfCars[i].value.cost)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.state===""||params.state===arrayOfCars[i].value.state)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.mileageFrom===""||params.mileageFrom<=arrayOfCars[i].value.mileage)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.mileageTo===""||params.mileageTo>=arrayOfCars[i].value.mileage)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.amountFrom===""||params.amountFrom<=arrayOfCars[i].value.amount)){
            }
            else{
                searchBool=false;
            }

            if (searchBool&&(params.amountTo===""||params.amountTo>=arrayOfCars[i].value.amount)){
            }
            else{
                searchBool=false;
            }




            if (searchBool){
                resultText+=getViewCar(arrayOfCars[i].key);
            }




        }
    }





    resultText+=`</div>   
  <div class="col-sm-4">
     <form method="get" action="./search">
    <div class="form-group">
  <label for="usr">Поиск:</label>
  <input type="text" class="form-control" id="usr", name="searchText">
</div>  
  <div class="row">
  <div class="col-sm-6">  
  <div class="form-group">
  <label for="sel2">Марка</label>
  <select class="form-control" id="sel2" name="mark">
  <option value=""></option>
    <option value="Лифан">Лифан</option>
    <option value="Toyota">Toyota</option>   
  </select>
</div>  
  <div class="form-group">
  <label for="sel3">Год от </label>
  <select class="form-control" id="sel3" name="yearFrom">
  <option value=""></option>
    <option value="1996">1996</option>
    <option value="2005">2005</option>
  </select>
</div>
<div class="form-group">
  <label for="sel1">Цена от</label>
  <select class="form-control" id="sel5" name="costFrom">
   <option value=""></option>
    <option value="200">200</option>
    <option value="600">600</option>
  </select>
</div>
<div class="form-group">
  <label for="sel1">Пробег от</label>
  <select class="form-control" id="sel8" name="mileageFrom">
   <option value=""></option>
    <option value="300">300</option>
    <option value="600">600</option>
  </select>
</div>
<div class="form-group">
  <label for="sel1">Объём от</label>
  <select class="form-control" id="sel10" name="amountFrom">
   <option value=""></option>
    <option value="1.8">1.8</option>
    <option value="2.6">2.6</option>
  </select>
</div> 
<div class="form-group">
<label class="radio-inline"><input type="radio" name="type" value="Дизельный">Дизельный</label>
<label class="radio-inline"><input type="radio" name="type" value="Газовый">Газовый</label>
<label class="radio-inline"><input type="radio" name="type" value="Бензин">Бензин</label>
</div> 
</div>
  <div class="col-sm-6">
   <div class="form-group">
  <label for="sel1">Модель</label>
  <select class="form-control" id="sel1" name="Model">
  <option value=""></option>
    <option value="Новая">Новая</option>
    <option value="Старая">Старая</option>
  </select>
</div> 
<div class="form-group">
  <label for="sel4">Год до</label>
  <select class="form-control" id="sel4" name="yearTo">
   <option value=""></option>
    <option value="2017">2017</option>
    <option value="2015">2015</option>
  </select>
</div>
<div class="form-group">
  <label for="sel1">Цена до</label>
  <select class="form-control" id="sel6" name="costTo">
   <option value=""></option>
    <option value="2000">2000</option>
    <option value="3000">3000</option>
  </select>
</div> 
  <div class="form-group">
  <label for="sel1">Пробег до</label>
  <select class="form-control" id="sel9" name="mileageTo">
   <option value=""></option>
    <option value="5000">5000</option>
    <option value="6000">6000</option>
  </select>
</div>
  <div class="form-group">
  <label for="sel1">Объём до</label>
  <select class="form-control" id="sel11" name="amountTo">
   <option value=""></option>
    <option value="3.6">3.6</option>
    <option value="4.5">4.5</option>
  </select>
</div> 
  <div class="form-group">
<label class="radio-inline"><input type="radio" name="transmission" value="Авто">Авто</label>
<label class="radio-inline"><input type="radio" name="transmission" value="Ручное">Ручное</label>
</div>  
</div>
   </div>
<div class="form-group">
  <label for="sel1">Состояние</label>
  <select class="form-control" id="sel7" name="state">
   <option value=""></option>
    <option value="Убитое">Убитое</option>
    <option value="С пробегов">С пробегом</option>   
  </select>
</div>
<button type="submit" class="btn btn-default">Найти</button>
</form>
</div>
</div>`;

    return resultText;

}