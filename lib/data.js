const fs = require("fs");
const path = require("path");

const lib = {};

lib.basedir = path.join(__dirname, "/../.data/");

lib.create = function (dir, file, data, callback) {
    fs.open(
        lib.basedir + dir + "/" + file + ".json",
        "wx",
        function (err, fileDescriptor) {
            if (!err && fileDescriptor) {
                const stringData = JSON.stringify(data);

                fs.writeFile(fileDescriptor, stringData, function (err) {
                    if (!err) {
                        fs.close(fileDescriptor, function (err) {
                            if (!err) {
                                callback(false);
                            } else {
                                callback("Error closing the new file!");
                            }
                        });
                    } else {
                        callback("Error writing to new file!");
                    }
                });
            } else {
                callback(
                    "Could not create new file,it may already exists!" + err
                );
            }
        }
    );
};

lib.read = (dir, file, callback) => {
    fs.readFile(
        lib.basedir + dir + "/" + file + ".json",
        "utf8",
        (err, data) => {
            callback(err, data);
        }
    );
};

lib.update = (dir, file, data, callback) => {
    fs.open(
        lib.basedir + dir + "/" + file + ".json",
        "r+",
        (err, fileDescriptor) => {
            if (!err && fileDescriptor) {
                const stringData = JSON.stringify(data);

                fs.ftruncate(fileDescriptor, (err) => {
                    if (!err) {
                        fs.writeFile(fileDescriptor, stringData, (err) => {
                            if (!err) {
                                fs.close(fileDescriptor, (err) => {
                                    if (!err) {
                                        callback(false);
                                    } else {
                                        callback("Error Closing file!");
                                    }
                                });
                            } else {
                                callback("Error Writing to file!");
                            }
                        });
                    } else {
                        callback("Error truncating file !");
                    }
                });
            } else {
                callback("Error Updating.File may not exist");
            }
        }
    );
};

lib.delete = (dir, file, callback) => {
    fs.unlink(lib.basedir + dir + "/" + file + ".json", (err) => {
        if (!err) {
            callback(false);
        } else {
            callback("Error deleting file");
        }
    });
};

module.exports = lib;
