"use client"

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SizeColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import { ApiList } from '@/components/ui/api-list'

interface SizeClientProps {
  data: SizeColumn[]
}

export const SizeClient = ({ data }: SizeClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Sizes (${data.length})`} description="Manage sizes for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title="API's" description='API calls for sizes' />
      <Separator />
      <ApiList entityName='sizes' entityIdName='Your sizeId' />
    </>
  )
}
