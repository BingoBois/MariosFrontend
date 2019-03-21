import fetch from 'node-fetch';
import Item from '../types/Item';

const API_URL = "http://83.88.66.128:3000"; // process.env.API_URL || "localhost:3001";

interface ILoginResponse {
    email: string;
    id: number;
    password: string;
    token: string;
}

export interface IFoodOrder {
    name: string;
    phone: string;
    order: Item[]
}

export async function retrieveItemList(){
  const response = await fetch(API_URL + "/api/getItems", {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const json: Item[] = await response.json();
  return json;
}

export async function sendOrder(name: string, phoneNumber: string, itemList: Item[]){
  const body = {name, phoneNumber, itemList};
  const response = await fetch(API_URL + "/api/sendOrder", {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  // const json: object = await response.json();
  // DELETE ME
  // tslint:disable-next-line:no-console
  console.log(response);
  const json = { message: 'Success' };
  return json;
}

export async function adminLogin(username: string, password: string) {

    const testBody = {
        "password": "1234",
        "username": "duskalbrugedocker@sut.dk",
    }

    /*
    const body = {
        "password": password, // "1234",
        "username": username, // "duskalbrugedocker@sut.dk",
    }
    */

    const response = await fetch(API_URL + "/api/login", {
        body: JSON.stringify(testBody),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
      // tslint:disable-next-line:no-console
      console.log(response);
    const json: ILoginResponse = await response.json();
      // tslint:disable-next-line:no-console
      console.log(json);
    return json;
}

export async function retrieveAdminList(token: string) {
    const body = {
        token
    }
    const response = await fetch(API_URL + "/api/getOrders", {
        body: JSON.stringify(body),
        headers: {
        'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    const json: IFoodOrder[] = await response.json();
    return json;
}
