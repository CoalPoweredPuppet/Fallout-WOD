function getCleanImgsrc(imgsrc) {
    var parts = imgsrc.match(/(.*\/images\/.*)(thumb|med|original|max)([^\?]*)(\?[^?]+)?$/);
    if (parts) {
        return parts[1] + 'thumb' + parts[3] + (parts[4] ? parts[4] : `?${Math.round(Math.random() * 9999999)}`);
    }
    return;
}

var APimages = {
    "_min": 0,
    "_max": 6,
    0     : "https://s3.amazonaws.com/files.d20.io/images/135028097/vaWM-ocSe0sckCQPjc4dag/max.png?1589608921",
    1     : "https://s3.amazonaws.com/files.d20.io/images/135028119/odC1CH3rkeX9X9w7mhbzSA/max.png?1589608936",
    2     : "https://s3.amazonaws.com/files.d20.io/images/135028127/5Y-1b2j9CWMxFxqA2oaFGQ/max.png?1589608939",
    3     : "https://s3.amazonaws.com/files.d20.io/images/135028134/p_O0szyS5TBPjSEMT6eKNA/max.png?1589608941",
    4     : "https://s3.amazonaws.com/files.d20.io/images/135028139/gzY2Fyexg2_YhWz5V52LDw/max.png?1589608944",
    5     : "https://s3.amazonaws.com/files.d20.io/images/135028150/hf1VglWFsmJ_Bgmku1Gmuw/max.png?1589608947",
    6     : "https://s3.amazonaws.com/files.d20.io/images/135028160/i1OtNXHawq0DJ2F2kiuZMA/max.png?1589608950",
};

var DPimages = {
    "_min": -5,
    "_max": 20,
    "-5"  : "https://s3.amazonaws.com/files.d20.io/images/135466825/H7_okuIMG6N9h_0XVW1PqA/max.png?1589699105",
    "-4"  : "https://s3.amazonaws.com/files.d20.io/images/135466824/q0-o6zI4yT28XNRAsIrxBw/max.png?1589699105",
    "-3"  : "https://s3.amazonaws.com/files.d20.io/images/135466833/nv82hmloURVmp4DRVt8UQQ/max.png?1589699105",
    "-2"  : "https://s3.amazonaws.com/files.d20.io/images/135466827/h_Z3JAjSeSGojO8Yh9Rcnw/max.png?1589699105",
    "-1"  : "https://s3.amazonaws.com/files.d20.io/images/135466823/yCp6rdTV5rjZl2LK4zQ48Q/max.png?1589699105",
    "0"   : "https://s3.amazonaws.com/files.d20.io/images/135466826/c5KLlWe7q7DiZA71IIc5gw/max.png?1589699105",
    "1"   : "https://s3.amazonaws.com/files.d20.io/images/135466830/2qH5iuCpVvGwIzbW8d8t6w/max.png?1589699105",
    "2"   : "https://s3.amazonaws.com/files.d20.io/images/135466829/Co4QuLjTS3iCRlrGhVUbzw/max.png?1589699105",
    "3"   : "https://s3.amazonaws.com/files.d20.io/images/135466831/pB__lCAbIeL4rXj-hSiWmQ/max.png?1589699105",
    "4"   : "https://s3.amazonaws.com/files.d20.io/images/135466832/ArroVkBLE210vfXUc5BwUQ/max.png?1589699105",
    "5"   : "https://s3.amazonaws.com/files.d20.io/images/135469281/27GTxgD12oI-5e9CsJZ03Q/max.png?1589700327",
    "6"   : "https://s3.amazonaws.com/files.d20.io/images/135466828/h6ecKPKGyR5Ow6yL_KNeww/max.png?1589699105",
    "7"   : "https://s3.amazonaws.com/files.d20.io/images/135466898/V5gk7B5n3eQaSneQW9HaFg/max.png?1589699131",
    "8"   : "https://s3.amazonaws.com/files.d20.io/images/135466897/UkWXEnz6gg7NbPjvNvyTYA/max.png?1589699131",
    "9"   : "https://s3.amazonaws.com/files.d20.io/images/135466888/lNgCoUR55827axqVUTG7Dw/max.png?1589699130",
    "10"  : "https://s3.amazonaws.com/files.d20.io/images/135466893/aMwuXvRuGwiQqkZDVadnjw/max.png?1589699131",
    "11"  : "https://s3.amazonaws.com/files.d20.io/images/135466892/DYLZx5Hs0blf7HPdt5XLAg/max.png?1589699131",
    "12"  : "https://s3.amazonaws.com/files.d20.io/images/135466899/BIAcMUb_a_JiWVncGqV7HQ/max.png?1589699131",
    "13"  : "https://s3.amazonaws.com/files.d20.io/images/135466895/_7rysYfW6Z2T1hlymITL0w/max.png?1589699131",
    "14"  : "https://s3.amazonaws.com/files.d20.io/images/135466894/heO_StgQdjcn_wMEQ5NaiQ/max.png?1589699131",
    "15"  : "https://s3.amazonaws.com/files.d20.io/images/135486352/8heM3TF8ajwHs44hj82sog/max.png?1589707573",
    "16"  : "https://s3.amazonaws.com/files.d20.io/images/135466889/UKmsxke8wBmPhKNW3bnwFg/max.png?1589699130",
    "17"  : "https://s3.amazonaws.com/files.d20.io/images/135466896/Bukbp6TRM8lIZizx1AIwTQ/max.png?1589699131",
    "18"  : "https://s3.amazonaws.com/files.d20.io/images/135466890/Uah-JdkPeLJgkicxIsf57g/max.png?1589699130",
    "19"  : "https://s3.amazonaws.com/files.d20.io/images/135466958/yA9phLIL4UJt0-DE5fdCFw/max.png?1589699159",
    "20"  : "https://s3.amazonaws.com/files.d20.io/images/135466957/v5xHgfMExcwZz7akpdXNLw/max.png?1589699159",
}

const APcommand = "!ActionPoints ";
const APtrackerName = "Action Point Tracker";
const APattributeName = "Action_Points";

const DPcommand = "!Doom ";
const DPtrackerName = "Doom Tracker";
const DPattributeName = "Doom";


function changeTracker(trackerName, attributeName, images, change) {
    let current;
    let min = images._min;
    let max = images._max;
    let pointsName = attributeName.replace("_", " ");
    let flag;
    let message = "";
    trackerObjs = findObjs({"name": trackerName});
    _.each(trackerObjs, function (obj) {
        trackerAttributes = findObjs({
                                         "_characterid": obj.get("_id"),
                                         "name"        : attributeName
                                     });
        _.each(trackerAttributes, function (attribute) {
            current = Number(attribute.get("current"));

            if (change == "increment") {
                if (current < max) {
                    current++;
                } else {
                    message = `Cannot further increase ${pointsName}, it is already at ${max}.`;
                    flag = "atMax";
                }
            }
            if (change == "decrement") {
                if (current > min) {
                    current--
                } else {
                    message = `Cannot further decrease ${pointsName}, it is already at ${min}.`;
                    flag = "atMin"
                }
            }
            attribute.set({"current": current});


        });
        let image = getCleanImgsrc(images[current]);

        obj.set({"imgsrc": image})
        obj.set({"avatar": image});

    });

    if (message == "") {
        message = `You now have  ${current} ${pointsName}.`;
    }
    sendChat("Point Tracker", message);
    return ({
        "current": current,
        "flag"   : flag
    });
}

on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf(APcommand) !== -1) {
        message = "";
        let action = msg.content.replace(APcommand, "");
        response = changeTracker(APtrackerName, APattributeName, APimages, action)

        if (response.flag == "atMin") {
            sendChat("Point Tracker", "You have made one step towards DOOM");
            changeTracker(DPtrackerName, DPattributeName, DPimages, "increment");
        }
    }
    if (msg.type == "api" && msg.content.indexOf(DPcommand) !== -1) {
        let action = msg.content.replace(DPcommand, "");
        changeTracker(DPtrackerName, DPattributeName, DPimages, action);
    }
});
