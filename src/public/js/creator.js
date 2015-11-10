/**
 * Created by vishwass on 09-11-2015.
 */
"use strict";

function collectValues(mr) {
    var SKIP_SMOKETEST = "SKIP_SMOKETEST";
    console.log(JSON.stringify(mr));
    var template = "";
    var textArea = document.getElementById('output');
    // textArea.value =  JSON.stringify(mr);
    if (mr !== undefined && mr.depends === "Yes" ) {
        if (mr.skip === "Yes") {
            template = "Story Id: " + mr.story + "\n" +
                "Story: " + mr.storyId + "\n" +
                "Constraint: " + mr.constraints + "\n" +
                "Completes-increment: " + mr.increment + "\n" +
                mr.desc + "\n" +
                SKIP_SMOKETEST + "\n" +
                "DEPENDS: " + mr.moduleName.name + " " + mr.mrNo + "\n" +
                "SCT: " + mr.sct;
        } else {
            template = "Story Id: " + mr.story + "\n" +
                "Story: " + mr.storyId + "\n" +
                "Constraint: " + mr.constraints + "\n" +
                "Completes-increment: " + mr.increment + "\n" +
                mr.desc + "\n" +
                "DEPENDS: " + mr.moduleName.name + " " + mr.mrNo + "\n" +
                "SCT: " + mr.sct;
        }
    } else if (mr !== undefined) {
        if (mr.skip === "Yes") {
            template = "Story Id: " + mr.story + "\n" +
                "Story: " + mr.storyId + "\n" +
                "Constraint: " + mr.constraints + "\n" +
                "Completes-increment: " + mr.increment + "\n" +
                mr.desc + "\n" +
                SKIP_SMOKETEST + "\n" +
                "SCT: " + mr.sct;
        } else {
            template = "Story Id: " + mr.story + "\n" +
                "Story: " + mr.storyId + "\n" +
                "Constraint: " + mr.constraints + "\n" +
                "Completes-increment: " + mr.increment + "\n" +
                mr.desc + "\n" +
                "SCT: " + mr.sct;
        }
    }

    textArea.value = template;
}
