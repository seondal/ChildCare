import React, { Component } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

class AmchartsEX extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;
    
    
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0);
    
    // Add image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{contents}";
    imageSeries.mapImages.template.propertyFields.url = "url";
    
    var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 5;
    circle.propertyFields.fill = "color";
    circle.nonScaling = true;
    
    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 5;
    circle2.propertyFields.fill = "color";
    
    
    circle2.events.on("inited", function(event){
      animateBullet(event.target);
    })
    
    
    function animateBullet(circle) {
        var animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function(event){
          animateBullet(event.target.object);
        })
    }
    
    var colorSet = new am4core.ColorSet();
    
    imageSeries.data = [ {
      "title": "Canada",
      "latitude": 59.8371,
      "longitude": -120.3676,
      "color":colorSet.getIndex(12),
      "contents": "- University of Toronto"
    }, {
      "title": "USA",
      "latitude": 38.8921,
      "longitude": -97.0241,
      "color":colorSet.getIndex(10),
      "contents":"- Stanford University (Language and Cognition Lab)"+"\n - Northwestern University"+"\n - Hofstra University (NY)"+"\n - Richmond street school (CA)"
    }, {
      "title": "Portugal",
      "latitude": 40.3369,
      "longitude": -8.3271,
      "color":colorSet.getIndex(8),
      "contents":"- Interactive Technologies Institute, University of Lisbon"
    }, {
      "title": "Korea",
      "latitude": 36.4571,
      "longitude":127.6272,
      "color":colorSet.getIndex(5),
      'contents':"- Samsung Medical Center (삼성 서울병원)"+"\n - Early childhood education centers in Seoul and Gyeonggi-do (서울 및 경기도 소재 유아교육기관)"+
      "\n - Seoul Foreign School (서울외국인학교)"+"\n - Seoul International School (서울국제학교)" +"\n - North London Collegiate School Jeju (NLCS 제주)"+ 
      "\n - Chadwick International School (채드윅 송도 국제학교)"+"\n - Dulwich College Seoul (덜위치칼리지 서울영국학교)"+"\n - Postech (포항공과대학교)"+"\n - Korean Institute of Brief Family Therapy (한국단기가족치료연구소)"
      +"\n - Seoul Seobu Distirct Office of Education (서울특별시 서부교육지원청)"
    } ];

  }
  render() {
    return <div id="chartdiv" style={{ width: '100%', height: '500px' }} />
  }
}

export default AmchartsEX
