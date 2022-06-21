import React,{useState,useEffect} from 'react'

//引入leaflet
import L from "leaflet";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "./map.less";

import tileMap from  "../../../assets/dbgmap/dbg2map_225773205_256X256_PNG.mbtiles";

//引入MBtiles库
// import "sql.js"
// import '@supermap/iclient-leaflet';
// require("leaflet-tilelayer-mbtiles")
require("sql.js")
export default function Map() {
  const [map,setMap] =useState({})

  const initMap=()=>{
     let map = L.map("myMap",{
      center:[0.0116046894120897,0.0116046894120897],
      crs:L.CRS.EPSG3857,
      minZoom:1,
      maxZoom:18,//设置最大最小缩放层级
      // maxBounds:[[0.024719237514403372,0.00042915344238281255],[0.024719237514403372,0.03334522247314454],[0.0002145767211831047,0.00042915344238281255],[0.0002145767211831047,0.03338813781738282]],
    //下面是可选按钮,按需配置
      zoomControl:true,//+,-按钮
      attributionControl:false,//右下角leaflet标识
  })
  L.tileLayer.mbTiles(tileMap).addTo(map);
  L.marker([0.0116046894120897,0.0116046894120897]).addTo(map);
  map.setView([0.0116046894120897,0.0116046894120897],16)
    //  let map = L.map("myMap", {
    //     //地图初始化配置选项
    //     minZoom: 1,
    //     maxZoom: 14, //设置最大最小缩放层级
    //     center: [39.909186, 116.397411], //设定地图中心
    //     //设置加载的图层
    //   });
    //   map.setView([39.909186, 116.397411],12)
    //   let GDurl =
    //     "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    //   L.tileLayer(GDurl).addTo(map);
    //   L.marker([39.909186, 116.397411]).addTo(map)
  //  setMap(map);

  console.log(map)



  }

  useEffect(()=>{
    initMap();
  },[])

  return (
    <div>
      <div id="myMap" className='myMap'>
      </div>
    </div>
  )
}
