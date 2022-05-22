import React, { useEffect } from 'react'
import "./index.less"
import { Outlet } from 'react-router-dom';
import PageHeader from "../../pageHeader/index.jsx"

export default function Picture() {
  return (
    <div style={{ height: '100%' }}>
      <PageHeader tilte={"PICTURE"} img={'assets/images/mainpage/image/picture-header.jpg'}></PageHeader>
      <Outlet></Outlet>
    </div>
  )
}
