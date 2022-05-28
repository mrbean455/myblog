import React from 'react'
import './index.less';
import { Outlet } from 'react-router-dom';
import PageHeader from '../../pageHeader';

export default function Index(props) {
  return (
    <div style={{height:'100%'}}>
      <PageHeader title={"ARTICLE"} img={"assets/images/blog-picture-dabiaoge/article-header.png"}></PageHeader>
    <Outlet></Outlet>
    </div>
  )
}
