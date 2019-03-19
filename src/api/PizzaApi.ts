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
