import { Button } from '@/components/ui/button';
import { SquarePen, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Dialog from '../_components/Dialog';

const UserProfile = ({ user, blogs }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gradient-to-r dark:from-gray-800  dark:to-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <div className="max-w-4xl w-full space-y-8 dark:bg-black bg-white p-10 rounded-xl shadow-lg">
                <div className="items-center justify-center w-full ">
                    <div className='flex flex-col w-full items-center justify-center '>
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
                            {/* {user.name} */}
                            Ritesh
                        </h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                            {/* {user.email} */}
                            Test@gmail.com
                        </p>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                            Account created on: 12 May 2014
                            {/* {user.createdDate} */}
                        </p>
                        <div className="mt-4 flex justify-center items-center gap-5">
                            <Button variant="update">
                                <SquarePen strokeWidth={3} size={17} />
                            </Button>
                         <span>
                            <Dialog  item={<Trash strokeWidth={3} size={17} />}/> 
                         </span>
                        </div>
                    </div>
                </div>
              
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
                    {/* Blog card */}
                    {/* 1 */}
                    <Link href={"/home/1"} className="dark:bg-black bg-white w-full rounded-xl shadow-md flex flex-col overflow-hidden">
                        <div className="w-full h-64 overflow-hidden">
                            <Image src={"/post.png"} width={1780} height={500} alt="blog Image" loading='lazy' className="object-cover w-full h-full object-center rounded-lg"/>
                        </div>
                        <h3 className="font-bold capitalize truncate overflow-hidden w-full py-3 px-5"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className="flex w-full justify-between items-center text-xs text-gray-700 dark:text-gray-400 mb-2 px-4">
                            <p> Author : Ritesh </p>
                            <p>Date : 17/01/2024 </p>
                        </div>
                    </Link>
                    {/* 2 */}
                    <Link href={"/home/1"} className="dark:bg-black bg-white w-full rounded-xl shadow-md flex flex-col overflow-hidden">
                        <div className="w-full h-64 overflow-hidden">
                            <Image src={"/post.png"} width={1780} height={500} alt="blog Image" loading='lazy' className="object-cover w-full h-full object-center rounded-lg"/>
                        </div>
                        <h3 className="font-bold capitalize truncate overflow-hidden w-full py-3 px-5"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className="flex w-full justify-between items-center text-xs text-gray-700 dark:text-gray-400 mb-2 px-4">
                            <p> Author : Ritesh </p>
                            <p>Date : 17/01/2024 </p>
                        </div>
                    </Link>
                    {/* 3 */}
                    <Link href={"/home/1"} className="dark:bg-black bg-white w-full rounded-xl shadow-md flex flex-col overflow-hidden">
                        <div className="w-full h-64 overflow-hidden">
                            <Image src={"/post.png"} width={1780} height={500} alt="blog Image" loading='lazy' className="object-cover w-full h-full object-center rounded-lg"/>
                        </div>
                        <h3 className="font-bold capitalize truncate overflow-hidden w-full py-3 px-5"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className="flex w-full justify-between items-center text-xs text-gray-700 dark:text-gray-400 mb-2 px-4">
                            <p> Author : Ritesh </p>
                            <p>Date : 17/01/2024 </p>
                        </div>
                    </Link>
                </div>
        </div>
    );
};

export default UserProfile;