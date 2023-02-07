import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,
Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { Header } from '../components'
import  { jobs }  from '../data/data'
import { ordersGrid, ordersData} from '../data/dummy'
const Projects = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bh-white rounded-3xl'>
      <Header title="Projects" category="Page"/>
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]}/>
      </GridComponent>
    </div>
  )
}

export default Projects