"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/////
var HOSTNAME = exports.HOSTNAME = "memory02.usertoken.com";
var DATA_FILE = exports.DATA_FILE = "data/data-" + HOSTNAME + "-server";
var DEVICE_ID = exports.DEVICE_ID = false;
var PROD_CLOUD_MEMORIES = exports.PROD_CLOUD_MEMORIES = "https://tropospheric.mybluemix.net/gun";
var DEV_CLOUD_MEMORIES = exports.DEV_CLOUD_MEMORIES = "https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun";

var CLOUD_MEMORIES = exports.CLOUD_MEMORIES = DEV_CLOUD_MEMORIES;

var MY_MEMORY = exports.MY_MEMORY = "https://memory02.usertoken.com";
var PEER_MEMORIES = exports.PEER_MEMORIES = ["https://memory02.usertoken.com/gun", "https://memory02.pointlook.com/gun", "https://memory02.usertoken.com/gun"];
//export const CHILD_MEMORIES = [
//  "https://tropospheric.mybluemix.net/gun",
//  "https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://memory02-memory02-pl.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-ut-admin.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-usertoken.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-memtwo.193b.starter-ca-central-1.openshiftapps.com/gun"
//];
/////
var GRAPHQL = exports.GRAPHQL = "https://" + HOSTNAME + "/api/graphql";
var DBFILE = exports.DBFILE = DATA_FILE;
var DEBUG = exports.DEBUG = false;
var DEBUG_LOG_URL = exports.DEBUG_LOG_URL = "https://logentries.com/app/a092e388";