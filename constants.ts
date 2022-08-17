import { Dimensions, Platform, StatusBar } from "react-native";

 
 export const LISTMARGIN = 10;
 export const WIDTH = Dimensions.get('screen').width - LISTMARGIN * 2;

 const baseHeight = 100;
 const iosNotch = 40;
 const iosHeight =  baseHeight + iosNotch;
 let androidHeight = baseHeight;
 let androidNotch = 0;
 if(StatusBar.currentHeight) androidNotch = StatusBar.currentHeight;
 androidHeight += androidHeight;

 export const HEADERHEIGHT = Platform.OS === "ios" ? iosHeight : androidHeight;

 const serverUrl = "http://192.168.43.120:4000/api";
 const locationEndpoint = serverUrl + 'location';

 export const endpoints = {
    autoCompleteEndpoint: locationEndpoint + "/autocomplete",
    searchEndpoint: locationEndpoint + "/search",
 }