"use client"

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ColorColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import { ApiList } from '@/components/ui/api-list'

interface ColorsClientProps {
  data: ColorColumn[]
}

export const ColorsClient = ({ data }: ColorsClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Colors (${data.length})`} description="Manage colors for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title="API's" description='API calls for colors' />
      <Separator />
      <ApiList entityName='colors' entityIdName='Your colorId' />
    </>
  )
}
