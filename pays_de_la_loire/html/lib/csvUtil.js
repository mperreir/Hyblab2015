/*global XMLHttpRequest */
var moduleCSV = function () {
    'use strict';
    return {
        csvToObject : function (csvString, separator) {
            if (separator === undefined) {
                separator = ";";
            }
            
            if (csvString === undefined || csvString === "") {
                return undefined;
            }
            
            var csvObject = {},
                lines = csvString.split("\n"),
                i,
                j,
                currentLine,
                memberId,
                memberData,
                lineExploded;
            
            csvObject.firstLine = lines[0].substring(1).split(separator);
            
            for (i = 1; i < lines.length; i += 1) {
                currentLine = lines[i];
                lineExploded = currentLine.split(separator);
                memberId = lineExploded[0];
                if (memberId !== "") {
                    memberData = [];
                    for (j = 1; j < lineExploded.length; j += 1) {
                        memberData.push(lineExploded[j]);
                    }
                    csvObject[memberId] = memberData;
                }
            }
            return csvObject;
        },
        
        readTextFile : function (file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status === 0) {
                        var allText = rawFile.responseText;
                        callback(allText);
                        rawFile.abort();
                    }
                }
            };
            rawFile.send(null);
        }
    };
};