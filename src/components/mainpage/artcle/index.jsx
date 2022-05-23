import React from 'react'
import './index.less';
import { Outlet } from 'react-router-dom';
import PageHeader from '../../pageHeader';

export default function Index(props) {
  return (
    <div style={{height:'100%'}}>
      <PageHeader title={"ARTCLE"} img={"assets/images/mainpage/image/artcle-header.jpg"}></PageHeader>
    <Outlet></Outlet>
    </div>
  )
}
