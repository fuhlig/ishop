var pg = require("pg");

// database info
var db_user = "admin",
	db_password = "admin",
	host = "localhost",
	db_name = "ishop";

// "tcp://user:password@host/database"
var connectionString = "tcp://" + db_user + ":" + db_password + "@" + host + "/" + db_name;

var client = new pg.Client(connectionString);
exports.client = client;
client.connect();