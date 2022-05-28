import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import PageHeader from "../../pageHeader/index.jsx"
import './index.less'

export default function Picture() {
  return (
    <div style={{ height: '100%' }}>
      <PageHeader title={"PICTURE"} img={'assets/images/blog-picture-dabiaoge/picture-header.png'}></PageHeader>
      <Outlet></Outlet>
    </div>
  )
}
