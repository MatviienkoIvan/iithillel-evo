import axios from 'axios';
import { resolve } from 'path';
import { rejects } from 'assert';
import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';

//let inputFieldData = document.querySelector('.search__input');

//'http://httpbin.org/ip'
function getAllComponents() {
    return new Promise(function(resolve, rejects) {
        return axios.get(environment).then(function(data) {
            resolve(data)
        });
    });
    // return [
    //     {"id": 28, 
    //     "name": "Вода деминерализованная", 
    //     "description": "Вода деминерализованная", 
    //     "type": "GOOD", 
    //     "visiable": true }, 
    //     { "id": 32, 
    //     "name": "Вода", 
    //     "description": "Вода", 
    //     "type": "GOOD", 
    //     "visiable": true }
    // ]
}
//'http://151.80.70.43:8080/skin-expert/find-component/'+letters
function findComponents(letters) {
    return new Promise(function(resolve) {
        return axios.get(`${environment.api}//skin-expert/find-component/${letters}`).then((data) => {
            
            resolve(data)
        })
    })
}
//console.log(getAllComponents())
export { getAllComponents, findComponents };