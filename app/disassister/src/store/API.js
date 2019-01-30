import { API_URL } from 'react-native-dotenv'
import { NOTIFY_API_URL } from 'react-native-dotenv'

let BASE_URL = API_URL;

export let GOOGLE_LOGIN = API_URL + "addGmailRecord";
export let POST_HELP = API_URL + "addHelp";
export let GET_USER_ISSUES = API_URL + "getHelpByUser";
export let GET_ALL_HELP_FEED = API_URL + "getHelp";
export let GET_ALL_HELP_FEED_MAPS = API_URL + "getHelpForMaps";
export let TOGGLE_VISIBILITY = API_URL + "toggleVisibility/";

export let ALL_ALERTS = API_URL + "getAllAlerts/";

export let GET_FUNDS = API_URL + "Fund/getFund";

export let SET_SIG = NOTIFY_API_URL + "setsig/";
export let GET_SUGGESTIONS = NOTIFY_API_URL + "getposts/";
