import fetch from 'node-fetch';
import Item from '../types/Item';
const API_URL = "http://83.88.66.128:3000";

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
