import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { MoreVertical, Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner';


function CommentList({ commentList, userDetail, updatePostList }) {

    const [commentListData, setCommentListData] = useState(commentList);

    const onDeleteComment = (comment) => {
        const result = commentListData.filter(item => item._id != comment._id)
        setCommentListData(result);
        GlobalApi.deleteComment(comment._id).then(resp => {
            if (resp) {
                toast.custom((t) => (
                    <div className="bg-green-500 text-white px-8 py-5 rounded w-100 flex flex-col gap-1"
                        onClick={() => toast.dismiss(t)}>
                        <div className="font-bold text-base">Deleted!</div>
                        <div>Comment deleted successfully</div>
                    </div>
                ));
            }
        })
        updatePostList();
    }

    return (
        <div>
            {commentListData.map((item, index) => (
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
                    {item.createdBy?._id == userDetail?._id &&
                        <Popover>
                            <PopoverTrigger>
                                <MoreVertical className='h-5 w-5 cursor-pointer' />
                            </PopoverTrigger>
                            <PopoverContent>
                                <Button
                                    className='w-full flex gap-2'
                                    variant="outline"
                                    onClick={() => onDeleteComment(item)}>
                                    <Trash />Delete
                                </Button>
                            </PopoverContent>
                        </Popover>
                    }
                </div>
            ))}
        </div>
    )
}

export default CommentList