import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './loading'

const Productdetailes = dynamic(()=> import('../../../components/ProductDetailes/Productdetailes'))

const Page = ({params}) => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Productdetailes params={params}/>
      </Suspense>
    </div>
  )
}

export default Page
