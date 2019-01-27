'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Help = require('../models/help.js');

let https = require('https');

var promise = require('promise');

const axios = require('axios');

var jwt = require ('jsonwebtoken');

var instanceDisaster = axios.create({
    baseURL: 'https://api.predicthq.com/v1'
});

var instanceNews = axios.create({
    baseURL: 'https://api.reliefweb.int/v1'
});

var instanceWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data'
});

var instanceOAuthGmail = axios.create({
    baseURL: 'https://www.googleapis.com/oauth2/v2/userinfo'
});

var instanceOAuthFb = axios.create({
    baseURL: 'https://www.graph.facebook.com/v3.2'
});

var instanceSent = axios.create({
    baseURL: 'https://eastasia.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment'
});
/*
PREDICTHQ.COM

Client secret: 	
0xLu2iA7bXPG9Yj2bqj5NltKZbCOiXJcszCBhPOY

Access token:
7XvdQkOUUrShrqq3QrHCYmwfJod5Oy
*/


//**********************HELP**********************

router.get('/getHelp', function (req, res, next) {
    Help.find({}).sort({createdAt: -1}).then(function (details) {
        res.send({status: true, details: details});
    }).catch(next);
});

router.get('/getHelpByUser', async function (req, res, next) {
    var email = "";
    var profile = "";
    await verifyToken(req.headers['x-access-token'],function(profille){
        email = profile.email;
        profile = profille;
    });
    Help.find({email : email}).then(function (details) {
        res.send({status: true, profile: profile, details: details});
    }).catch(next);
});

router.get('/toggleVisibility/:id', function (req, res, next) {
    Help.findById({_id:req.params.id},async function(error,help){
        //console.log("hii" + help.status);
        help.visible = !help.visible;
        //console.log(help.status);
        await help.save(function(error){
            if(error)
                console.error('ERROR!');   
            console.log("saved"); 
        });
        res.send({status: true, help: help});
    });
});

router.get('/toggleStats/:id',function (req, res, next) {
    Help.findOneAndUpdate({_id:req.params.id},{$set:{status: true}}).then(function (details) {
        res.send({status: true, details: details});
    }).catch(next);
});
    

router.get('/getHelpByMobile/:id', function (req, res, next) {
    Help.find({ contact: req.params.id }).then(function (details) {
        res.send({status: true, details: details});
    }).catch(next);
});

router.get('/getHelp/:cat/:loc', function (req, res, next) {
    Help.find({ probType: req.params.cat, location: req.params.loc }).then(function (details) {
        res.send({status: true, details: details});
    }).catch(next);
});

router.get('/deleteHelpById/:id', function (req, res, next) {
    Help.findByIdAndDelete({ _id: req.params.id }).then(function (details) {
        res.send({status: true, details: details});
    }).catch(next);
});


router.post('/addHelp',async function(req,res,next){
    let documents = {
        'documents': [{
            'id': '1',
            'language': 'en',
            'text': req.body.probDesc 
        }]
    };
    var email = "";
    var emotionScore = 0;
    var currentTime = Date();
    currentTime = currentTime.toString().slice(4,24);

    instanceDisaster.defaults.headers.common['Ocp-Apim-Subscription-Key'] = '810e478db8d14548aa32f228c027725a';

    await instanceSent.post('/',documents).then(function(response){
        //console.log(response.data.documents[0].score);
        emotionScore = response.data.documents[0].score;
        //res.status(200).send(response.data.documents[0].score.toString());
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error: "Unable to retrieve sentiments"});
        }
    });

    await verifyToken(req.headers['x-access-token'],function(profile){
        email = profile.email;
        var visible = true;
        //console.log(emaill);
        if(email == "No/Wrong token provided")
            res.send({status: false, error: email});
        
        else{
            Help.create({
                probTitle: req.body.probTitle,
                probType: req.body.probType,
                probDesc: req.body.probDesc,
                emotion: emotionScore,
                visible: visible,
		        coordinates: req.body.coordinates,
		        helpMode: req.body.helpMode,
                location: req.body.location,
                contact: req.body.contact,
                time: currentTime,
                email: email			
            }).then(function (details) {
                    res.send({status: true, details: details});
            }).catch(next);
        }
    });
    
});

//**********************DISASTER ALERTS**********************

router.get('/getDisasterAlerts',function(req,res,next){
    var currentDate = new Date();
    currentDate = currentDate.toISOString().slice(0,10);

    instanceDisaster.defaults.headers.common['Authorization'] = 'Bearer 7XvdQkOUUrShrqq3QrHCYmwfJod5Oy';

    //instanceDisaster.get('/events/?limit=5&category=disasters, severe-weather, terror&label=air-quality, biological-hazard, cold-wave, disaster, disaster-warning, drought, dust, earthquake, environment-pollution, epidemic, explosion, fire, heat-wave, hostage-crisis, hurricane, mass-shooting, nuclear, suspected-bombing, suspected-attack, technological-disaster, terror, tornado, tsunami, typhoon, vehicle-accident, volcano, weather, weather-warning, wildfire&country=US&active.gte='+currentDate+'&/')
    instanceDisaster.get('/events/?limit=10&category=disasters, severe-weather, terror&country=US&active.gte='+currentDate+'&/').then(function(response){
        var result = response.data.results;
        var newResult = [];
        
        result.forEach(element => {
            var tempObj={};
            tempObj.title=element.title;
            tempObj.description=element.description;
            tempObj.start=element.start;
            tempObj.end=element.end;
            tempObj.updated=element.updated;
            newResult.push(tempObj);
        });
        var detail = {
            response: newResult
        }
        res.send({status: true, details: detail});
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Unable to retrieve disaster alerts"});
        }
    });
});

//**********************NEWS ALERTS**********************

router.get('/getNewsInfo/:id',function(req,res,next){
    
    instanceNews.get('/reports/'+req.params.id).then(function(response){
        var result = response.data.data;
        var newResult = {};
        newResult.title = result[0].fields.title;
        newResult.description = result[0].fields.body;
        newResult.url = result[0].fields.url;
        res.send({status: true, details: newResult});
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Unable to retrieve news"});
        }
    });
});

router.get('/getAllNews',function(req,res,next){
    var body = {
        "filter":
            {
            "field": "country",
            "value": ["India"],
            "operator": "AND"
            }
    };
    instanceNews.post('/reports?appname=disassister',body).then(function(response){
        var result = response.data.data;
        var newResult = [];
        
        result.forEach(element => {
            var tempObj={};
            tempObj.id=element.id;
            tempObj.title=element.fields.title;
            newResult.push(tempObj);
        });
        var detail = {
            response : newResult
        }
        res.send({status: true, details: detail});
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Unable to retrieve news"});
        }
    });  
});

//**********************WEATHER ALERTS**********************

router.get('/getWeatherAlerts/:lat/:lon',function(req,res,next){
    instanceWeather.get('/2.5/forecast?lat='+req.params.lat+'&lon='+req.params.lon+'&appid=979e544ab2d464b05a32114170a8540f&units=metric').then(function(response){
        var result = response.data.list;
        var i = 2;
        var count = 5;
        var newResult = [];

        while(count > 0){
            var tempObj={};
            tempObj.description = result[i].weather[0].description;
            tempObj.temp = result[i].main.temp;
            tempObj.humidity = result[i].main.humidity;
            tempObj.windSpeed = result[i].wind.speed;
            tempObj.date = result[i].dt_txt.slice(0,10);
            newResult.push(tempObj);
            count-=1;
            i+=8;
        };
    
        var detail = {
            response : newResult
        }
        
        res.send({status: true, details: detail});
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Unable to retrieve weather alerts"});
        }
    });  
});

/********************************************************/

router.get('/getUsers',function(req,res,next){
    User.find({}).then(function(details){
        res.send({status: true, details: details});
    }).catch(next);
});

router.get('/deleteUsersById/:id', function (req, res, next) {
    User.findByIdAndDelete({ _id: req.params.id }).then(function (details) {
        res.send({status: true, details: details});
    }).catch(next);
});

//**********************OAUTH MODULE**********************

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

router.post('/addGmailRecord', function(req,res,next){
    instanceOAuthGmail.defaults.headers.common['Authorization'] = 'Bearer ' + req.body.accessToken;
    instanceOAuthGmail.get('/').then(async function(resp){
        console.log(resp.data.email);
        var body = {
            name : resp.data.name,
            email : resp.data.email
        }
        await User.find({email: resp.data.email}).then(async function(details){
            //console.log(details);
            if(!isEmpty(details))
                console.log("User exists");
            else{
                await User.create(body).then(function (details) {
                    //res.send(details);
                    //console.log("User created");
                }).catch(next);
                console.log("User created");
            }
        });     
        
      
        var gmailtoken = "";
        gmailtoken = jwt.sign({email: resp.data.email, name: resp.data.name}, "Fuck You Little Bitch");
        console.log("Token generated");
         
        var response = {
            token : gmailtoken
        }
        res.send({status: true, details: response});;
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Invalid or Expired Access Token"});
        }
    });  
});

router.get('/verifyToken', function(req, res, next){
    var rToken = req.headers['x-access-token'];
    if (!rToken) 
        return res.status(401).send({ status: false, error: 'No token provided' });
  
    jwt.verify(rToken, "Fuck You Little Bitch", function(err, decoded) {
        if (err) 
            return res.status(500).send({ status: false, error: 'Failed to authenticate token' });
        res.status(200).send({status: true, message: decoded});
    });
});

async function verifyToken(accessToken,callback){
    if (!accessToken) 
        callback("No/Wrong token provided");
  
    await jwt.verify(accessToken, "Fuck You Little Bitch", function(err, decoded) {
        if (!err){ 
            var profile = {
                name: decoded.name,
                email: decoded.email
            }
            callback(profile);
        }
    });
}

router.post('/addFBRecord', function(req, res,next){
    console.log("Before oauth");
    //console.log(req.body.accessToken)
    instanceOAuthFb.defaults.headers.common['Authorization'] = 'Bearer ' +req.body.accessToken;
    instanceOAuthFb.get('/me?fields=id,name,email').then(function(resp){
        console.log(resp.email);
        var fbtoken = jwt.sign({email: resp.email}, "Fuck You Little Bitch");
        res.send(fbtoken);
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Invalid or Expired Access Token"});
        }
    });  
});

//*******************ALL-IN-ALL ALAGHU RAJA******************

var resultFinal = {};

router.get('/getAllAlerts/:lat/:lon',async function(req,res,next){
    var la = req.params.lat;
    var lo = req.params.lon;
    await Promise.all([disasters(),news(),weathers(la,lo)]);
    console.log("Final");
    res.send({status: true, details: resultFinal});
});

//***************DISASTER*****************
async function disasters(){

    var currentDate = new Date();
    currentDate = currentDate.toISOString().slice(0,10);
    instanceDisaster.defaults.headers.common['Authorization'] = 'Bearer 7XvdQkOUUrShrqq3QrHCYmwfJod5Oy';
    //instanceDisaster.get('/events/?limit=5&category=disasters, severe-weather, terror&label=air-quality, biological-hazard, cold-wave, disaster, disaster-warning, drought, dust, earthquake, environment-pollution, epidemic, explosion, fire, heat-wave, hostage-crisis, hurricane, mass-shooting, nuclear, suspected-bombing, suspected-attack, technological-disaster, terror, tornado, tsunami, typhoon, vehicle-accident, volcano, weather, weather-warning, wildfire&country=US&active.gte='+currentDate+'&/')
    await instanceDisaster.get('/events/?limit=10&category=disasters, severe-weather, terror&country=US&active.gte='+currentDate+'&/').then(function(response){
        var result = response.data.results;
        var newResult = [];      
        result.forEach(element => {
            var tempObj={};
            tempObj.title=element.title;
            tempObj.description=element.description;
            tempObj.start=element.start;
            tempObj.end=element.end;
            tempObj.updated=element.updated;
            newResult.push(tempObj);
        });
        var details = { response : newResult }
        resultFinal.disaster = details;
        console.log("Disaster");
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Unable to retrieve disaster alerts"});
        }
    });
}
//****************NEWS*****************
async function news(){
    var body = {
        "filter":
            {
            "field": "country",
            "value": ["India"],
            "operator": "AND"
            }
    };
    await instanceNews.post('/reports?appname=disassister',body).then(function(response){
        var result = response.data.data;
        var newResult = [];
        
        result.forEach(element => {
            var tempObj={};
            tempObj.id=element.id;
            tempObj.title=element.fields.title;
            newResult.push(tempObj);
        });

        var details = { response : newResult }
        resultFinal.news = details;
        console.log("News");
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Unable to retrieve news"});
        }
    });  
}
//*******************WEATHER*******************

async function weathers(la,lo){
    await instanceWeather.get('/2.5/forecast?lat='+la+'&lon='+lo+'&appid=979e544ab2d464b05a32114170a8540f&units=metric').then(function(response){
        var result = response.data.list;
        var i = 2;
        var count = 5;
        var newResult = [];

        while(count > 0){
            var tempObj={};
            tempObj.description = result[i].weather[0].description;
            tempObj.temp = result[i].main.temp;
            tempObj.humidity = result[i].main.humidity;
            tempObj.windSpeed = result[i].wind.speed;
            tempObj.date = result[i].dt_txt.slice(0,10);
            newResult.push(tempObj);
            count-=1;
            i+=8;
        };
    
        var detail = {
            response : newResult
        }

        resultFinal.weather = detail;
        console.log("Weather");
    }).catch(function(err){
        if(err.response){
            console.log(err.response.data);
            res.send({status: false, error:"Unable to retrieve weather alerts"});
        }
    }); 
}

module.exports = router;
