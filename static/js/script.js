/**
 * script.js
 * このスクリプトはWebブラウザ上で実行されます．
 */

$(document).ready(function() {
    var viewer = new Cesium.Viewer('cesiumContainer');
    //var data = viewer.dataSources.add(Cesium.CzmlDataSource.load('/static/simple.czml'));
    var data = Cesium.CzmlDataSource.load('/static/practice.czml');
    //console.log(data);
    viewer.dataSources.add(data);
    /*
    viewer.dataSources.add(Cesium.KmlDataSource.load('/static/TimeStamp_example.kml'), {
        camera: viewer.scene.camera, 
        canvas: viewer.scene.canvas
    });*/    
});
