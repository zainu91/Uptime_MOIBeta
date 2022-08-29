const pkg = require("../../package.json");
const fs = require("fs");
const childProcess = require("child_process");
const util = require("../../src/util");

util.polyfill();

const version = process.env.VERSION;

console.log("Beta Version: " + version);

if (!version || !version.includes("-beta.")) {
    console.error("invalid version, beta version only");
    process.exit(1);
}

const exists = tagExists(version);

if (! exists) {
    // Process package.json
    pkg.version = version;
    fs.writeFileSync("package.json", JSON.stringify(pkg, null, 4) + "\n");

    // Also update package-lock.json
    childProcess.spawnSync("npm", [ "install" ]);

    commit(version);
    tag(version);

} else {
    console.log("version tag exists, please delete the tag or use another tag");
    process.exit(1);
}

function commit(version) {
    let msg = "Update to " + version;

    let res = childProcess.spawnSync("git", [ "commit", "-m", msg, "-a" ]);
    let stdout = res.stdout.toString().trim();
    console.log(stdout);

    if (stdout.includes("no changes added to commit")) {
        throw new Error("commit error");
    }

    res = childProcess.spawnSync("git", [ "push", "origin", "master" ]);
    console.log(res.stdout.toString().trim());
}

function tag(version) {
    let res = childProcess.spawnSync("git", [ "tag", version ]);
    console.log(res.stdout.toString().trim());

    res = childProcess.spawnSync("git", [ "push", "origin", version ]);
    console.log(res.stdout.toString().trim());
}

function tagExists(version) {
    if (! version) {
        throw new Error("invalid version");
    }

    let res = childProcess.spawnSync("git", [ "tag", "-l", version ]);

    return res.stdout.toString().trim() === version;
}
