import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CommentList({ commentList }) {
    return (
        <div>
            {commentList.map((item, index) => (
                <div className='flex p-3 border rounded-lg m-2 items-center'>
                    <div className='flex items-center w-full gap-3'>
                        <Image src={item?.createdBy?.image}
                            alt="user-image"
                            width={35}
                            height={35}
                            className='rounded-full'
                        />
                        <h2 className='bg-orange-50 p-2 rounded-lg'>
                            {item.commentText}
                        </h2>
                    </div>
                    <MoreVertical className='h-5 w-5 cursor-pointer' />
                </div>
            ))}
        </div>
    )
}

export default CommentList