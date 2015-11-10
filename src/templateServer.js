/**
 * Created by vishwass on 09-11-2015.
 */
"use strict";

var fs = require('fs');
var restify = require("restify");
var constants = require('./MRConstants/constants');
var path = require('path');
var server;

function initialize() {
    var api = restify.createServer();

    server = api;
    server.use(restify.bodyParser());
    server.use(restify.queryParser());
}
function startUp(){
    console.log("Start up server " +__dirname);
    var pathHtml = path.join(__dirname, 'public');
    console.log(pathHtml);
    server.get(/.*/, restify.serveStatic({
        directory: pathHtml,
        default: "index.html"
    }));

    var serverPort = process.env.OPENSHIFT_NODEJS_PORT || constants.configuration.apiPort;
    var ipAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
    server.listen(serverPort,ipAddress,function(){
        console.log("Running Server on localhost:"+constants.configuration.apiPort);
    });

}

function startTemplateCreator(){
    initialize();
    startUp();
}

startTemplateCreator();

module.exports.api = server;