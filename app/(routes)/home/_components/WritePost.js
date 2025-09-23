import { UserDetailContext } from '@/app/_context/UserDetailContext';
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import { Image, Send, Video } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { toast } from "sonner"


function WritePost() {
    const { user } = useUser();
    const [userInputPost, setUserInputPost] = useState();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    const onCreatePost = () => {
        const data = {
            postText: userInputPost,
            createdAt: Date.now().toString(),
            createdBy: userDetail._id,
        }
        GlobalApi.createPost(data).then(resp => {
            console.log(resp);
            setUserInputPost("");
            if (resp) {
                toast.custom((t) => (
                    <div className="bg-green-500 text-white px-8 py-5 rounded w-100 flex flex-col gap-1"
                        onClick={() => toast.dismiss(t)}>
                        <div className="font-bold text-base">Awesome!</div>
                        <div>Your post has been created successfully</div>
                    </div>
                ));
            }
        }).catch(err => {
            toast.custom((t) => (
                <div className="bg-red-500 text-white px-8 py-5 rounded w-100 flex flex-col gap-1"
                    onClick={() => toast.dismiss(t)}>
                    <div className="font-bold text-base">Opps!</div>
                    <div>Some error occurred while creating your post.</div>
                </div>
            ));
        });

    }

    return (
        <div>
            <h2 className='text-[30px] font-medium text-gray-600'> Hello, {user.fullName}</h2>
            <h2 className='text-gray-400'>
                What's New with you? Would you want to share
                something with the community?
            </h2>
            <div className='p-3 border rounded-lg mt-5 bg-orange-100'>
                <h2>Create Post</h2>
                <div className='p-4 bg-white rounded-lg mt-2'>
                    <textarea placeholder="What's New"
                        className='outline-none w-full'
                        value={userInputPost}
                        onChange={(e) => setUserInputPost(e.target.value)}
                    />
                </div>
                <div className='mt-2 flex justify-between'>
                    <div className='flex gap-5'>
                        <h2 className='flex gap-2 items-center cursor-pointer
                    hover:bg-orange-200 p-2  rounded-lg'><Image className='h-5 w-5' /> Image </h2>
                        <h2 className='flex gap-2 items-center cursor-pointer
                    hover:bg-orange-200 p-2 rounded-lg'><Video className='h-5 w-5' /> Video </h2>
                    </div>
                    <Button
                        className="bg-yellow-500 rounded-xl gap-2
                hover:bg-orange-400"
                        disabled={!userInputPost?.length}
                        onClick={() => onCreatePost()}
                    >
                        <Send className='h-4 w-4' /> Publish</Button>
                </div>
            </div>
        </div>
    )
}

export default WritePost